import type React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import UserDropdown from "@/app/user-dropdown";
import Navigation from "@/components/navigation";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-popins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gelato Perfetto",
  description: "Your personal gelato recipe assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.variable} antialiased`}>
          <header className="bg-primary text-white">
            <div className="mx-auto px-4 py-4 flex items-center justify-between">
              <Link
                href="/"
                className="font-bold text-2xl flex gap-1 items-center"
              >
                <Image
                  src="/logo-ag.png"
                  alt="Gelato Perfetto logo"
                  className="h-16"
                />
                <span className="sr-only">Gelato Perfetto</span>
              </Link>
              <Navigation />
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
                  <UserDropdown />
                </SignedIn>
              </div>
            </div>
          </header>
          <main className="w-full mx-auto">{children}</main>

        </body>
      </html>
    </ClerkProvider>
  );
}
