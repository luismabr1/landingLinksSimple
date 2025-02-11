import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import { cookies } from "next/headers";
import dynamic from "next/dynamic";
import { AuthProvider } from "../contexts/AuthContext"

const AppThemeProvider = dynamic(() => import("@/contexts/theme"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MoDo Link",
  description: "MoDo Links para MoDo CCS",
};

export default function RootLayout({ children }) {
  const theme = cookies().get("__theme__")?.value || "system";
  return (
    <html className={theme} lang="en" style={theme !== "system" ? { colorScheme: theme } : {}} >
      <body className="bg-white dark:bg-black min-h-dvh ">
        <AppThemeProvider  attribute="class" defaultTheme={theme} enableSystem >
          <AuthProvider>
            <Navbar />
            {children}
          </AuthProvider>
        </AppThemeProvider>
      <Footer />
      </body>
    </html>
  );
}
