
import { columns } from "./components/columns"
import {DataTable} from "@/app/dashboard/ingredients/components/data-table";
import {getIngredients, getIngredientsWithCategory, getIngredientsWithCategoryName} from "@/DATA/getIngredients";



// Simulate a database read for tasks.

export default async function IngredientsPage() {
    const ingredients = await getIngredients();
    const ingredientsWithCategories = await getIngredientsWithCategoryName();
    return (
        <>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Ingredients</h2>
                        <p className="text-muted-foreground">
                            Questa &eacute; una lista degli ingredienti!
                        </p>
                    </div>
                </div>
                 <DataTable data={ingredients} columns={columns} />
            </div>
        </>
    )
}