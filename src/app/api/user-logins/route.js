import { supabase } from "../../../lib/supabase-server"
import { cookies } from "next/headers"

export async function GET(request) {
  const token = cookies().get("auth_token")?.value

  if (!token) {
    return new Response(JSON.stringify({ message: "No autorizado" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Verificar el token y obtener el user_id
  const { data: tokenData, error: tokenError } = await supabase
    .from("tokens")
    .select("user_id")
    .eq("token", token)
    .single()

  if (tokenError || !tokenData) {
    return new Response(JSON.stringify({ message: "Token inválido" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Verificar si el usuario es administrador
  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("is_admin")
    .eq("id", tokenData.user_id)
    .single()

  if (userError || !userData || !userData.is_admin) {
    return new Response(JSON.stringify({ message: "Acceso denegado" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Obtener el historial de conexiones
  const { data: loginHistory, error: loginError } = await supabase
    .from("user_logins")
    .select("login_timestamp, ip_address, users(username)")
    .order("login_timestamp", { ascending: false })
    .limit(50) // Ajusta según tus necesidades

  if (loginError) {
    return new Response(JSON.stringify({ message: "Error al obtener el historial de conexiones" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Formatear los datos para la respuesta
  const formattedHistory = loginHistory.map((login) => ({
    login_timestamp: login.login_timestamp,
    ip_address: login.ip_address,
    username: login.users.username,
  }))

  return new Response(JSON.stringify({ loginHistory: formattedHistory }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}


