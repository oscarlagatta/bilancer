import { ingredientCategories } from "@/DB/schema"
import { db } from "@/DB"

export async function getIngredientCategories() {
    return db.select().from(ingredientCategories).orderBy(ingredientCategories.id)
}

