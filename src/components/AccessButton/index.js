/* "use client"

import { useState } from "react"
import AuthModal from "../AuthModal"

export default function AccessButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
} */

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
        className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Acceso
      </button>
      {isModalOpen && <AuthModal onClose={() => setIsModalOpen(false)} onLoginSuccess={handleLoginSuccess} />}
    </>
  )
}


