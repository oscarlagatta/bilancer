import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PlusIcon } from "lucide-react";
import { categoriesIngredients } from "@/DATA/ingredients";
import { Ingredient } from "@/types/ingredient";
import { useState } from "react";
import { CategoryIngredient } from "@/types/category";

interface DrawerPageProps {
  ingredients: Ingredient[];
  onIngredientAdd: (ingredient: {
    id: number;
    categoriaId: CategoryIngredient;
    descrizione: string;
    peso: number | null;
    percentualeTotale: number;
    percentualeMin: number;
    percentualeMax: number;
    percentualeZuccheri: number;
    percentualeGrassi: number;
    percentualeSLNG: number;
    percentualeAltriSolidi: number;
    percentualePOD: number;
    percentualePAC: number;
    isNeutroOrBase: string;
  }) => void;
}

interface DrawerPageProps {
  ingredients: Ingredient[];
  onIngredientAdd: (ingredient: Ingredient) => void; // Funzione per passare il dato al padre
}

export function DrawerPage({ ingredients, onIngredientAdd }: DrawerPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedIngredient, setSelectedIngredient] = useState<number | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  // Filtra gli ingredienti in base alla categoria selezionata
  const filteredIngredients = ingredients.filter(
    (ingr) => ingr.categoriaId.id === selectedCategory
  );

  // Funzione per gestire il click su "Inserisci"
  const handleInsert = () => {
    if (!selectedIngredient) return;
    const ingredientRecipe = ingredients.find(
      (ing) => ing.id === selectedIngredient
    );
    if (ingredientRecipe) {
      onIngredientAdd(ingredientRecipe);
      setIsOpen(false);
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
          <PlusIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm h-[350px] flex flex-col justify-between">
          <div>
            <DrawerHeader className="flex justify-center mb-4">
              <DrawerTitle>Aggiungi Ingrediente</DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col gap-3 px-4">
              {/* Selezione Categoria */}
              <div>
                <label>Categoria: </label>
                <select
                  className="p-2 border-[1px] rounded w-full"
                  onChange={(e) =>
                    setSelectedCategory(
                      e.target.value ? Number(e.target.value) : null
                    )
                  }
                >
                  <option value="">Seleziona una categoria</option>
                  {categoriesIngredients.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.nome}
                    </option>
                  ))}
                </select>
              </div>

              {/* Selezione Ingrediente */}
              <div>
                <label>Ingrediente: </label>
                <select
                  className="p-2 border-[1px] rounded w-full"
                  disabled={!selectedCategory}
                  onChange={(e) =>
                    setSelectedIngredient(
                      e.target.value ? Number(e.target.value) : null
                    )
                  }
                >
                  <option value="">Seleziona un ingrediente</option>
                  {filteredIngredients.map((ingr) => (
                    <option key={ingr.id} value={ingr.id}>
                      {ingr.descrizione}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Pulsante Inserisci */}
          <div className="p-4">
            <Button
              variant="default"
              className="w-full"
              disabled={!selectedIngredient}
              onClick={handleInsert}
            >
              Inserisci
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
