"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../../contexts/AuthContext"

export default function LoginHistory() {
  const [loginHistory, setLoginHistory] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { isAuthenticated, is_admin } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      fetchLoginHistory()
    }
  }, [isAuthenticated])

  const fetchLoginHistory = async () => {
    try {
      const response = await fetch(`/api/user-logins`)
      if (response.ok) {
        const data = await response.json()
        setLoginHistory(data.loginHistory)
      } else {
        console.error("Error fetching login history")
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isAuthenticated) {
    return null
  }

  if (is_admin && isLoading) {
    return <div className="text-black dark:text-white">Cargando historial de conexiones...</div>
  }

  return (
    <div className="mt-4">
      { is_admin &&
        <h2 className=" text-xl font-bold mb-2 text-black dark:text-white">Historial de Conexiones</h2>
      }
 

      <ul className="space-y-2">
        {loginHistory.map((login, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded text-black dark:text-black dark:bg-white">
            <p>Fecha: {new Date(login.login_timestamp).toLocaleString()}</p>
            <p>IP: {login.ip_address}</p>
            <p>Navegador: {login.user_agent}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

