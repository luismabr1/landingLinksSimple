export default function Unauthorized() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">No autorizado</h1>
        <p className="text-xl mb-8">No tienes permiso para acceder a esta página.</p>
        <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Volver al inicio
        </a>
      </div>
    )
  }
  