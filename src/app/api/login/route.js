import { supabase } from "../../../lib/supabase-server"
import { v4 as uuidv4 } from "uuid"
import { cookies } from "next/headers"
import bcrypt from "bcryptjs"

export async function POST(request) {
  const { username, password } = await request.json()

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

  // Set is_authorized to true
  const { error: updateError } = await supabase.from("users").update({ is_authorized: true }).eq("id", user.id)

  if (updateError) {
    console.error("Error al actualizar is_authorized:", updateError)
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
        is_authorized: true,
      },
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  )
}
