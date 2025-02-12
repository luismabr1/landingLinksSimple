"use client"

import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"

export default function AuthModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setMessage("")

    const endpoint = isLogin ? "/api/login" : "/api/register"
    const body = isLogin ? { username, password } : { username, email, password }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      const data = await response.json()

      if (response.ok) {
        if (isLogin) {
          login(data.user)
          onClose()
        } else {
          setIsLogin(true)
          setMessage("Registro exitoso. Por favor, inicia sesión.")
        }
      } else {
        setError(data.message || "An error occurred")
      }
    } catch (error) {
      console.error("Error:", error)
      setError("An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-opacity-20 flex justify-center items-center">
      <div className="black:bg-white p-6 bg-opacity-70 rounded-lg border shadow-lg w-full max-w-sm backdrop-blur-sm">
        <h2 className="text-black dark:text-white text-xl font-bold mb-4">{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuario"
            className="text-black dark:text-white w-full p-2 mb-4 border rounded"
            required
          />
          {!isLogin && (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
              required
            />
          )}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-white dark:bg-black dark:hover:bg-white hover:bg-gray-700 hover:text-white text-black dark:text-white dark:hover:text-black border dark:border-white border-black font-bold py-2 px-4 rounded flex items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-black dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Procesando...
                </>
              ) : isLogin ? (
                "Entrar"
              ) : (
                "Registrarse"
              )}
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
              type="button"
            >
              Cancelar
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-black dark:text-white bg-white dark:bg-black p-2 rounded">
          {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
          <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 hover:text-blue-700 ml-2">
            {isLogin ? "Regístrate" : "Inicia sesión"}
          </button>
        </p>
      </div>
    </div>
  )
}

