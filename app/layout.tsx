import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image";
import Navigation from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
} from "@clerk/nextjs";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import UserDropdown from "@/app/user-dropdown";
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Bilancer",
    description: "Ice cream recipe management system",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (

        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ClerkProvider>
            <div className="flex flex-col min-h-screen">

                <header className="bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                        <Link
                            href="/"
                            className="font-bold text-2xl flex gap-1 items-center"
                        >
                            <Image
                                src="/logo-ag.png"
                                alt="Gelato Perfetto logo"
                                width={64}
                                height={64}

                            />
                            <span className="sr-only">Gelato Perfetto</span>
                        </Link>
                        <Navigation/>
                        <div>
                            <SignedOut>
                                <div className="flex items-center gap-4">
                                    <Button
                                        asChild
                                        variant="ghost"
                                        className="text-white hover:text-primary hover:bg-white"
                                    >
                                        <SignInButton mode="modal"/>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="text-white hover:text-primary hover:bg-white"
                                    >
                                        <SignUpButton mode="modal"/>
                                    </Button>
                                </div>
                            </SignedOut>
                            <SignedIn>
                                <UserDropdown/>
                            </SignedIn>
                        </div>
                    </div>
                </header>
                <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
                <footer className="bg-primary text-primary-foreground py-4">
                    <div className="container mx-auto px-4 text-center">© 2023 Bilancer. All rights reserved.</div>
                </footer>
            </div>
            </ClerkProvider>
        </ThemeProvider>
        </body>
        </html>

    )
}

