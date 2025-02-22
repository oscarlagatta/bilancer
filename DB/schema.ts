import { integer, pgTable, text, decimal } from "drizzle-orm/pg-core";

export const categoriesTable = pgTable("categories", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  type: text({
    enum: ["gelati", "granita", "sorbetto"],
  }).notNull(),
});

export const ingredients = pgTable("ingredients", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  description: text().notNull(),
  sugar: decimal("sugar", { precision: 5, scale: 2 }),
  fat: decimal("fat", { precision: 5, scale: 2 }),
  slng: decimal("slng", { precision: 5, scale: 2 }),
  altriSolidi: decimal("altri_solidi", { precision: 5, scale: 2 }),
  pod: decimal("pod", { precision: 5, scale: 2 }),
  pac: decimal("pod", { precision: 5, scale: 2 }),
  minPercentage: decimal("min_percentagle", { precision: 5, scale: 2 }),
  maxPercentage: decimal("pod", { precision: 5, scale: 2 }),
  foodCostPerKg: decimal("pod", { precision: 5, scale: 2 }),
  categoryId: integer("category_id")
    .references(() => categoriesTable.id)
    .notNull(),
});

// export const recipe = pgTable("balance", {
//     id: integer().primaryKey().generatedAlwaysAsIdentity(),
//     userId: text("user_id").notNull(),
//     Description: text().notNull(),
//     recipeDate: date("recipe_date")

// });

// export const balance =
