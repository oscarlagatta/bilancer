import { CategoryIngredient } from "./category";

export type Ingredient = {
  id: number;
  categoriaId: CategoryIngredient;
  descrizione: string;
  peso: number | null;
  percentualeTotale: number; // Percentuale dell'ingrediente rispetto al peso totale del gelato
  percentualeMin: number;
  percentualeMax: number;
  percentualeZuccheri: number;
  percentualeGrassi: number;
  percentualeSLNG: number;
  percentualeAltriSolidi: number;
  percentualePOD: number;
  percentualePAC: number;
  isNeutroOrBase: string;
};
