import { getCategories } from "@/DATA/getCategories"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CategoryRowActions } from "./category-row-actions"

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
      <div className="w-full mx-auto py-6 px-4 sm:px-6 md:py-10">
        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <h1 className="text-2xl">Categorie Gelato</h1>
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
                  <div className="hidden md:block mt-4 overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead className="text-center">Sugars Min</TableHead>
                          <TableHead className="text-center">Sugars Max</TableHead>
                          <TableHead className="text-center">Fats Min</TableHead>
                          <TableHead className="text-center">Fats Max</TableHead>
                          <TableHead className="text-center">SLNG Min</TableHead>
                          <TableHead className="text-center">SLNG Max</TableHead>
                          <TableHead className="text-center">Altri Solidi Min</TableHead>
                          <TableHead className="text-center">Altri Solidi Max</TableHead>
                          <TableHead className="text-center">Solidi Totali Min</TableHead>
                          <TableHead className="text-center">Solidi Totali Max</TableHead>
                          <TableHead className="text-center">POD Min</TableHead>
                          <TableHead className="text-center">POD Max</TableHead>
                          <TableHead className="text-center">PAC Min</TableHead>
                          <TableHead className="text-center">PAC Max</TableHead>
                          <TableHead className="text-center">Frutta Min</TableHead>
                          <TableHead className="text-center">Frutta Max</TableHead>
                          <TableHead className="text-center">Alcohol Min</TableHead>
                          <TableHead className="text-center">Alcohol Max</TableHead>
                          <TableHead className="text-center">Overrun Min</TableHead>
                          <TableHead className="text-center">Overrun Max</TableHead>
                          <TableHead className="text-center">Alimenti Tritati Min</TableHead>
                          <TableHead className="text-center">Alimenti Tritati Max</TableHead>
                          <TableHead />
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {categories.map((category) => (
                            <TableRow key={category.id}>
                              <TableCell className="">{category.name}</TableCell>
                              <TableCell className="text-center">{category.sugarsMin}</TableCell>
                              <TableCell className="text-center">{category.sugarsMax}</TableCell>
                              <TableCell className="text-center">{category.fatsMin}</TableCell>
                              <TableCell className="text-center">{category.fatsMax}</TableCell>
                              <TableCell className="text-center">{category.msnfMin}</TableCell>
                              <TableCell className="text-center">{category.msnfMax}</TableCell>
                              <TableCell className="text-center">{category.otherSolidsMin}</TableCell>
                              <TableCell className="text-center">{category.otherSolidsMax}</TableCell>
                              <TableCell className="text-center">{category.totalSolidsMin}</TableCell>
                              <TableCell className="text-center">{category.totalSolidsMax}</TableCell>
                              <TableCell className="text-center">{category.podMin}</TableCell>
                              <TableCell className="text-center">{category.podMax}</TableCell>
                              <TableCell className="text-center">{category.pacMin}</TableCell>
                              <TableCell className="text-center">{category.pacMax}</TableCell>
                              <TableCell className="text-center">{category.fruitMin}</TableCell>
                              <TableCell className="text-center">{category.fruitMax}</TableCell>
                              <TableCell className="text-center">{category.alcoholMin}</TableCell>
                              <TableCell className="text-center">{category.alcoholMax}</TableCell>
                              <TableCell className="text-center">{category.overrunMin}</TableCell>
                              <TableCell className="text-center">{category.overrunMax}</TableCell>
                              <TableCell className="text-center">{category.groundFoodsMin}</TableCell>
                              <TableCell className="text-center">{category.groundFoodsMax}</TableCell>
                              <TableCell className="text-right">
                                <CategoryRowActions category={category} />
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
                              <CategoryRowActions category={category} />
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <p className="text-muted-foreground">Sugars Min</p>
                                <p>{category.sugarsMin}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Sugars Max</p>
                                <p>{category.sugarsMax}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Fats Min</p>
                                <p>{category.fatsMin}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Fats Max</p>
                                <p>{category.fatsMax}</p>
                              </div>
                              {/* Add more fields here for mobile view */}
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

