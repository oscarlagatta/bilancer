import { ingredientCategories, ingredients } from "@/DB/schema";
import { db } from "@/DB";
import { eq } from "drizzle-orm";

export async function getIngredients() {
  return db.select().from(ingredients).orderBy(ingredients.categoryId);
}
export async function getIngredientsWithCategoryName() {
  return db
    .select({
      ...ingredients,
      categoryName: ingredientCategories.name,
    })
    .from(ingredients)
    .innerJoin(
      ingredientCategories,
      eq(ingredients.categoryId, ingredientCategories.id)
    )
    .orderBy(ingredients.categoryId);
}

export async function getIngredientsWithCategory() {
  return db
    .select({
      // All ingredient fields
      id: ingredients.id,
      userId: ingredients.userId,
      categoryId: ingredients.categoryId,
      description: ingredients.description,
      sugar: ingredients.sugar,
      fat: ingredients.fat,
      slng: ingredients.slng,
      altriSolidi: ingredients.altriSolidi,
      bilanciaSuLiquidi: ingredients.bilanciaSuLiquidi,
      pod: ingredients.pod,
      pac: ingredients.pac,
      minPercentage: ingredients.minPercentage,
      maxPercentage: ingredients.maxPercentage,
      foodCostForKg: ingredients.foodCostForKg,

      // Category fields
      categoryName: ingredientCategories.name,
    })
    .from(ingredients)
    .innerJoin(
      ingredientCategories,
      eq(ingredients.categoryId, ingredientCategories.id)
    )
    .orderBy(ingredients.categoryId);
}
