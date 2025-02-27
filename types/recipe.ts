import { Ingredient } from "./ingredient";

export type Recipe = {
  id: string;
  name: string;
  category: CategoryRecipe;
  ingredients: Ingredient[];
};

export type CategoryRecipe = {
  id: number;
  nameCategoryRecipe: string;
  percentualeMinZuccheri: number;
  percentualeMaxZuccheri: number;
  percentualeMinGrassi: number;
  percentualeMaxGrassi: number;
  percentualeMinSLNG: number;
  percentualeMaxSLNG: number;
  percentualeMinAltriSolidi: number;
  percentualeMaxAltriSolidi: number;
  percentualeMinPOD: number;
  percentualeMaxPOD: number;
  percentualeMinPAC?: number;
  percentualeMaxPAC?: number;
  percentualeMinFrutta: number;
  percentualeMaxFrutta: number;
  percentualeMinAlcolici: number;
  percentualeMaxAlcolici: number;
};

export type TotaliBalancer = {
  percentualeTotaleZuccheri: number;
  percentualeTotaleGrassi: number;
  percentualeTotaleNeutriOBasi: number;
  percentualeTotaleSLNG: number;
  percentualeTotaleAltriSolidi: number;
  percentualeTotaleSolidiTotali: number;
  percentualeTotalePOD: number;
  percentualeTotalePAC: number;
};
