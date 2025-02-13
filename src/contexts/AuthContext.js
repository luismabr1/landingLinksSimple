"use client"

import { createContext, useState, useContext, useEffect } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [lastLogin, setLastLogin] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/check-auth")
      const data = await response.json()

      setIsAuthenticated(data.authenticated)
      if (data.authenticated) {
        setUsername(data.username)
        setIsAdmin(data.is_admin)
        setLastLogin(data.last_login)
      }
    } catch (error) {
      console.error("Error checking authentication:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    checkAuth()
  }, []) //Fixed: Added empty dependency array [] to useEffect

  const login = (userData) => {
    setIsAuthenticated(true)
    setUsername(userData.username)
    setIsAdmin(userData.is_admin)
    setLastLogin(userData.last_login)
  }

  const logout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
      })

      if (response.ok) {
        setIsAuthenticated(false)
        setUsername("")
        setIsAdmin(false)
        setLastLogin(null)
      } else {
        console.error("Logout failed")
      }
    } catch (error) {
      console.error("Error during logout:", error)
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, username, isAdmin, lastLogin, isLoading, login, logout, checkAuth }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)


