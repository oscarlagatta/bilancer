import { z } from "zod"

export const iceCreamCategorySchema = z.object({
    id: z.number(),
    name: z.string().min(3, "Name must be at least 3 characters").max(100, "Name must be less than 100 characters"),
    sugarsMin: z.number().min(0, "Must be at least 0"),
    sugarsMax: z.number().min(0, "Must be at least 0"),
    fatsMin: z.number().min(0, "Must be at least 0"),
    fatsMax: z.number().min(0, "Must be at least 0"),
    podMin: z.number().min(0, "Must be at least 0"),
    podMax: z.number().min(0, "Must be at least 0"),
    pacMin: z.number().min(0, "Must be at least 0"),
    pacMax: z.number().min(0, "Must be at least 0"),
    alcoholMin: z.number().min(0, "Must be at least 0"),
    alcoholMax: z.number().min(0, "Must be at least 0"),
    overrunMin: z.number().min(0, "Must be at least 0"),
    overrunMax: z.number().min(0, "Must be at least 0"),
    groundFoodsMin: z.number().min(0, "Must be at least 0"),
    groundFoodsMax: z.number().min(0, "Must be at least 0"),
    otherSolidsMin: z.number().min(0, "Must be at least 0"),
    otherSolidsMax: z.number().min(0, "Must be at least 0"),
    totalSolidsMin: z.number().min(0, "Must be at least 0"),
    totalSolidsMax: z.number().min(0, "Must be at least 0"),
    msnfMin: z.number().min(0, "Must be at least 0"),
    msnfMax: z.number().min(0, "Must be at least 0"),
    fruitMin: z.number().min(0, "Must be at least 0"),
    fruitMax: z.number().min(0, "Must be at least 0"),
})

