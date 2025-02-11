import { supabase } from "../../../lib/supabase-server"
import bcrypt from "bcryptjs"

export async function POST(request) {
  const { username, email, password, requestAuthorization } = await request.json()

  // Verificar si el usuario ya existe
  const { data: existingUser } = await supabase
    .from("users")
    .select("*")
    .or(`username.eq.${username},email.eq.${email}`)
    .single()

  if (existingUser) {
    return new Response(JSON.stringify({ message: "Usuario o email ya existe" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Hash de la contraseña
  const hashedPassword = await bcrypt.hash(password, 10)

  // Insertar nuevo usuario
  const { data, error } = await supabase
    .from("users")
    .insert({
      username,
      email,
      password: hashedPassword,
      is_authorized: requestAuthorization ? false : true, // Si se solicita autorización, se establece en false
    })
    .select()

  if (error) {
    return new Response(JSON.stringify({ message: "Error al crear el usuario" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }

  return new Response(
    JSON.stringify({
      message: requestAuthorization
        ? "Usuario creado exitosamente. La autorización está pendiente."
        : "Usuario creado y autorizado exitosamente.",
    }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    },
  )
}
