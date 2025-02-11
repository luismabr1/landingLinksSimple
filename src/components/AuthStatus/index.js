"use client"

import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import AuthModal from "../AuthModal"

export default function AuthStatus() {
  const { isAuthenticated, username, logout } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (isAuthenticated) {
    return (
      <div className="flex items-center space-x-4">
        <span>Bienvenido, {username}</span>
        <button onClick={logout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Cerrar Sesión
        </button>
      </div>
    )
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Acceso
      </button>
      {isModalOpen && <AuthModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}