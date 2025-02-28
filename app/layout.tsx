import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import UserDropdown from "@/app/user-dropdown"
import Navigation from "@/components/navigation"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-popins",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Gelato Perfetto",
  description: "Your personal gelato recipe assistant",
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <ClerkProvider>
        <html lang="en">
        <body className={`${poppins.variable} antialiased`}>
        <header className="bg-primary text-white">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-2xl flex gap-1 items-center">
              <img src="/logo-ag.png" alt="Gelato Perfetto logo" className="h-16" />
              <span className="sr-only">Gelato Perfetto</span>
            </Link>
            <Navigation />
            <div>
              <SignedOut>
                <div className="flex items-center gap-4">
                  <Button asChild variant="ghost" className="text-white hover:text-primary hover:bg-white">
                    <SignInButton />
                  </Button>
                  <Button asChild variant="outline" className="text-white hover:text-primary hover:bg-white">
                    <SignUpButton />
                  </Button>
                </div>
              </SignedOut>
              <SignedIn>
                <UserDropdown />
              </SignedIn>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-100 mt-auto">
          <div className="container mx-auto px-4 py-6 text-center text-gray-600">
            © {new Date().getFullYear()} Gelato Perfetto. All rights reserved.
          </div>
        </footer>
        </body>
        </html>
      </ClerkProvider>
  )
}

