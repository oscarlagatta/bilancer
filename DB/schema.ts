import { integer, pgTable, text, decimal, date } from "drizzle-orm/pg-core";

export const categoriesIceCream = pgTable("categoriesIceCream", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text({
    enum: [
      "Gelato",
      "Sorbetto",
      "Granita",
      "Gelato Vegano",
      "Gastronomico",
      "Personale 1",
      "Personale 2",
      "Semilavorati",
    ],
  }).notNull(),
});

export const categoriesIngredients = pgTable("categoriesIngredients", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text({
    enum: [
      "Bevande",
      "Bevande Vegetali",
      "Infusi",
      "Olio & Aceto",
      "Cioccolato",
      "Alimenti Scatolati",
      "Spezie",
      "Alimenti in polvere",
      "Frutta Secca",
      "Creme & Paste",
      "Latticini & Uova",
      "Zuccheri",
      "Neutri & Basi",
      "Frutta",
      "Verdura",
      "Alcolici",
      "Salse",
      "Dolci",
      "Personali",
    ],
  }),
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
  pac: decimal("pod", { precision: 5, scale: 2 }),
  minPercentage: decimal("min_percentagle", { precision: 5, scale: 2 }),
  maxPercentage: decimal("pod", { precision: 5, scale: 2 }),
  foodCostForKg: decimal("pod", { precision: 5, scale: 2 }),
});

export const recipes = pgTable("recepies", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: text("user_id").notNull(),
  name: text().notNull(),
  categoryId: integer("category_id")
    .references(() => categoriesIceCream.id)
    .notNull(),
  recipeDate: date("recipe_date"),
  ingredients: integer("ingredient_id") // questo deve essere un'array
    .references(() => ingredients.id)
    .notNull(),
  // aggiungere campo abbinato ad ogni ingrediente della sua % sul totale
});
