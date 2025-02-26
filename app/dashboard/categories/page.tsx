import { getCategories } from "@/DATA/getCategories"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PencilIcon } from "lucide-react"

export default async function CategoriesPage() {
    const categories = await getCategories()

    return (
        <div className="w-full max-w-screen-xl mx-auto py-6 px-4 sm:px-6 md:py-10">
            <Card className="mt-4">
                <CardHeader>
                    <CardTitle className="flex flex-col sm:flex-row sm:justify-between gap-4">
                        {/* Title content can go here */}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Button asChild>
                        <Link href="/dashboard/categories/new">Nuova Categoria</Link>
                    </Button>

                    {!categories?.length && (
                        <p className="text-center py-10 text-lg text-muted-foreground">Non ci sono categorie!</p>
                    )}

                    {!!categories?.length && (
                        <>
                            {/* Desktop view - Table */}
                            <div className="hidden md:block mt-4">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Sugars Min</TableHead>
                                            <TableHead>Sugars Max</TableHead>
                                            <TableHead>Fats Min</TableHead>
                                            <TableHead>Fats Max</TableHead>
                                            <TableHead />
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {categories.map((category) => (
                                            <TableRow key={category.id}>
                                                <TableCell className="font-medium">{category.name}</TableCell>
                                                <TableCell>{category.sugarsMin}</TableCell>
                                                <TableCell className="capitalize">{category.sugarsMax}</TableCell>
                                                <TableCell className="text-center">{category.fatsMin}</TableCell>
                                                <TableCell className="text-center">{category.fatsMax}</TableCell>
                                                <TableCell className="text-right">
                                                    <Button variant="outline" asChild size="icon" aria-label="Edit category">
                                                        <Link href={`/dashboard/categories/${category.id}`}>
                                                            <PencilIcon className="h-4 w-4" />
                                                        </Link>
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>

                            {/* Mobile view - Cards */}
                            <div className="md:hidden mt-4 space-y-4">
                                {categories.map((category) => (
                                    <Card key={category.id}>
                                        <CardContent className="p-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <h3 className="font-medium text-lg">{category.name}</h3>
                                                <Button variant="outline" asChild size="icon" aria-label="Edit category">
                                                    <Link href={`/dashboard/categories/${category.id}`}>
                                                        <PencilIcon className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                <div>
                                                    <p className="text-muted-foreground">Sugars Min</p>
                                                    <p>{category.sugarsMin}</p>
                                                </div>
                                                <div>
                                                    <p className="text-muted-foreground">Sugars Max</p>
                                                    <p className="capitalize">{category.sugarsMax}</p>
                                                </div>
                                                <div>
                                                    <p className="text-muted-foreground">Fats Min</p>
                                                    <p>{category.fatsMin}</p>
                                                </div>
                                                <div>
                                                    <p className="text-muted-foreground">Fats Max</p>
                                                    <p>{category.fatsMax}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

