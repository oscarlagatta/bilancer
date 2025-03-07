"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export default function DashboardPage() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [balance, setBalance] = useState(50)
    const [scoops, setScoops] = useState([
        { id: 1, flavor: "fragola", position: 0 },
        { id: 2, flavor: "menta", position: 0 },
        { id: 3, flavor: "mirtillo", position: 0 },
    ])

    const handleBalanceChange = (value: number[]) => {
        setBalance(value[0])
        // Update scoop positions based on balance
        setScoops(
            scoops.map((scoop, index) => ({
                ...scoop,
                position: index === 0 ? (value[0] - 50) / 5 : index === 1 ? (50 - value[0]) / 5 : 0,
            })),
        )
    }

    return (
        <div className={`p-8 h-screen overflow-hidden transition-colors duration-300 ${isDarkMode ? "dark" : ""}`}>
            <div className="max-w-3xl mx-auto space-y-6 h-full overflow-y-auto pb-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Bilanciatore di Gelato</h1>
                    <Button variant="outline" onClick={() => setIsDarkMode(!isDarkMode)}>
                        {isDarkMode ? "Modalità Chiara" : "Modalità Scura"}
                    </Button>
                </div>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle>Bilancia la Tua Torre di Gelato</CardTitle>
                        <CardDescription>Regola il cursore per bilanciare le palline di gelato</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-center mb-4">
                            <div className="relative h-56 w-40">
                                {/* Ice Cream Scoops */}
                                <div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-strawberry ice-cream-shadow animate-wobble"
                                    style={{ transform: `translateX(${scoops[0].position}px) translateY(0) translateX(-50%)` }}
                                >
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-3 bg-strawberry-light animate-drip"></div>
                                </div>
                                <div
                                    className="absolute top-14 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-mint ice-cream-shadow"
                                    style={{ transform: `translateX(${scoops[1].position}px) translateY(0) translateX(-50%)` }}
                                >
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-3 bg-mint-light animate-drip"></div>
                                </div>
                                <div
                                    className="absolute top-28 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-blueberry ice-cream-shadow"
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
                                Equilibrio: {balance < 50 ? "Sinistra" : balance > 50 ? "Destra" : "Centro"}({Math.abs(balance - 50)}%)
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <FlavorSwatch name="Fragola" color="bg-strawberry" />
                    <FlavorSwatch name="Menta" color="bg-mint" />
                    <FlavorSwatch name="Mirtillo" color="bg-blueberry" />
                    <FlavorSwatch name="Vaniglia" color="bg-vanilla" />
                    <FlavorSwatch name="Cioccolato" color="bg-chocolate" />
                    <FlavorSwatch name="Gomma da Masticare" color="bg-bubblegum" />
                </div>
            </div>
        </div>
    )
}

function FlavorSwatch({ name, color }: { name: string; color: string }) {
    return (
        <div className="flex flex-col gap-2">
            <div className={`h-16 rounded-full ${color} flex items-center justify-center ice-cream-shadow text-sm`}>
                {name}
            </div>
            <p className="text-sm text-center">{name}</p>
        </div>
    )
}

