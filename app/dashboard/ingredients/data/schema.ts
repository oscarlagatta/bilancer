import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import type { z } from "zod"
import {ingredients} from "@/DB/schema";

// Create Zod schemas from the table definition
export const ingredientsSelectSchema = createSelectSchema(ingredients)
export const ingredientsInsertSchema = createInsertSchema(ingredients)

// Types inferred from the schemas
export type IngredientSelect = z.infer<typeof ingredientsSelectSchema>
export type IngredientInsert = z.infer<typeof ingredientsInsertSchema>
