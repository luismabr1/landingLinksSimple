import { supabase } from "../../../lib/supabase-server"
import { cookies } from "next/headers"

export async function POST() {
  const token = cookies().get("auth_token")?.value

  if (token) {
    // Find the user associated with this token
    const { data: tokenData, error: tokenError } = await supabase
      .from("tokens")
      .select("user_id")
      .eq("token", token)
      .single()

    if (!tokenError && tokenData) {
      // Set is_authorized to false
      await supabase.from("users").update({ is_authorized: false }).eq("id", tokenData.user_id)

      // Delete the token
      await supabase.from("tokens").delete().eq("token", token)
    }

    // Clear the cookie
    cookies().delete("auth_token")
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}