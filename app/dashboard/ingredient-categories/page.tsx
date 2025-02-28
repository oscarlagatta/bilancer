
import { getIngredientCategories } from "@/DATA/getIngredientCategories"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IngredientCategoryRowActions } from "./ingredient-category-row-actions"
import { PlusIcon } from "lucide-react"

export default async function IngredientCategoriesPage() {
    // const [categories, setCategories] = useState<IngredientCategory[]>([])

    const fetchedCategories = await getIngredientCategories()

    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         const fetchedCategories = await getIngredientCategories()
    //         setCategories(fetchedCategories)
    //     }
    //     fetchCategories()
    // }, [])

    // const updateCategory = (updatedCategory: IngredientCategory) => {
    //     setCategories((prevCategories) =>
    //         prevCategories.map((category) => (category.id === updatedCategory.id ? updatedCategory : category)),
    //     )
    // }
    //
    // const deleteCategory = (categoryId: number) => {
    //     setCategories((prevCategories) => prevCategories.filter((category) => category.id !== categoryId))
    // }

    return (
        <div className="w-full mx-auto py-6 px-4 sm:px-6 md:py-10">
            <Card className="mt-4">
                <CardHeader>
                    <CardTitle className="flex flex-col sm:flex-row sm:justify-between gap-4">
                        <h1 className="text-2xl">Categorie Ingredienti</h1>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Button asChild>
                        <Link href="/dashboard/ingredient-categories/new">
                            <PlusIcon className="mr-2 h-4 w-4" /> Nuova Categoria
                        </Link>
                    </Button>

                    {!fetchedCategories.length && (
                        <p className="text-center py-10 text-lg text-muted-foreground">Non ci sono categorie!</p>
                    )}

                    {!!fetchedCategories.length && (
                        <div className="mt-4 overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        {/*<TableHead>ID</TableHead>*/}
                                        <TableHead>Nome</TableHead>
                                        <TableHead className="text-right">Azioni</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {fetchedCategories.map((category) => (
                                        <TableRow key={category.id}>
                                            {/*<TableCell>{category.id}</TableCell>*/}
                                            <TableCell>{category.name}</TableCell>
                                            <TableCell className="text-right">
                                                <IngredientCategoryRowActions
                                                    category={category}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

