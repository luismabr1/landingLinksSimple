import { supabase } from "../../../lib/supabase-server"

export async function GET() {
  const { error } = await supabase.from("tokens").delete().lt("expires_at", new Date().toISOString())

  if (error) {
    console.error("Error al limpiar tokens expirados:", error)
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}



