'use server';

import {auth} from "@clerk/nextjs/server";
import { ingredientSchema } from "@/validation/ingredientSchema";
import {db} from "@/DB";
import {ingredients} from "@/DB/schema";


export const createIngredient = async (data: {
    userId: string;
    categoryId: number;
    description: string;
    bilanciaSuLiquidi: boolean;
    sugar?: number;
    fat?: number;
    slng?: number;
    altriSolidi?: number;
    pod?: number;
    pac?: number;
    minPercentage?: number;
    maxPercentage?: number;
    foodCostForKg?: number;
}) => {

    const { userId } = await auth();

    if (!userId) {
        throw new Error("User is not authenticated.")
    }

    const validation = ingredientSchema.safeParse(data)
    if (!validation.success) {
        return { error: validation.error.format() }
    }
    const [ingredient] = await db.insert(ingredients).values({
        userId: userId,
        categoryId: data.categoryId,
        description: data.description,
        bilanciaSuLiquidi: data.bilanciaSuLiquidi,
        // Optional fields
        sugar: (data.sugar ?? 0).toString(),
        fat: (data.fat ?? 0).toString(),
        slng: (data.slng ?? 0).toString(),
        altriSolidi: (data.altriSolidi ?? 0).toString(),
        pod: (data.pod ?? 0).toString(),
        pac: (data.pac ?? 0).toString(),
        minPercentage: (data.minPercentage ?? 0).toString(),
        maxPercentage: (data.maxPercentage ?? 0).toString(),
        foodCostForKg: (data.foodCostForKg ?? 0).toString(),
    } as typeof ingredients.$inferInsert).returning()

    return {
        id: ingredient.id,
    }
}