import {
  integer,
  pgTable,
  text,
  decimal,
  date,
  boolean,
} from "drizzle-orm/pg-core";

// New table for ice cream categories

export const iceCreamCategories = pgTable("ice_cream_categories", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull().unique(),
  // Sugars (percentage)
  sugarsMin: decimal("sugars_min", { precision: 5, scale: 2 }).notNull(),
  sugarsMax: decimal("sugars_max", { precision: 5, scale: 2 }).notNull(),
  // Fats (percentage)
  fatsMin: decimal("fats_min", { precision: 5, scale: 2 }).notNull(),
  fatsMax: decimal("fats_max", { precision: 5, scale: 2 }).notNull(),
  // MSNF (Milk Solids Non-Fat) (percentage)
  msnfMin: decimal("msnf_min", { precision: 5, scale: 2 }).notNull(),
  msnfMax: decimal("msnf_max", { precision: 5, scale: 2 }).notNull(),
  // Other Solids (percentage)
  otherSolidsMin: decimal("other_solids_min", {
    precision: 5,
    scale: 2,
  }).notNull(),
  otherSolidsMax: decimal("other_solids_max", {
    precision: 5,
    scale: 2,
  }).notNull(),
  // Total Solids (percentage)
  totalSolidsMin: decimal("total_solids_min", {
    precision: 5,
    scale: 2,
  }).notNull(),
  totalSolidsMax: decimal("total_solids_max", {
    precision: 5,
    scale: 2,
  }).notNull(),
  // POD (Proof of Delivery) (percentage)
  podMin: decimal("pod_min", { precision: 5, scale: 2 }).notNull(),
  podMax: decimal("pod_max", { precision: 5, scale: 2 }).notNull(),
  // Fruit (percentage)
  fruitMin: decimal("fruit_min", { precision: 5, scale: 2 }).notNull(),
  fruitMax: decimal("fruit_max", { precision: 5, scale: 2 }).notNull(),
  // Alcohol (percentage)
  alcoholMin: decimal("alcohol_min", { precision: 5, scale: 2 }).notNull(),
  alcoholMax: decimal("alcohol_max", { precision: 5, scale: 2 }).notNull(),
  // Overrun (percentage)
  overrunMin: decimal("overrun_min", { precision: 5, scale: 2 }).notNull(),
  overrunMax: decimal("overrun_max", { precision: 5, scale: 2 }).notNull(),
  // Ground Foods (percentage)
  groundFoodsMin: decimal("ground_foods_min", {
    precision: 5,
    scale: 2,
  }).notNull(),
  groundFoodsMax: decimal("ground_foods_max", {
    precision: 5,
    scale: 2,
  }).notNull(),
});

// New table for ingredient categories
export const ingredientCategories = pgTable("ingredient_categories", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull().unique(),
});

export const ingredients = pgTable("ingredients", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: text("user_id").notNull(),
  categoryId: integer("category_id")
    .references(() => ingredientCategories.id)
    .notNull(),
  description: text("name_ingredient").notNull(),
  sugar: decimal("sugar", { precision: 5, scale: 2 }),
  fat: decimal("fat", { precision: 5, scale: 2 }),
  slng: decimal("slng", { precision: 5, scale: 2 }),
  altriSolidi: decimal("altri_solidi", { precision: 5, scale: 2 }),
  bilanciaSuLiquidi: boolean("bilancia_su_liquidi"),
  pod: decimal("pod", { precision: 8, scale: 2 }),
  pac: decimal("pac", { precision: 8, scale: 2 }),
  minPercentage: decimal("min_percentage", { precision: 5, scale: 2 }),
  maxPercentage: decimal("max_percentage", { precision: 5, scale: 2 }),
  foodCostForKg: decimal("food_cost_for_kg", { precision: 5, scale: 2 }),
});

export const recipes = pgTable("recipes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: text("user_id").notNull(),
  name: text().notNull(),
  categoryId: integer("category_id")
    .references(() => iceCreamCategories.id)
    .notNull(),
  recipeDate: date("recipe_date"),
});

export const recipeIngredients = pgTable("recipe_ingredients", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  recipeId: integer("recipe_id")
    .references(() => recipes.id)
    .notNull(),
  ingredientId: integer("ingredient_id")
    .references(() => ingredients.id)
    .notNull(),
  percentage: decimal("percentage", { precision: 5, scale: 2 }).notNull(),
});
