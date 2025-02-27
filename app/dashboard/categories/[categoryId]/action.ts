"use server";


import {IceCreamCategory} from "@/types/icecream-category";
import {auth} from "@clerk/nextjs/server";
import {iceCreamCategorySchema} from "@/validation/icecream-category-schema";
import {db} from "@/DB";
import {iceCreamCategories} from "@/DB/schema";
import {and, eq} from "drizzle-orm";



export async function updateCategory(data: IceCreamCategory) {
    const { userId } = await auth();

    if (!userId) {
        return {
            error: true,
            message: "Unauthorized",
        };
    }

    // Validate data
    const validation = iceCreamCategorySchema.safeParse(data);
    if (!validation.success) {
        return {
            error: true,
            message: validation.error.issues[0].message,
        };
    }
    const validData = validation.data;

    // Update category in the database
    try {
        await db.update(iceCreamCategories)
            .set({
                name: validData.name,
                sugarsMin: validData.sugarsMin.toString(),
                sugarsMax: validData.sugarsMax.toString(),
                fatsMin: validData.fatsMin.toString(),
                fatsMax: validData.fatsMax.toString(),
                msnfMin: validData.msnfMin.toString(),
                msnfMax: validData.msnfMax.toString(),
                otherSolidsMin: validData.otherSolidsMin.toString(),
                otherSolidsMax: validData.otherSolidsMax.toString(),
                totalSolidsMin: validData.totalSolidsMin.toString(),
                totalSolidsMax: validData.totalSolidsMax.toString(),
                podMin: validData.podMin.toString(),
                podMax: validData.podMax.toString(),
                fruitMin: validData.fruitMin.toString(),
                fruitMax: validData.fruitMax.toString(),
                alcoholMin: validData.alcoholMin.toString(),
                alcoholMax: validData.alcoholMax.toString(),
                overrunMin: validData.overrunMin.toString(),
                overrunMax: validData.overrunMax.toString(),
                groundFoodsMin: validData.groundFoodsMin.toString(),
                groundFoodsMax: validData.groundFoodsMax.toString(),
            })
            .where(
                and(
                    eq(iceCreamCategories.id, validData.id),
                )
            );

        return {
            error: false,
            message: "Category updated successfully",
        };
    } catch (error) {
        return {
            error: true,
            message: "Database error: " + formatErrorMessage(error),
        };
    }
}

export async function deleteCategory(categoryId: number) {
    const {userId} = await auth();

    if (!userId) {
        return {
            error: true,
            message: "Unauthorized"
        }
    }

    await db.delete(iceCreamCategories).where(
        and(
            eq(iceCreamCategories.id, categoryId),
        )
    );
}


function formatErrorMessage(error: unknown): string {
    return "Database error: " + (error instanceof Error ? error.message : "Unknown error");
}