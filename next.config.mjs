/** @type {import('next').NextConfig} */
import 'dotenv/config'
const nextConfig = {
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SERVER_URL_MODO: process.env.SERVER_URL_MODO,
    NEXT_PUBLIC_PORT_MODO: process.env.PORT_MODO,
},
};

export default nextConfig;
