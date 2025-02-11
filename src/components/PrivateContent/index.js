"use client"

import { useAuth } from "../../contexts/AuthContext"

export default function PrivateContent({ children }) {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <div>Cargando...</div>
  }

  if (!isAuthenticated) {
    return <div>No estás autorizado para ver este contenido.</div>
  }

  return <>{children}</>
}
