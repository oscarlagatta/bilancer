import { getCategories } from "@/DATA/getCategories"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CategoryRowActions } from "./category-row-actions"
import { PlusCircle, IceCream, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { IceCreamCategory } from "@/types/icecream-category"

export default async function CategoriesPage() {
  const categoriesData = await getCategories()

  // Convert string values to numbers for each category
  const categories = categoriesData.map((category) => ({
    id: category.id,
    name: category.name,
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
  })) as IceCreamCategory[]

  // Function to get a color based on category id (deterministic)
  const getCategoryColor = (id: number) => {
    // Use a set of predefined gradients
    const gradients = [
      "bg-gradient-to-r from-blue-500 to-purple-500",
      "bg-gradient-to-r from-pink-500 to-orange-500",
      "bg-gradient-to-r from-cyan-500 to-blue-500",
      "bg-gradient-to-r from-green-500 to-emerald-500",
      "bg-gradient-to-r from-amber-500 to-yellow-500",
      "bg-gradient-to-r from-violet-500 to-purple-500",
      "bg-gradient-to-r from-rose-500 to-red-500",
      "bg-gradient-to-r from-indigo-500 to-blue-500",
      "bg-gradient-to-r from-teal-500 to-green-500",
      "bg-gradient-to-r from-fuchsia-500 to-pink-500",
    ]

    // Use the id to select a gradient (modulo to ensure it's within range)
    return gradients[id % gradients.length]
  }

  // Function to get an emoji based on category name's first letter
  const getCategoryEmoji = (name: string) => {
    // Default set of ice cream related emojis
    const emojis = ["🍦", "🍧", "🍨", "🧁", "🍰", "🍪", "🍫", "🍬", "🍭", "🥞", "🧊", "🌱", "🍽️", "✨", "🧪"]

    // Get the first character of the name and convert to a number (using char code)
    const firstChar = name.charAt(0).toLowerCase()
    const charCode = firstChar.charCodeAt(0)

    // Use the character code to select an emoji (modulo to ensure it's within range)
    return emojis[charCode % emojis.length]
  }

  // Function to create a progress bar
  const ProgressBar = ({ value, min, max, label }: { value: number; min: number; max: number; label: string }) => {
    const percentage = ((value - min) / (max - min)) * 100
    return (
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">{label}</span>
            <span className="font-medium">{value}%</span>
          </div>
          <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
    )
  }

  return (
      <div className="w-full mx-auto py-6 px-4 sm:px-6 md:py-10">
        <div className="flex flex-col gap-6">
          {/* Header with title and action button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Categorie Gelato</h1>
              <p className="text-muted-foreground mt-1">Gestisci le tue categorie di gelato e le loro proprietà</p>
            </div>
            <Button asChild size="lg" className="gap-2">
              <Link href="/dashboard/categories/new">
                <PlusCircle className="h-5 w-5" />
                Nuova Categoria
              </Link>
            </Button>
          </div>

          {!categories?.length && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-primary/10 p-6 mb-4">
                  <IceCream className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Nessuna categoria trovata</h3>
                <p className="text-muted-foreground max-w-md mb-6">
                  Inizia creando la tua prima categoria di gelato per definire i parametri di base per le tue ricette.
                </p>
                <Button asChild>
                  <Link href="/dashboard/categories/new">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Crea Categoria
                  </Link>
                </Button>
              </div>
          )}

          {!!categories?.length && (
              <Tabs defaultValue="grid" className="w-full">
                <div className="flex justify-end mb-6">
                  <TabsList>
                    <TabsTrigger value="grid">Griglia</TabsTrigger>
                    <TabsTrigger value="detailed">Dettagliato</TabsTrigger>
                  </TabsList>
                </div>

                {/* Grid View */}
                <TabsContent value="grid" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <Card key={category.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                          <div className={`h-3 ${getCategoryColor(category.id)}`} />
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div className="flex items-center gap-2">
                          <span className="text-2xl" aria-hidden="true">
                            {getCategoryEmoji(category.name)}
                          </span>
                                <CardTitle>{category.name}</CardTitle>
                              </div>
                              <CategoryRowActions
                                  category={{
                                    id: category.id,
                                    name: category.name,
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
                                  }}
                              />
                            </div>
                          </CardHeader>
                          <CardContent className="pb-6">
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Badge variant="outline" className="bg-primary/5 text-xs font-normal">
                                    Zuccheri
                                  </Badge>
                                  <div className="flex justify-between text-sm">
                              <span>
                                Min: <span className="font-medium">{category.sugarsMin}%</span>
                              </span>
                                    <span>
                                Max: <span className="font-medium">{category.sugarsMax}%</span>
                              </span>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Badge variant="outline" className="bg-primary/5 text-xs font-normal">
                                    Grassi
                                  </Badge>
                                  <div className="flex justify-between text-sm">
                              <span>
                                Min: <span className="font-medium">{category.fatsMin}%</span>
                              </span>
                                    <span>
                                Max: <span className="font-medium">{category.fatsMax}%</span>
                              </span>
                                  </div>
                                </div>
                              </div>

                              <ProgressBar label="Solidi Totali" value={category.totalSolidsMax} min={0} max={100} />

                              <div className="pt-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    asChild
                                    className="w-full justify-between group-hover:bg-primary/5"
                                >
                                  <Link href={`/dashboard/categories/${category.id}`}>
                                    Visualizza Dettagli
                                    <ChevronRight className="h-4 w-4 opacity-70" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Detailed View */}
                <TabsContent value="detailed" className="mt-0">
                  <div className="space-y-6">
                    {categories.map((category) => (
                        <Card key={category.id} className="overflow-hidden hover:shadow-md transition-all duration-300">
                          <div className={`h-2 ${getCategoryColor(category.id)}`} />
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                          <span className="text-2xl" aria-hidden="true">
                            {getCategoryEmoji(category.name)}
                          </span>
                                <CardTitle>{category.name}</CardTitle>
                              </div>
                              <CategoryRowActions category={category} />
                            </div>
                          </CardHeader>
                          <CardContent>
                            <ScrollArea className="h-[280px] pr-4">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Base Components */}
                                <div className="space-y-4">
                                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                                    Componenti Base
                                  </h3>
                                  <div className="space-y-3">
                                    <ProgressBar label="Zuccheri" value={category.sugarsMax} min={0} max={100} />
                                    <ProgressBar label="Grassi" value={category.fatsMax} min={0} max={100} />
                                    <ProgressBar label="SLNG" value={category.msnfMax} min={0} max={100} />
                                    <ProgressBar label="Altri Solidi" value={category.otherSolidsMax} min={0} max={100} />
                                  </div>
                                </div>

                                {/* Technical Properties */}
                                <div className="space-y-4">
                                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                                    Proprietà Tecniche
                                  </h3>
                                  <div className="space-y-3">
                                    <ProgressBar label="Solidi Totali" value={category.totalSolidsMax} min={0} max={100} />
                                    <ProgressBar label="POD" value={category.podMax} min={0} max={100} />
                                    <ProgressBar label="PAC" value={category.pacMax} min={0} max={100} />
                                  </div>
                                </div>

                                {/* Additives */}
                                <div className="space-y-4">
                                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                                    Additivi
                                  </h3>
                                  <div className="space-y-3">
                                    <ProgressBar label="Frutta" value={category.fruitMax} min={0} max={100} />
                                    <ProgressBar label="Alcol" value={category.alcoholMax} min={0} max={100} />
                                    <ProgressBar label="Overrun" value={category.overrunMax} min={0} max={100} />
                                    <ProgressBar label="Alimenti Tritati" value={category.groundFoodsMax} min={0} max={100} />
                                  </div>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                <div className="bg-primary/5 rounded-lg p-3 text-center">
                                  <p className="text-xs text-muted-foreground mb-1">Range Zuccheri</p>
                                  <p className="font-medium">
                                    {category.sugarsMin}% - {category.sugarsMax}%
                                  </p>
                                </div>
                                <div className="bg-primary/5 rounded-lg p-3 text-center">
                                  <p className="text-xs text-muted-foreground mb-1">Range Grassi</p>
                                  <p className="font-medium">
                                    {category.fatsMin}% - {category.fatsMax}%
                                  </p>
                                </div>
                                <div className="bg-primary/5 rounded-lg p-3 text-center">
                                  <p className="text-xs text-muted-foreground mb-1">Range POD</p>
                                  <p className="font-medium">
                                    {category.podMin}% - {category.podMax}%
                                  </p>
                                </div>
                                <div className="bg-primary/5 rounded-lg p-3 text-center">
                                  <p className="text-xs text-muted-foreground mb-1">Range PAC</p>
                                  <p className="font-medium">
                                    {category.pacMin}% - {category.pacMax}%
                                  </p>
                                </div>
                              </div>
                            </ScrollArea>

                            <div className="mt-4 pt-4 border-t">
                              <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                                <Link href={`/dashboard/categories/${category.id}`}>
                                  Visualizza Tutti i Dettagli
                                  <ChevronRight className="h-4 w-4 ml-2" />
                                </Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
          )}
        </div>
      </div>
  )
}

