import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  text,
  numeric,
  date,
  boolean,
} from "drizzle-orm/pg-core";

// New table for ice cream categories

export const iceCreamCategories = pgTable("ice_cream_categories", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull().unique(),
  // Sugars (percentage)
  sugarsMin: numeric("sugars_min").notNull(),
  sugarsMax: numeric("sugars_max").notNull(),
  // Fats (percentage)
  fatsMin: numeric("fats_min").notNull(),
  fatsMax: numeric("fats_max").notNull(),
  // MSNF (Milk Solids Non-Fat) (percentage)
  msnfMin: numeric("msnf_min").notNull(),
  msnfMax: numeric("msnf_max").notNull(),
  // Other Solids (percentage)
  otherSolidsMin: numeric("other_solids_min").notNull(),
  otherSolidsMax: numeric("other_solids_max").notNull(),
  // Total Solids (percentage)
  totalSolidsMin: numeric("total_solids_min").notNull(),
  totalSolidsMax: numeric("total_solids_max").notNull(),
  // POD (Potere dolcificante) (percentage)
  podMin: numeric("pod_min").notNull(),
  podMax: numeric("pod_max").notNull(),
  // PAC (Potere anti-congelante) (percentage)
  pacMin: numeric("pac_min").notNull(),
  pacMax: numeric("pac_max").notNull(),
  // Fruit (percentage)
  fruitMin: numeric("fruit_min").notNull(),
  fruitMax: numeric("fruit_max").notNull(),
  // Alcohol (percentage)
  alcoholMin: numeric("alcohol_min").notNull(),
  alcoholMax: numeric("alcohol_max").notNull(),
  // Overrun (percentage)
  overrunMin: numeric("overrun_min").notNull(),
  overrunMax: numeric("overrun_max").notNull(),
  // Ground Foods (percentage)
  groundFoodsMin: numeric("ground_foods_min").notNull(),
  groundFoodsMax: numeric("ground_foods_max").notNull(),
});

// New table for ingredient categories
export const ingredientCategories = pgTable("ingredient_categories", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull().unique(),
});

export const categoriesRelations = relations(
  ingredientCategories,
  ({ many }) => ({
    ingredients: many(ingredients),
  })
);
export const ingredients = pgTable("ingredients", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: text("user_id").notNull(),
  categoryId: integer("category_id")
    .references(() => ingredientCategories.id)
    .notNull(),
  description: text("name_ingredient").notNull(),
  sugar: numeric("sugar"),
  fat: numeric("fat"),
  slng: numeric("slng"),
  altriSolidi: numeric("altri_solidi"),
  bilanciaSuLiquidi: boolean("bilancia_su_liquidi"),
  pod: numeric("pod", { precision: 8, scale: 2 }),
  pac: numeric("pac", { precision: 8, scale: 2 }),
  minPercentage: numeric("min_percentage"),
  maxPercentage: numeric("max_percentage"),
  foodCostForKg: numeric("food_cost_for_kg"),
});

export const ingredientsRelations = relations(ingredients, ({ one }) => ({
  categoryId: one(ingredientCategories, {
    fields: [ingredients.categoryId],
    references: [ingredientCategories.id],
  }),
}));

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
  percentage: numeric("percentage").notNull(),
});
