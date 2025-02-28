"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/categories", label: "Categorie Gelato" },
    { href: "/dashboard/ingredient-categories", label: "Categorie Ingredienti" },
    { href: "/dashboard/recipes", label: "Ricette" },
]

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    return (
        <nav className="flex-1 ml-8">
            <Button
                className="lg:hidden"
                variant="ghost"
                size="icon"
                aria-label="Toggle menu"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <ul
                className={cn(
                    "flex flex-col lg:flex-row lg:space-x-8 lg:items-center",
                    isOpen ? "absolute left-0 right-0 top-20 bg-primary p-4 space-y-4" : "hidden lg:flex",
                )}
            >
                {navItems.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={cn(
                                "text-white hover:text-gray-200 transition-colors",
                                pathname === item.href && "font-semibold underline",
                            )}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

