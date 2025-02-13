"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../../contexts/AuthContext"

export default function LoginHistoryModal({ isOpen, onClose }) {
  const [loginHistory, setLoginHistory] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { isAuthenticated, isAdmin } = useAuth()

  useEffect(() => {
    if (isAuthenticated && isAdmin && isOpen) {
      fetchLoginHistory()
    }
  }, [isAuthenticated, isAdmin, isOpen])

  const fetchLoginHistory = async () => {
    try {
      const response = await fetch("/api/user-logins")
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-black">Historial de Conexiones</h2>
        {isLoading ? (
          <p className="text-gray-600">Cargando historial...</p>
        ) : (
          <ul className="space-y-2">
            {loginHistory.map((login, index) => (
              <li key={index} className="border-b border-gray-200 py-2">
                <p className="text-sm text-gray-600">{new Date(login.login_timestamp).toLocaleString()}</p>
                <p className="text-sm text-gray-800">Usuario: {login.username}</p>
                <p className="text-xs text-gray-500">IP: {login.ip_address}</p>
              </li>
            ))}
          </ul>
        )}
        <button onClick={onClose} className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          Cerrar
        </button>
      </div>
    </div>
  )
}

