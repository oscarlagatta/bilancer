"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Book,
    HelpCircle,
    MessageSquareIcon as MessageSquareStar,
    RefreshCw,
    Utensils,
    Sun,
    Moon,
    ChevronRight,
    Star,
} from "lucide-react"

export default function DashboardPage() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [balance, setBalance] = useState(50)
    const [scoops, setScoops] = useState([
        { id: 1, flavor: "fragola", position: 0 },
        { id: 2, flavor: "menta", position: 0 },
        { id: 3, flavor: "mirtillo", position: 0 },
    ])
    const [isStable, setIsStable] = useState(true)

    const handleBalanceChange = (value: number[]) => {
        setBalance(value[0])
        // Update scoop positions based on balance
        setScoops(
            scoops.map((scoop, index) => ({
                ...scoop,
                position: index === 0 ? (value[0] - 50) / 5 : index === 1 ? (50 - value[0]) / 5 : 0,
            })),
        )

        // Set stability status
        setIsStable(Math.abs(value[0] - 50) < 10)
    }

    // Toggle dark mode and update document class
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDarkMode])

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            {/* Header */}
            <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
                <div className="container mx-auto py-4 px-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="relative w-10 h-10">
                            <div className="absolute w-8 h-8 rounded-full bg-strawberry top-0 left-0 ice-cream-shadow"></div>
                            <div className="absolute w-6 h-6 rounded-full bg-mint bottom-1 right-1 ice-cream-shadow"></div>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-brand-brown dark:text-brand-gold">Arte Gelato</h1>
                            <p className="text-xs text-brand-gold font-medium">BILANCIATORE DI GELATI</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm hidden md:inline">v1.3.0</span>
                        <Button variant="outline" size="icon" onClick={() => setIsDarkMode(!isDarkMode)}>
                            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Ice Cream Balancer */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="overflow-hidden border-2">
                            <CardHeader className="bg-gradient-to-r from-brand-brown to-brand-brown/90 text-white">
                                <CardTitle>Bilanciatore di Gelato e Sorbetto Professional</CardTitle>
                                <CardDescription className="text-white/80">
                                    Regola il cursore per bilanciare le palline di gelato
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6 pt-6">
                                <div className="flex justify-center mb-4">
                                    <div className="relative h-64 w-48">
                                        {/* Ice Cream Scoops */}
                                        <div
                                            className={`absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-strawberry ice-cream-shadow ${isStable ? "animate-wobble" : ""}`}
                                            style={{ transform: `translateX(${scoops[0].position}px) translateY(0) translateX(-50%)` }}
                                        >
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-3 bg-strawberry-light animate-drip"></div>
                                        </div>
                                        <div
                                            className={`absolute top-14 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-mint ice-cream-shadow ${isStable ? "animate-wobble" : ""}`}
                                            style={{ transform: `translateX(${scoops[1].position}px) translateY(0) translateX(-50%)` }}
                                        >
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-3 bg-mint-light animate-drip"></div>
                                        </div>
                                        <div
                                            className={`absolute top-28 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-blueberry ice-cream-shadow ${isStable ? "animate-wobble" : ""}`}
                                            style={{ transform: `translateX(${scoops[2].position}px) translateY(0) translateX(-50%)` }}
                                        >
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-3 bg-blueberry-light animate-drip"></div>
                                        </div>

                                        {/* Cone */}
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-32">
                                            <div className="w-full h-full cone bg-cone border-t-2 border-cone-dark"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Sinistra</span>
                                        <span>Destra</span>
                                    </div>
                                    <Slider
                                        defaultValue={[50]}
                                        max={100}
                                        step={1}
                                        value={[balance]}
                                        onValueChange={handleBalanceChange}
                                        className="py-4"
                                    />
                                    <div className="text-center">
                    <span
                        className={`font-medium ${isStable ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                    >
                      {isStable ? "✓ Bilanciato" : "⚠ Sbilanciato"}
                    </span>
                                        <span className="ml-2">
                      {balance < 50 ? "Sinistra" : balance > 50 ? "Destra" : "Centro"} ({Math.abs(balance - 50)}%)
                    </span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="bg-gray-50 dark:bg-gray-800/50 border-t flex justify-between">
                                <div className="text-sm text-muted-foreground">Stabilità: {isStable ? "Ottima" : "Instabile"}</div>
                                <Button variant="outline" size="sm">
                                    Salva Configurazione
                                </Button>
                            </CardFooter>
                        </Card>

                        <Tabs defaultValue="flavors" className="w-full">
                            <TabsList className="grid grid-cols-2 w-full">
                                <TabsTrigger value="flavors">Gusti Disponibili</TabsTrigger>
                                <TabsTrigger value="recipes">Ricette Popolari</TabsTrigger>
                            </TabsList>
                            <TabsContent value="flavors" className="p-4 bg-white dark:bg-gray-800 rounded-md mt-2 border">
                                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                    <FlavorSwatch name="Fragola" color="bg-strawberry" />
                                    <FlavorSwatch name="Menta" color="bg-mint" />
                                    <FlavorSwatch name="Mirtillo" color="bg-blueberry" />
                                    <FlavorSwatch name="Vaniglia" color="bg-vanilla" />
                                    <FlavorSwatch name="Cioccolato" color="bg-chocolate" />
                                    <FlavorSwatch name="Gomma da Masticare" color="bg-bubblegum" />
                                </div>
                            </TabsContent>
                            <TabsContent value="recipes" className="p-4 bg-white dark:bg-gray-800 rounded-md mt-2 border">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <RecipeCard name="Classico Italiano" flavors={["Fragola", "Vaniglia", "Cioccolato"]} rating={5} />
                                    <RecipeCard name="Fresco Estivo" flavors={["Menta", "Limone", "Mirtillo"]} rating={4} />
                                    <RecipeCard name="Dolce Sogno" flavors={["Gomma da Masticare", "Vaniglia", "Fragola"]} rating={4} />
                                    <RecipeCard name="Montagna Scura" flavors={["Cioccolato", "Caffè", "Nocciola"]} rating={5} />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Right Column - Features */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-xl">Bilanciatore di Gelato Professional</CardTitle>
                                <CardDescription>v1.0.0</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <FeatureItem
                                    icon={<HelpCircle className="h-6 w-6" />}
                                    title="Come si usa?"
                                    description="Su cucinali trovi un manuale d'uso, ricette, video dimostrativi e FAQ"
                                    link="https://www.cucina.li/bilanciali-supporto/"
                                    bgColor="bg-blue-500"
                                />

                                <FeatureItem
                                    icon={<Book className="h-6 w-6" />}
                                    title="Materia Prima"
                                    description="Ordina la materia prima del gelato e altri extra a prezzi da grossista"
                                    link="https://www.cucina.li/categoria-prodotto/extra/"
                                    bgColor="bg-green-500"
                                />

                                <FeatureItem
                                    icon={<Utensils className="h-6 w-6" />}
                                    title="Corsi sul Gelato"
                                    description="CucinaLi offre anche corsi di base sul gelato artigianale (anche online)"
                                    link="https://www.cucina.li/corsi/"
                                    bgColor="bg-red-500"
                                    isNew={true}
                                />

                                <FeatureItem
                                    icon={<MessageSquareStar className="h-6 w-6" />}
                                    title="Lascia una Recensione"
                                    description="Fai sapere agli altri la tua opinione e lascia una recensione"
                                    link="https://www.cucina.li/prodotto/bilanciali-pro/"
                                    bgColor="bg-yellow-500"
                                />

                                <FeatureItem
                                    icon={<RefreshCw className="h-6 w-6" />}
                                    title="Controlla Aggiornamenti"
                                    description="Con BilanciLi gli aggiornamenti sono inclusi per 1 anno dall'acquisto"
                                    link="https://www.cucina.li/bilanciali-aggiornamenti/"
                                    bgColor="bg-purple-500"
                                />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-xl">Statistiche Gelato</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span>Gelati Bilanciati</span>
                                    <span className="font-medium">247</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Gusti Preferiti</span>
                                    <span className="font-medium">Fragola, Cioccolato</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Ultimo Aggiornamento</span>
                                    <span className="font-medium">07/03/2025</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}

function FlavorSwatch({ name, color }: { name: string; color: string }) {
    return (
        <div className="flex flex-col gap-2">
            <div
                className={`h-16 rounded-full ${color} flex items-center justify-center ice-cream-shadow text-sm font-medium`}
            >
                {name}
            </div>
            <p className="text-sm text-center">{name}</p>
        </div>
    )
}

function RecipeCard({ name, flavors, rating }: { name: string; flavors: string[]; rating: number }) {
    return (
        <div className="border rounded-lg p-3 bg-white/50 dark:bg-gray-800/50">
            <h3 className="font-medium mb-2">{name}</h3>
            <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                ))}
            </div>
            <div className="text-sm text-muted-foreground">{flavors.join(", ")}</div>
        </div>
    )
}

function FeatureItem({
                         icon,
                         title,
                         description,
                         link,
                         bgColor,
                         isNew = false,
                     }: {
    icon: React.ReactNode
    title: string
    description: string
    link: string
    bgColor: string
    isNew?: boolean
}) {
    return (
        <div className="flex gap-4">
            <div className={`feature-icon ${bgColor} relative`}>
                {icon}
                {isNew && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                        NEW
                    </div>
                )}
            </div>
            <div className="flex-1">
                <h3 className="font-medium text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                    Visita <ChevronRight className="h-3 w-3 ml-1" />
                </a>
            </div>
        </div>
    )
}

