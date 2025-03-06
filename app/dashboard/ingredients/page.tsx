import { columns } from "./components/columns";
import { DataTable } from "@/app/dashboard/ingredients/components/data-table";
import {
    getIngredientsWithCategory,
  } from "@/DATA/getIngredients";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function IngredientsPage() {

  const ingredients = await getIngredientsWithCategory();

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
          <Card>
              <CardHeader>
                  <CardTitle className="flex justify-between">
                      <span className='text-3xl'>Ingredienti</span>
                      <div className="flex gap-2">
                          <Button asChild variant='outline'>
                              <Link href='/dashboard/ingredients/new'>
                                  Aggiungi un nuovo ingrediente
                              </Link>
                          </Button>
                      </div>
                  </CardTitle>
                  <CardDescription>  Questa &eacute; una lista degli ingredienti!</CardDescription>
              </CardHeader>
              <CardContent>
                  <DataTable data={ingredients} columns={columns} />
              </CardContent>
          </Card>

      </div>
    </>
  );
}
