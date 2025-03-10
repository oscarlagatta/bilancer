"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"

// Define the navigation structure
const navigationItems = [
    {
        title: "📊 Dashboard",
        href: "/dashboard",
    },
    {
        title: "📜 Ricette",
        href: "/dashboard/recipe",
        children: [
            { title: "📖 Tutte le ricette", href: "/dashboard/recipe" },
            { title: "🆕 Crea nuova ricetta", href: "/dashboard/recipe/new" },
            {
                title: "🔄 Versioni precedenti",
                href: "#",
                children: [
                    { title: "⏳ Cronologia delle modifiche", href: "#" },
                    { title: "⬆️ Ripristina una versione precedente", href: "#" },
                    { title: "📝 Confronta le versioni", href: "#" },
                ],
            },
        ],
    },
    {
        title: "⚙️ Gestione Impostazioni",
        href: "#",
        children: [
            { title: "🍦 Categorie di gelati", href: "/dashboard/categories" },
            { title: "🧂 Categorie d'ingredienti", href: "/dashboard/ingredient-categories" },
            { title: "🧪 Ingredienti", href: "/dashboard/ingredients" },
            { title: "⚖️ Unità di misura", href: "#" },
            {
                title: "📊 Analisi nutrizionale",
                href: "#",
                children: [{ title: "Stampa cartellino dei valori nutizionali", href: "#" }],
            },
            {
                title: "📂 Importa/esporta ricette",
                href: "#",
                children: [
                    { title: "📤 Esporta in formato PDF, Excel o JSON", href: "#" },
                    { title: "📥 Importa ricette da un file o database", href: "#" },
                ],
            },
            {
                title: "🔐 Gestione utenti e permessi",
                href: "#",
                children: [
                    { title: "👥 Assegna ruoli e permessi", href: "#" },
                    { title: "🔄 Gestisci utenti e collaboratori", href: "#" },
                ],
            },
            { title: "🔄 Sostituti consigliati", href: "#" },
        ],
    },
    {
        title: "Extra Funzionalità",
        href: "#",
        children: [
            { title: "📅 Calendario stagionale", href: "#" },
            { title: "🔄 Sostituzione ingredienti", href: "#" },
            { title: "🛒 Lista della spesa", href: "#" },
            { title: "🏆 Classifica delle ricette più votate", href: "#" },
        ],
    },
    {
        title: "Istruzioni & Guide",
        href: "#",
        children: [
            { title: "🚀 Guida rapida", href: "#" },
            { title: "🍨 Creazione e gestione delle categorie", href: "#" },
            { title: "✍️ Creazione di una ricetta passo dopo passo", href: "#" },
            { title: "⚖️ Come bilanciare una ricetta (Formula Live)", href: "#" },
            { title: "📌 Domande frequenti (FAQ)", href: "#" },
        ],
    },
]

export default function Navigation() {
    const pathname = usePathname()

    // Desktop navigation using Menubar
    const DesktopNav = () => (
        <Menubar className="hidden lg:flex bg-transparent border-none space-x-2">
            {navigationItems.map((item) => (
                <MenubarMenu key={item.title}>
                    <MenubarTrigger className="text-primary-foreground hover:text-primary-foreground/80 focus:bg-primary-foreground/10 px-4 py-2">
                        {item.title}
                    </MenubarTrigger>
                    {item.children && (
                        <MenubarContent>
                            {item.children.map((child) => (
                                <div key={child.title}>
                                    {child.children ? (
                                        <>
                                            <MenubarSeparator />
                                            <MenubarItem className="cursor-default">{child.title}</MenubarItem>
                                            <MenubarSeparator />
                                            {child.children.map((subChild) => (
                                                <MenubarItem key={subChild.title}>
                                                    <Link href={subChild.href} className="w-full">
                                                        {subChild.title}
                                                    </Link>
                                                </MenubarItem>
                                            ))}
                                        </>
                                    ) : (
                                        <MenubarItem>
                                            <Link href={child.href} className="w-full">
                                                {child.title}
                                            </Link>
                                        </MenubarItem>
                                    )}
                                </div>
                            ))}
                        </MenubarContent>
                    )}
                </MenubarMenu>
            ))}
        </Menubar>
    )

    // Mobile navigation using Sheet with Accordion for nested items
    const MobileNav = () => (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle menu" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-primary w-80 p-0 overflow-y-auto">
                <nav className="flex flex-col p-4">
                    <ul className="flex flex-col space-y-2">
                        {navigationItems.map((item) => (
                            <li key={item.title}>
                                {item.children ? (
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value={item.title} className="border-b-0">
                                            <AccordionTrigger className="text-white hover:text-gray-200 py-2 px-0">
                                                {item.title}
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="pl-4 space-y-2">
                                                    {item.children.map((child) => (
                                                        <li key={child.title}>
                                                            {child.children ? (
                                                                <Accordion type="single" collapsible className="w-full">
                                                                    <AccordionItem value={child.title} className="border-b-0">
                                                                        <AccordionTrigger className="text-white hover:text-gray-200 py-2 px-0">
                                                                            {child.title}
                                                                        </AccordionTrigger>
                                                                        <AccordionContent>
                                                                            <ul className="pl-4 space-y-2">
                                                                                {child.children.map((subChild) => (
                                                                                    <li key={subChild.title}>
                                                                                        <Link
                                                                                            href={subChild.href}
                                                                                            className="text-white hover:text-gray-200 transition-colors block py-2"
                                                                                        >
                                                                                            {subChild.title}
                                                                                        </Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </AccordionContent>
                                                                    </AccordionItem>
                                                                </Accordion>
                                                            ) : (
                                                                <Link
                                                                    href={child.href}
                                                                    className={cn(
                                                                        "text-white hover:text-gray-200 transition-colors block py-2",
                                                                        pathname === child.href && "font-semibold underline",
                                                                    )}
                                                                >
                                                                    {child.title}
                                                                </Link>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "text-white hover:text-gray-200 transition-colors block py-2",
                                            pathname === item.href && "font-semibold underline",
                                        )}
                                    >
                                        {item.title}
                                    </Link>
                                )}
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

