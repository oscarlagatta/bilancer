"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { iceCreamCategorySchema } from "@/validation/icecream-category-schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import type { IceCreamCategory } from "@/types/icecream-category"
import type { z } from "zod"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Loader2 } from "lucide-react"
import { useState } from "react"

type Props = {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
    category: IceCreamCategory
    onSubmit: (data: z.infer<typeof iceCreamCategorySchema>) => Promise<void>
}

export default function CategoryFormSheet({ isOpen, onOpenChange, category, onSubmit }: Props) {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<IceCreamCategory>({
        resolver: zodResolver(iceCreamCategorySchema),
        defaultValues: {
            ...category,
            // Ensure all numeric fields are properly typed as numbers
            sugarsMin: Number(category.sugarsMin),
            sugarsMax: Number(category.sugarsMax),
            fatsMin: Number(category.fatsMin),
            fatsMax: Number(category.fatsMax),
            msnfMin: Number(category.msnfMin),
            msnfMax: Number(category.msnfMax),
            otherSolidsMin: Number(category.otherSolidsMin),
            otherSolidsMax: Number(category.otherSolidsMax),
            totalSolidsMin: Number(category.totalSolidsMin),
            totalSolidsMax: Number(category.totalSolidsMax),
            podMin: Number(category.podMin),
            podMax: Number(category.podMax),
            pacMin: Number(category.pacMin),
            pacMax: Number(category.pacMax),
            fruitMin: Number(category.fruitMin),
            fruitMax: Number(category.fruitMax),
            alcoholMin: Number(category.alcoholMin),
            alcoholMax: Number(category.alcoholMax),
            overrunMin: Number(category.overrunMin),
            overrunMax: Number(category.overrunMax),
            groundFoodsMin: Number(category.groundFoodsMin),
            groundFoodsMax: Number(category.groundFoodsMax),
        },
    })

    const handleSubmit = async (data: IceCreamCategory) => {
        setIsSubmitting(true)
        try {
            await onSubmit(data)
        } finally {
            setIsSubmitting(false)
        }
    }

    const formGroups = [
        {
            title: "Componenti Base",
            fields: [
                { title: "Zuccheri", min: "sugarsMin", max: "sugarsMax", icon: "🍬", color: "amber" },
                { title: "Grassi", min: "fatsMin", max: "fatsMax", icon: "🥛", color: "yellow" },
                { title: "SLNG", min: "msnfMin", max: "msnfMax", icon: "🧀", color: "blue" },
                { title: "Altri Solidi", min: "otherSolidsMin", max: "otherSolidsMax", icon: "🧂", color: "orange" },
            ],
        },
        {
            title: "Proprietà Tecniche",
            fields: [
                { title: "Solidi Totali", min: "totalSolidsMin", max: "totalSolidsMax", icon: "📊", color: "emerald" },
                { title: "POD", min: "podMin", max: "podMax", icon: "🍯", color: "purple" },
                { title: "PAC", min: "pacMin", max: "pacMax", icon: "❄️", color: "cyan" },
            ],
        },
        {
            title: "Additivi e Lavorazione",
            fields: [
                { title: "Frutta", min: "fruitMin", max: "fruitMax", icon: "🍓", color: "rose" },
                { title: "Alcol", min: "alcoholMin", max: "alcoholMax", icon: "🍸", color: "violet" },
                { title: "Overrun", min: "overrunMin", max: "overrunMax", icon: "🌬️", color: "sky" },
                { title: "Alimenti Tritati", min: "groundFoodsMin", max: "groundFoodsMax", icon: "🌰", color: "brown" },
            ],
        },
    ]

    return (
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetContent className="w-full sm:max-w-[800px] overflow-y-auto p-0">
                <div className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 min-h-screen">
                    <div className="w-full max-w-5xl mx-auto relative p-6">
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

                        <SheetHeader className="text-center mb-6">
                            <SheetTitle className="text-3xl font-bold tracking-tight">Modifica Categoria Gelato</SheetTitle>
                            <p className="text-muted-foreground">Personalizza i parametri per la tua categoria di gelato</p>
                        </SheetHeader>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-border/50">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-lg font-medium flex items-center gap-2">
                                                    <span className="text-xl">🍦</span> Nome Categoria
                                                </FormLabel>
                                                <FormControl>
                                                    <Input {...field} className="text-lg p-6" placeholder="Inserisci un nome descrittivo" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <Tabs defaultValue="base" className="w-full">
                                    <TabsList className="grid grid-cols-3 w-full mb-6">
                                        <TabsTrigger value="base">Componenti Base</TabsTrigger>
                                        <TabsTrigger value="technical">Proprietà Tecniche</TabsTrigger>
                                        <TabsTrigger value="additives">Additivi e Lavorazione</TabsTrigger>
                                    </TabsList>

                                    {formGroups.map((group, groupIndex) => (
                                        <TabsContent
                                            key={groupIndex}
                                            value={groupIndex === 0 ? "base" : groupIndex === 1 ? "technical" : "additives"}
                                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-border/50"
                                        >
                                            <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
                                            <Separator className="mb-6" />

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {group.fields.map((field, fieldIndex) => (
                                                    <div
                                                        key={fieldIndex}
                                                        className={`border border-${field.color}-100 dark:border-${field.color}-900/30 rounded-lg p-4 transition-all hover:shadow-md`}
                                                    >
                                                        <h4 className="font-medium text-lg flex items-center gap-2 mb-3">
                                                            <span>{field.icon}</span> {field.title}
                                                        </h4>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <FormField
                                                                control={form.control}
                                                                name={field.min as keyof IceCreamCategory}
                                                                render={({ field: formField }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Min (%)</FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                {...formField}
                                                                                type="number"
                                                                                step="0.01"
                                                                                onChange={(e) => {
                                                                                    formField.onChange(Number(e.target.value))
                                                                                }}
                                                                                className="text-center"
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <FormField
                                                                control={form.control}
                                                                name={field.max as keyof IceCreamCategory}
                                                                render={({ field: formField }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Max (%)</FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                {...formField}
                                                                                type="number"
                                                                                step="0.01"
                                                                                onChange={(e) => {
                                                                                    formField.onChange(Number(e.target.value))
                                                                                }}
                                                                                className="text-center"
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </TabsContent>
                                    ))}
                                </Tabs>

                                <div className="flex justify-end space-x-2 sticky bottom-0 bg-background pt-4 pb-2 pr-6">
                                    <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
                                        Annulla
                                    </Button>
                                    <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90">
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Salvataggio...
                                            </>
                                        ) : (
                                            "Salva Modifiche"
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

