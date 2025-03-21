import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { ingredients } from "@/DB/schema";

dotenv.config({
  path: "./.env.local",
});

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not defined")
}

const db = drizzle(process.env.DATABASE_URL);

async function seedFruitsAndVegetables() {
  const ingredientsData = [
    {
      userId: "default",
      categoryId: 14,
      description: "Albicocche",
      sugar: "11.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "40.00",
      pac: "60.00",
      minPercentage: "40.00",
      maxPercentage: "60.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Amarene",
      sugar: "9.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "40.00",
      pac: "60.00",
      minPercentage: "40.00",
      maxPercentage: "60.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Ananas",
      sugar: "13.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "36.00",
      pac: "54.00",
      minPercentage: "36.00",
      maxPercentage: "54.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Anguria",
      sugar: "6.00",
      fat: "2.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "56.00",
      pac: "84.00",
      minPercentage: "56.00",
      maxPercentage: "84.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Banane",
      sugar: "19.00",
      fat: "7.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "28.00",
      pac: "42.00",
      minPercentage: "28.00",
      maxPercentage: "42.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Cachi",
      sugar: "14.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "36.00",
      pac: "54.00",
      minPercentage: "36.00",
      maxPercentage: "54.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 15,
      description: "Carote",
      sugar: "6.00",
      fat: "10.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "36.00",
      pac: "54.00",
      minPercentage: "36.00",
      maxPercentage: "54.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 15,
      description: "Cetrioli",
      sugar: "2.00",
      fat: "4.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "40.00",
      pac: "60.00",
      minPercentage: "40.00",
      maxPercentage: "60.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Ciliegie",
      sugar: "14.00",
      fat: "8.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "36.00",
      pac: "54.00",
      minPercentage: "36.00",
      maxPercentage: "54.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 15,
      description: "Cipolla Rossa",
      sugar: "6.00",
      fat: "2.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "28.00",
      pac: "42.00",
      minPercentage: "28.00",
      maxPercentage: "42.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Fichi",
      sugar: "20.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "32.00",
      pac: "48.00",
      minPercentage: "32.00",
      maxPercentage: "48.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 15,
      description: "Finocchi",
      sugar: "2.00",
      fat: "6.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "36.00",
      pac: "54.00",
      minPercentage: "36.00",
      maxPercentage: "54.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Fragole",
      sugar: "9.00",
      fat: "2.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "40.00",
      pac: "60.00",
      minPercentage: "40.00",
      maxPercentage: "60.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 15,
      description: "Indivia",
      sugar: "3.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "32.00",
      pac: "48.00",
      minPercentage: "32.00",
      maxPercentage: "48.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Kiwi",
      sugar: "9.00",
      fat: "3.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "40.00",
      pac: "60.00",
      minPercentage: "40.00",
      maxPercentage: "60.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Lamponi",
      sugar: "9.00",
      fat: "2.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "32.00",
      pac: "48.00",
      minPercentage: "32.00",
      maxPercentage: "48.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Mango",
      sugar: "14.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "36.00",
      pac: "54.00",
      minPercentage: "36.00",
      maxPercentage: "54.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Maracuja",
      sugar: "9.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "32.00",
      pac: "48.00",
      minPercentage: "32.00",
      maxPercentage: "48.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Mele",
      sugar: "11.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "40.00",
      pac: "60.00",
      minPercentage: "40.00",
      maxPercentage: "60.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Melone",
      sugar: "11.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "48.00",
      pac: "72.00",
      minPercentage: "48.00",
      maxPercentage: "72.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Mirtilli",
      sugar: "7.00",
      fat: "3.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "32.00",
      pac: "48.00",
      minPercentage: "32.00",
      maxPercentage: "48.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "More",
      sugar: "7.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "32.00",
      pac: "48.00",
      minPercentage: "32.00",
      maxPercentage: "48.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Papaia",
      sugar: "11.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "40.00",
      pac: "60.00",
      minPercentage: "40.00",
      maxPercentage: "60.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 15,
      description: "Peperoni",
      sugar: "1.00",
      fat: "6.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "40.00",
      pac: "60.00",
      minPercentage: "40.00",
      maxPercentage: "60.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 15,
      description: "Piselli",
      sugar: "6.00",
      fat: "19.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "28.00",
      pac: "42.00",
      minPercentage: "28.00",
      maxPercentage: "42.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Pere",
      sugar: "11.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "40.00",
      pac: "60.00",
      minPercentage: "40.00",
      maxPercentage: "60.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Pesche",
      sugar: "14.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "40.00",
      pac: "60.00",
      minPercentage: "40.00",
      maxPercentage: "60.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 15,
      description: "Pomodori",
      sugar: "3.00",
      fat: "14.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "40.00",
      pac: "60.00",
      minPercentage: "40.00",
      maxPercentage: "60.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Prugne",
      sugar: "15.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "32.00",
      pac: "48.00",
      minPercentage: "32.00",
      maxPercentage: "48.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Ribes",
      sugar: "8.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "32.00",
      pac: "48.00",
      minPercentage: "32.00",
      maxPercentage: "48.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 15,
      description: "Scalogno",
      sugar: "8.00",
      fat: "16.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "28.00",
      pac: "42.00",
      minPercentage: "28.00",
      maxPercentage: "42.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 15,
      description: "Sedano",
      sugar: "1.00",
      fat: "5.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "40.00",
      pac: "60.00",
      minPercentage: "40.00",
      maxPercentage: "60.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Succo di Ananas",
      sugar: "10.00",
      fat: "2.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: true,
      pod: "36.00",
      pac: "54.00",
      minPercentage: "36.00",
      maxPercentage: "54.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Succo di Arance",
      sugar: "14.00",
      fat: "2.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: true,
      pod: "36.00",
      pac: "54.00",
      minPercentage: "36.00",
      maxPercentage: "54.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Succo di Lime",
      sugar: "5.00",
      fat: "2.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: true,
      pod: "20.00",
      pac: "30.00",
      minPercentage: "20.00",
      maxPercentage: "30.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Succo di Limone",
      sugar: "5.00",
      fat: "2.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: true,
      pod: "2.00",
      pac: "36.00",
      minPercentage: "2.00",
      maxPercentage: "36.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Succo di Mandarini",
      sugar: "9.00",
      fat: "2.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: true,
      pod: "36.00",
      pac: "54.00",
      minPercentage: "36.00",
      maxPercentage: "54.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Succo di Pompelmo",
      sugar: "8.00",
      fat: "2.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: true,
      pod: "32.00",
      pac: "48.00",
      minPercentage: "32.00",
      maxPercentage: "48.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 14,
      description: "Succo d'Uva",
      sugar: "20.00",
      fat: "2.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: true,
      pod: "40.00",
      pac: "60.00",
      minPercentage: "40.00",
      maxPercentage: "60.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 15,
      description: "Zucca",
      sugar: "4.00",
      fat: "4.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "28.00",
      pac: "42.00",
      minPercentage: "28.00",
      maxPercentage: "42.00",
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 15,
      description: "Zenzero",
      sugar: "2.00",
      fat: "30.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "4.00",
      pac: "6.00",
      minPercentage: "4.00",
      maxPercentage: "6.00",
      foodCostForKg: null,
    },
  ];

  try {
    for (const ingredient of ingredientsData) {
      await db.insert(ingredients).values(ingredient);
    }
    console.log("Fruits and vegetables seeded successfully");
  } catch (error) {
    console.error("Error seeding fruits and vegetables:", error);
  }
}

seedFruitsAndVegetables();
