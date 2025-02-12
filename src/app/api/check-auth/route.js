 import { supabase } from "../../../lib/supabase-server"
import { cookies } from "next/headers"

export async function GET() {
  const token = cookies().get("auth_token")?.value

  if (!token) {
    return new Response(JSON.stringify({ authenticated: false }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Verificar el token en la base de datos
  const { data: tokenData, error: tokenError } = await supabase
    .from("tokens")
    .select("user_id, expires_at")
    .eq("token", token)
    .single()

  if (tokenError || !tokenData || new Date(tokenData.expires_at) < new Date()) {
    // Token no encontrado o expirado
    cookies().delete("auth_token")
    return new Response(JSON.stringify({ authenticated: false }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Obtener la información del usuario
  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("username, is_authorized, created_at, updated_at")
    .eq("id", tokenData.user_id)
    .single()

  if (userError || !userData) {
    return new Response(JSON.stringify({ authenticated: false }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    })
  }

  return new Response(
    JSON.stringify({
      authenticated: true,
      username: userData.username,
      is_authorized: userData.is_authorized,
      created_at: userData.created_at,
      updated_at: userData.updated_at,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  )
}



