import { NextResponse } from "next/server"
import { supabase } from "./lib/supabase-server"

export async function middleware(request) {
  const token = request.cookies.get("auth_token")?.value

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Verificar el token en la base de datos
  const { data: tokenData, error: tokenError } = await supabase
    .from("tokens")
    .select("user_id, expires_at")
    .eq("token", token)
    .single()

  if (tokenError || !tokenData || new Date(tokenData.expires_at) < new Date()) {
    // Token no encontrado o expirado
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Verificar si el usuario está autorizado
  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("is_authorized")
    .eq("id", tokenData.user_id)
    .single()

  if (userError || !userData || !userData.is_authorized) {
    return NextResponse.redirect(new URL("/unauthorized", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/protected/:path*"],
}