"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ingredientSchema } from "@/validation/ingredientSchema"
import {
    BeakerIcon,
    Loader2,
    ListFilter,
    Type,
    Percent,
    DollarSign,
    Droplets,
    Cookie,
    Beef,
    Milk,
    Layers,
    FlaskConical,
    Gauge,
} from "lucide-react"

export type Category = {
    id: number
    name: string
}

type Props = {
    categories: Category[]
    onSubmit: (data: z.infer<typeof ingredientSchema>) => Promise<void>
    defaultValues?: {
        categoryId: number
        description: string
        sugar: number
        fat: number
        slng: number
        altriSolidi: number
        pod: number
        pac: number
        minPercentage: number
        maxPercentage: number
        foodCostForKg: number
        bilanciaSuLiquidi: boolean
    }
}

export default function IngredientForm({ categories, onSubmit, defaultValues }: Props) {
    const form = useForm<z.infer<typeof ingredientSchema>>({
        resolver: zodResolver(ingredientSchema),
        mode: "onBlur",
        defaultValues: {
            sugar: 0,
            fat: 0,
            slng: 0,
            altriSolidi: 0,
            pod: 0,
            pac: 0,
            categoryId: 0,
            description: "",
            minPercentage: 0,
            maxPercentage: 0,
            foodCostForKg: 0,
            bilanciaSuLiquidi: false,
            ...defaultValues,
        },
    })

    const isSubmitting = form.formState.isSubmitting

    return (
        <div className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4 md:p-8 flex items-center justify-center">
            <div className="w-full max-w-4xl relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

                {/* Form header outside the card */}
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold tracking-tight mb-2 text-slate-900 dark:text-slate-50">
                        Gestione Ingredienti
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                        Crea e gestisci i tuoi ingredienti con specifiche dettagliate
                    </p>
                </div>

                <Card className="w-full shadow-lg animate-in fade-in duration-500">
                    <CardHeader className="space-y-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-t-lg">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-primary/10 rounded-lg">
                                <BeakerIcon className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle className="text-2xl">Dettagli Ingrediente</CardTitle>
                        </div>
                        <CardDescription>Inserisci le specifiche dell&apos;ingrediente e le informazioni nutrizionali</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <Tabs defaultValue="basic" className="w-full">
                                    <TabsList className="grid grid-cols-3 mb-6">
                                        <TabsTrigger value="basic">Informazioni Base</TabsTrigger>
                                        <TabsTrigger value="nutrition">Nutrizione</TabsTrigger>
                                        <TabsTrigger value="settings">Impostazioni</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="basic" className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FormField
                                                control={form.control}
                                                name="categoryId"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="flex items-center gap-1.5 text-foreground font-medium">
                                                            <ListFilter className="h-4 w-4 text-blue-500" />
                                                            <span>Categoria</span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Select
                                                                onValueChange={field.onChange}
                                                                value={field.value.toString()}
                                                                disabled={isSubmitting}
                                                            >
                                                                <SelectTrigger className="w-full">
                                                                    <SelectValue placeholder="Seleziona una categoria" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {categories.map((category) => (
                                                                        <SelectItem key={category.id} value={category.id.toString()}>
                                                                            {category.name}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                        </FormControl>
                                                        <FormDescription>Scegli la categoria dell&apos;ingrediente</FormDescription>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="description"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="flex items-center gap-1.5 text-foreground font-medium">
                                                            <Type className="h-4 w-4 text-indigo-500" />
                                                            <span>Descrizione</span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                placeholder="Inserisci la descrizione dell'ingrediente"
                                                                className="w-full"
                                                                disabled={isSubmitting}
                                                            />
                                                        </FormControl>
                                                        <FormDescription>Fornisci una descrizione chiara dell&apos;ingrediente</FormDescription>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="nutrition" className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="sugar"
                                                render={({ field }) => (
                                                    <FormItem className="bg-card border border-amber-100 dark:border-amber-900/30 rounded-lg p-4 transition-all hover:shadow-md">
                                                        <FormLabel className="flex items-center gap-1.5 text-foreground font-medium">
                                                            <Cookie className="h-4 w-4 text-amber-500" />
                                                            <span>Zucchero</span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input {...field} type="number" className="w-full" disabled={isSubmitting} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="fat"
                                                render={({ field }) => (
                                                    <FormItem className="bg-card border border-yellow-100 dark:border-yellow-900/30 rounded-lg p-4 transition-all hover:shadow-md">
                                                        <FormLabel className="flex items-center gap-1.5 text-foreground font-medium">
                                                            <Beef className="h-4 w-4 text-yellow-600" />
                                                            <span>Grassi</span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input {...field} type="number" className="w-full" disabled={isSubmitting} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="slng"
                                                render={({ field }) => (
                                                    <FormItem className="bg-card border border-blue-100 dark:border-blue-900/30 rounded-lg p-4 transition-all hover:shadow-md">
                                                        <FormLabel className="flex items-center gap-1.5 text-foreground font-medium">
                                                            <Milk className="h-4 w-4 text-blue-500" />
                                                            <span>SLNG</span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input {...field} type="number" className="w-full" disabled={isSubmitting} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="altriSolidi"
                                                render={({ field }) => (
                                                    <FormItem className="bg-card border border-orange-100 dark:border-orange-900/30 rounded-lg p-4 transition-all hover:shadow-md">
                                                        <FormLabel className="flex items-center gap-1.5 text-foreground font-medium">
                                                            <Layers className="h-4 w-4 text-orange-500" />
                                                            <span>Altri Solidi</span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input {...field} type="number" className="w-full" disabled={isSubmitting} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="pod"
                                                render={({ field }) => (
                                                    <FormItem className="bg-card border border-purple-100 dark:border-purple-900/30 rounded-lg p-4 transition-all hover:shadow-md">
                                                        <FormLabel className="flex items-center gap-1.5 text-foreground font-medium">
                                                            <FlaskConical className="h-4 w-4 text-purple-500" />
                                                            <span>POD</span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input {...field} type="number" className="w-full" disabled={isSubmitting} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="pac"
                                                render={({ field }) => (
                                                    <FormItem className="bg-card border border-green-100 dark:border-green-900/30 rounded-lg p-4 transition-all hover:shadow-md">
                                                        <FormLabel className="flex items-center gap-1.5 text-foreground font-medium">
                                                            <Gauge className="h-4 w-4 text-green-500" />
                                                            <span>PAC</span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input {...field} type="number" className="w-full" disabled={isSubmitting} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="settings" className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FormField
                                                control={form.control}
                                                name="bilanciaSuLiquidi"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-row items-center justify-between rounded-lg border border-cyan-100 dark:border-cyan-900/30 p-4 shadow-sm transition-all hover:shadow-md">
                                                        <div className="space-y-1">
                                                            <FormLabel className="flex items-center gap-1.5 text-base font-medium">
                                                                <Droplets className="h-4 w-4 text-cyan-500" />
                                                                <span>Bilancia su Liquidi</span>
                                                            </FormLabel>
                                                            <FormDescription>Attiva questa opzione per bilanciare sui liquidi</FormDescription>
                                                        </div>
                                                        <FormControl>
                                                            <Switch
                                                                checked={field.value}
                                                                onCheckedChange={field.onChange}
                                                                disabled={isSubmitting}
                                                                className="data-[state=checked]:bg-cyan-500"
                                                            />
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <Separator className="my-4" />

                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="minPercentage"
                                                render={({ field }) => (
                                                    <FormItem className="bg-card border border-rose-100 dark:border-rose-900/30 rounded-lg p-4 transition-all hover:shadow-md">
                                                        <FormLabel className="flex items-center gap-1.5 text-foreground font-medium">
                                                            <Percent className="h-4 w-4 text-rose-500" />
                                                            <span>Percentuale Minima</span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input {...field} type="number" className="w-full" disabled={isSubmitting} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="maxPercentage"
                                                render={({ field }) => (
                                                    <FormItem className="bg-card border border-violet-100 dark:border-violet-900/30 rounded-lg p-4 transition-all hover:shadow-md">
                                                        <FormLabel className="flex items-center gap-1.5 text-foreground font-medium">
                                                            <Percent className="h-4 w-4 text-violet-500" />
                                                            <span>Percentuale Massima</span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input {...field} type="number" className="w-full" disabled={isSubmitting} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="foodCostForKg"
                                                render={({ field }) => (
                                                    <FormItem className="bg-card border border-emerald-100 dark:border-emerald-900/30 rounded-lg p-4 transition-all hover:shadow-md">
                                                        <FormLabel className="flex items-center gap-1.5 text-foreground font-medium">
                                                            <DollarSign className="h-4 w-4 text-emerald-500" />
                                                            <span>Costo Alimentare (per kg)</span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input {...field} type="number" className="w-full" disabled={isSubmitting} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </TabsContent>
                                </Tabs>

                                <CardFooter className="px-0 pt-6 flex justify-end gap-2">
                                    <Button variant="outline" type="button" disabled={isSubmitting} className="w-full sm:w-auto">
                                        Annulla
                                    </Button>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Salvataggio...
                                            </>
                                        ) : (
                                            "Salva Ingrediente"
                                        )}
                                    </Button>
                                </CardFooter>
                            </form>
                        </Form>
                    </CardContent>
                </Card>

                <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
                    <p>Tutte le modifiche vengono salvate automaticamente nel database</p>
                </div>
            </div>
        </div>
    )
}

