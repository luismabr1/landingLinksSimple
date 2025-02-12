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
        <button onClick={logout} className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded">
          Cerrar Sesión
        </button>
      </div>
    )
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded"
      >
        Acceso
      </button>
      {isModalOpen && <AuthModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}