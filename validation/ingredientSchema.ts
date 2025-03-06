import { z } from "zod";

export const ingredientSchema = z.object({
    userId: z.string(),
    categoryId: z.number().positive(), // Integer type for category ID
    description: z.string().min(1, "Description is required"), // Non-empty string
    sugar: z.number().positive("Sugar cannot be negative"), // Non-negative number
    fat: z.number().positive("Fat cannot be negative"), // Non-negative number
    slng: z.number().positive("SLNG cannot be negative"), // Non-negative number
    altriSolidi: z.number().positive("Altri Solidi cannot be negative"), // Non-negative number
    bilanciaSuLiquidi: z.boolean(), // Boolean type for balancing liquids
    pod: z.number(), // Non-negative number
    pac: z.number(), // Non-negative number
    minPercentage: z.number().positive("Minimum Percentage cannot be negative"),
    maxPercentage: z.number().positive("Maximum Percentage cannot be negative"),
    foodCostForKg: z.number().positive("Food Cost per Kg cannot be negative"),
});

export type IngredientType = z.infer<typeof ingredientSchema>
