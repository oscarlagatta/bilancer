import { getCategories } from "@/DATA/getCategories";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PencilIcon } from "lucide-react";

export default async function CategoriesPage() {
  const categories = await getCategories();

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
            <p className="text-center py-10 text-lg text-muted-foreground">
              Non ci sono categorie!
            </p>
          )}

          {!!categories?.length && (
            <>
              {/* Desktop view - Table */}
              <div className="hidden md:block mt-4">
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
                      <TableHead className="text-center">
                        Altri Solidi Min
                      </TableHead>
                      <TableHead className="text-center">
                        Altri Solidi Max
                      </TableHead>
                      <TableHead className="text-center">
                        Solidi Totali Min
                      </TableHead>
                      <TableHead className="text-center">
                        Solidi Totali Max
                      </TableHead>
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
                      <TableHead className="text-center">
                        Alimenti Tritati Min
                      </TableHead>
                      <TableHead className="text-center">
                        Alimenti Tritati Max
                      </TableHead>

                      <TableHead />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {categories.map((category) => (
                      <TableRow key={category.id}>
                        <TableCell className="">{category.name}</TableCell>
                        <TableCell className="text-center">
                          {category.sugarsMin}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.sugarsMax}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.fatsMin}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.fatsMax}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.msnfMin}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.msnfMax}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.otherSolidsMin}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.otherSolidsMax}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.totalSolidsMin}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.totalSolidsMax}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.podMin}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.podMax}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.pacMin}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.pacMax}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.fruitMin}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.fruitMax}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.alcoholMin}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.alcoholMax}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.overrunMin}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.overrunMax}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.groundFoodsMin}%`}
                        </TableCell>
                        <TableCell className="text-center">
                          {`${category.groundFoodsMax}%`}
                        </TableCell>

                        <TableCell className="text-right">
                          <Button
                            variant="outline"
                            asChild
                            size="icon"
                            aria-label="Edit category"
                          >
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
                        <Button
                          variant="outline"
                          asChild
                          size="icon"
                          aria-label="Edit category"
                        >
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
                        <div>
                          <p className="text-muted-foreground">SLNG Min</p>
                          <p>{category.msnfMin}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">SLNG Max</p>
                          <p>{category.msnfMax}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">
                            Altri Solidi Min
                          </p>
                          <p>{category.otherSolidsMin}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">
                            Altri Solidi Max
                          </p>
                          <p>{category.otherSolidsMax}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">
                            Solidi Totali Min
                          </p>
                          <p>{category.totalSolidsMin}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">
                            Solidi Totali Max
                          </p>
                          <p>{category.totalSolidsMax}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">POD Min</p>
                          <p>{category.podMin}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">POD Max</p>
                          <p>{category.podMax}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">PAC Min</p>
                          <p>{category.pacMin}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">PAC Max</p>
                          <p>{category.pacMax}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Alcohol Min</p>
                          <p>{category.alcoholMin}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Alcohol Max</p>
                          <p>{category.alcoholMax}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Overrun Min</p>
                          <p>{category.overrunMin}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Overrun Max</p>
                          <p>{category.overrunMax}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">
                            Alimenti Tritati Min
                          </p>
                          <p>{category.groundFoodsMin}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">
                            Alimenti Tritati Max
                          </p>
                          <p>{category.groundFoodsMax}</p>
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
  );
}
