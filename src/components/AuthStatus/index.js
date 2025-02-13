  "use client"

import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import AuthModal from "../AuthModal"
import LoginHistoryModal from "../LoginHistoryModal"

export default function AuthStatus() {
  const { isAuthenticated, username, isAdmin, lastLogin, logout } = useAuth()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false)

  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleString()
  }

  if (isAuthenticated) {
    return (
      <div className="flex items-center space-x-4">
        <span>Bienvenido, {username}</span>
        {lastLogin && <span className="text-sm text-gray-500">Última conexión: {formatDate(lastLogin)}</span>}
        {isAdmin && (
          <button
            onClick={() => setIsHistoryModalOpen(true)}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Ver Historial
          </button>
        )}
        <button onClick={logout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Cerrar Sesión
        </button>
        <LoginHistoryModal isOpen={isHistoryModalOpen} onClose={() => setIsHistoryModalOpen(false)} />
      </div>
    )
  }

  return (
    <>
      <button
        onClick={() => setIsAuthModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Acceso
      </button>
      {isAuthModalOpen && <AuthModal onClose={() => setIsAuthModalOpen(false)} />}
    </>
  )
}

