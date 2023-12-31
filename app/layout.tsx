import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Eda Akturk",
  description: "Eda Akturk's personal website",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <h1 className="text-4xl font-bold text-pink-600">Eda Akturk</h1>
            <h2 className="mb-2 text-pink-500">Developer & Educator</h2>
            <p> 
              <a href="https://twitter.com/edatweets_" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700"> Twitter</a>, 
              <a href="https://github.com/edakturk14" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700"> GitHub</a>, 
              <a href="https://www.linkedin.com/in/eda-akturk-a9624b105/" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700"> Linkedin</a>,           
              <a href="https://www.goodreads.com/user/show/132319008-eda-akturk" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700"> GoodReads</a>.
            </p>
            <p className="mb-2 italic"> 
              📩 Ocassionaly sending emails via 
              <a href="https://edatweets.substack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700"> Substack</a>
              </p>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
