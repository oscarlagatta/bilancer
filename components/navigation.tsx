"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/recipes", label: "Ricette" },
    { href: "/dashboard/categories", label: "Categorie Gelato" },
    { href: "/dashboard/ingredient-categories", label: "Categorie Ingredienti" },
    { href: "/dashboard/ingredients", label: "Ingredienti" },
]

export default function Navigation() {
    const pathname = usePathname()

    // Custom styles for the navigation menu link
    const navigationMenuTriggerStyle = (isActive: boolean) => {
        return cn(
            "group inline-flex h-9 w-max items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 hover:text-gray-200 focus:bg-primary/90 focus:text-gray-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
            isActive && "font-semibold underline",
        )
    }

    // Desktop navigation using NavigationMenu
    const DesktopNav = () => (
        <NavigationMenu className="hidden lg:flex ml-8">
            <NavigationMenuList className="flex space-x-4">
                {navItems.map((item) => (
                    <NavigationMenuItem key={item.href}>
                        <Link href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle(pathname === item.href)}>
                                {item.label}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )

    // Mobile navigation using Sheet
    const MobileNav = () => (
        <Sheet>
            <SheetTrigger asChild className="lg:hidden ml-8">
                <Button variant="ghost" size="icon" aria-label="Toggle menu">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-primary w-64 p-0">
                <nav className="flex flex-col p-4">
                    <ul className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "text-white hover:text-gray-200 transition-colors block py-2",
                                        pathname === item.href && "font-semibold underline",
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    )

    return (
        <>
            <MobileNav />
            <DesktopNav />
        </>
    )
}

