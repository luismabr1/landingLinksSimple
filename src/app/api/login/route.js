import { supabase } from "../../../lib/supabase-server"
import { v4 as uuidv4 } from "uuid"
import { cookies } from "next/headers"
import bcrypt from "bcryptjs"

export async function POST(request) {
  const { username, password } = await request.json()
  const clientIp = request.headers.get("x-forwarded-for") || "Unknown"
  const userAgent = request.headers.get("user-agent") || "Unknown"

  // Buscar el usuario
  const { data: user, error: userError } = await supabase.from("users").select("*").eq("username", username).single()

  if (userError || !user) {
    return new Response(JSON.stringify({ message: "Usuario no encontrado" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Verificar la contraseña
  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    return new Response(JSON.stringify({ message: "Contraseña incorrecta" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Generar y guardar el token
  const token = uuidv4()
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 horas desde ahora

  const { error: tokenError } = await supabase
    .from("tokens")
    .insert({ user_id: user.id, token, expires_at: expiresAt.toISOString() })

  if (tokenError) {
    return new Response(JSON.stringify({ message: "Error al generar el token" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Registrar el inicio de sesión en la tabla user_logins
  const now = new Date().toISOString()
  const { error: loginError } = await supabase.from("user_logins").insert({
    user_id: user.id,
    login_timestamp: now,
    ip_address: clientIp,
    user_agent: userAgent,
  })

  if (loginError) {
    console.error("Error al registrar el inicio de sesión:", loginError)
  }

  // Actualizar last_login en la tabla users
  const { error: updateError } = await supabase.from("users").update({ last_login: now }).eq("id", user.id)

  if (updateError) {
    console.error("Error al actualizar last_login:", updateError)
  }

  // Establecer la cookie con el token
  cookies().set("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: expiresAt,
  })

  return new Response(
    JSON.stringify({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        is_authorized: user.is_authorized,
        last_login: now,
      },
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  )
}
