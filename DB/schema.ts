import { integer, pgTable, text, decimal, date } from "drizzle-orm/pg-core";

// New table for ice cream categories
export const iceCreamCategories = pgTable("ice_cream_categories", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull().unique(),
});

// New table for ingredient categories
export const ingredientCategories = pgTable("ingredient_categories", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull().unique(),
});

// Updated categoriesIceCream table (now just a reference table)
export const categoriesIceCream = pgTable("categories_ice_cream", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  categoryId: integer("category_id")
      .references(() => iceCreamCategories.id)
      .notNull(),
});

// Updated categoriesIngredients table (now just a reference table)
export const categoriesIngredients = pgTable("categories_ingredients", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  categoryId: integer("category_id")
      .references(() => ingredientCategories.id)
      .notNull(),
});

export const ingredients = pgTable("ingredients", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: text("user_id").notNull(),
  categoryId: integer("category_id")
      .references(() => categoriesIngredients.id)
      .notNull(),
  description: text("name_ingredient").notNull(),
  sugar: decimal("sugar", { precision: 5, scale: 2 }),
  fat: decimal("fat", { precision: 5, scale: 2 }),
  slng: decimal("slng", { precision: 5, scale: 2 }),
  altriSolidi: decimal("altri_solidi", { precision: 5, scale: 2 }),
  pod: decimal("pod", { precision: 5, scale: 2 }),
  pac: decimal("pac", { precision: 5, scale: 2 }),
  minPercentage: decimal("min_percentage", { precision: 5, scale: 2 }),
  maxPercentage: decimal("max_percentage", { precision: 5, scale: 2 }),
  foodCostForKg: decimal("food_cost_for_kg", { precision: 5, scale: 2 }),
});

export const recipes = pgTable("recipes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: text("user_id").notNull(),
  name: text().notNull(),
  categoryId: integer("category_id")
      .references(() => categoriesIceCream.id)
      .notNull(),
  recipeDate: date("recipe_date"),
});

export const recipeIngredients = pgTable("recipe_ingredients", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  recipeId: integer("recipe_id").references(() => recipes.id).notNull(),
  ingredientId: integer("ingredient_id").references(() => ingredients.id).notNull(),
  percentage: decimal("percentage", { precision: 5, scale: 2 }).notNull(),
});