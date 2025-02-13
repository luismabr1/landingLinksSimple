"use client"

import { useAuth } from "../../contexts/AuthContext"

export default function PrivateContent({ children }) {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <div className="dark:text-white text-black">Cargando...</div>
  }

  if (!isAuthenticated) {
    return <div className="dark:text-white text-black">No estás autorizado para ver este contenido.</div>
  }
if (isAuthenticated) {
    return <>{children}</>
  }
}
