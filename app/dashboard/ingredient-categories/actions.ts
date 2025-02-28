"use server"

import { auth } from "@clerk/nextjs/server"
import { db } from "@/DB"
import { ingredientCategories } from "@/DB/schema"
import { and, eq } from "drizzle-orm"
import { z } from "zod"

const ingredientCategorySchema = z.object({
    id: z.number().optional(),
    name: z.string().min(1, "Name is required").max(100, "Name must be 100 characters or less"),
})

export async function createIngredientCategory(data: z.infer<typeof ingredientCategorySchema>) {
    const { userId } = await auth()

    if (!userId) {
        return {
            error: true,
            message: "Unauthorized",
        }
    }

    const validation = ingredientCategorySchema.safeParse(data)
    if (!validation.success) {
        return {
            error: true,
            message: validation.error.issues[0].message,
        }
    }

    try {
        await db.insert(ingredientCategories).values({
            name: validation.data.name,
        })

        return {
            error: false,
            message: "Ingredient category created successfully",
        }
    } catch (error) {
        return {
            error: true,
            message: "Database error: " + formatErrorMessage(error),
        }
    }
}

export async function updateIngredientCategory(data: z.infer<typeof ingredientCategorySchema>) {
    const { userId } = await auth()

    if (!userId) {
        return {
            error: true,
            message: "Unauthorized",
        }
    }

    const validation = ingredientCategorySchema.safeParse(data)
    if (!validation.success) {
        return {
            error: true,
            message: validation.error.issues[0].message,
        }
    }

    try {
        await db
            .update(ingredientCategories)
            .set({
                name: validation.data.name,
            })
            .where(and(eq(ingredientCategories.id, validation.data.id!)))

        return {
            error: false,
            message: "Ingredient category updated successfully",
        }
    } catch (error) {
        return {
            error: true,
            message: "Database error: " + formatErrorMessage(error),
        }
    }
}

export async function deleteIngredientCategory(categoryId: number) {
    const { userId } = await auth()

    if (!userId) {
        return {
            error: true,
            message: "Unauthorized",
        }
    }

    try {
        await db.delete(ingredientCategories).where(and(eq(ingredientCategories.id, categoryId)))

        return {
            error: false,
            message: "Ingredient category deleted successfully",
        }
    } catch (error) {
        return {
            error: true,
            message: "Database error: " + formatErrorMessage(error),
        }
    }
}

function formatErrorMessage(error: unknown): string {
    return error instanceof Error ? error.message : "Unknown error"
}

