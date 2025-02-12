"use client"

import { useState } from "react"
import AuthModal from "../AuthModal"

export default function AccessButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLoginSuccess = () => {
    setIsModalOpen(false)
    window.location.reload() // Esto forzará una recarga de la página para actualizar el estado de autenticación
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-center bg-transparent hover:bg-black text-black dark:text-white dark:hover:bg-white dark:hover:text-black font-semibold hover:text-white p-3 m-3 border dark:border-white border-black hover:border-transparent rounded"
      >
        Acceso
      </button>
      {isModalOpen && <AuthModal onClose={() => setIsModalOpen(false)} onLoginSuccess={handleLoginSuccess} />}
    </>
  )
}


