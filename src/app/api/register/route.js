  import { supabase } from "../../../lib/supabase-server"
  import bcrypt from "bcryptjs"
  
  const ADMIN_CODE = process.env.ADMIN_REGISTRATION_CODE // Asegúrate de configurar esta variable de entorno
  
  export async function POST(request) {
    const { username, email, password, isAdmin, adminCode } = await request.json()
  
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
  
    // Verificar el código de administrador si se está intentando crear una cuenta de administrador
    if (isAdmin && adminCode !== ADMIN_CODE) {
      return new Response(JSON.stringify({ message: "Código de administrador inválido" }), {
        status: 403,
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
        is_admin: isAdmin,
        is_authorized: true, // Asumimos que todos los usuarios registrados están autorizados inicialmente
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
        message: "Usuario creado exitosamente",
        user: {
          id: data[0].id,
          username: data[0].username,
          email: data[0].email,
          is_admin: data[0].is_admin,
          is_authorized: data[0].is_authorized,
        },
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
  
  