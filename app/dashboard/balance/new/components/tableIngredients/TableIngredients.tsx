"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import { Ingredient } from "@/types/ingredient";
import { DrawerPage } from "../drawer/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { TotaliBalancer } from "@/types/recipe";

interface TableIngredientsProps {
  ingredients: Ingredient[];
  dataSendFromTableIngredients: (data: TotaliBalancer) => void;
  //  dataSendFromTableIngredients(data: TotaliBalancer): void;
}

export function TableIngredients({
  ingredients,
  dataSendFromTableIngredients,
}: TableIngredientsProps) {
  const [ingredientsRecipe, setIngredientsRecipe] = useState<Ingredient[]>([]);
  const [totalWeightIngredients, setTotalWeightIngredients] = useState(0);
  const [totaliBalancer, setTotaliBalancer] = useState<TotaliBalancer>({
    percentualeTotaleZuccheri: 0,
    percentualeTotaleGrassi: 0,
    percentualeTotaleSLNG: 0,
    percentualeTotaleNeutriOBasi: 0,
    percentualeTotaleAltriSolidi: 0,
    percentualeTotaleSolidiTotali: 0,
    percentualeTotalePOD: 0,
    percentualeTotalePAC: 0,
  });
  const [openItem, setOpenItem] = useState<number | null>(null);

  useEffect(() => {
    const totalWeight = ingredientsRecipe.reduce(
      (sum, ingredient) => sum + (ingredient.peso || 0),
      0
    );
    setTotalWeightIngredients(totalWeight);
  }, [ingredientsRecipe]);

  const handleAddIngredient = (ingredient: Ingredient) => {
    setIngredientsRecipe((prevIngredients) => [
      ...prevIngredients,
      { ...ingredient, peso: null, percentualeTotale: 0 },
    ]);
  };

  const handleWeightChange = (index: number, newWeight: string) => {
    const updatedIngredients = [...ingredientsRecipe];
    updatedIngredients[index].peso =
      newWeight === "" ? null : Number(newWeight);

    const totalWeight = updatedIngredients.reduce(
      (sum, ingredient) => sum + (ingredient.peso || 0),
      0
    );

    updatedIngredients.forEach((ingredient) => {
      ingredient.percentualeTotale = totalWeight
        ? ((ingredient.peso || 0) / totalWeight) * 100
        : 0;
    });

    setIngredientsRecipe(updatedIngredients);
    setTotalWeightIngredients(totalWeight);

    setTotaliBalancer((prev) => ({
      ...prev,
      percentualeTotaleZuccheri: totalPercentualeZuccheri,
      percentualeTotaleGrassi: totalPercentualeGrassi,
      percentualeTotaleSLNG: totalPercentualeSLNG,
      percentualeTotaleNeutriOBasi: totalNeutroOrBase,
      percentualeTotaleAltriSolidi: totalPercentualeAltriSolidi,
      percentualeTotaleSolidiTotali: totalPercentualeSolidiTotali,
      percentualeTotalePOD: totalPercentualePOD,
      percentualeTotalePAC: totalPercentualePAC,
    }));

    dataSendFromTableIngredients(totaliBalancer);
  };

  const toggleAccordion = (itemId: number) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const handleDeleteIngredient = (index: number) => {
    setIngredientsRecipe((prevIngredients) =>
      prevIngredients.filter((_, i) => i !== index)
    );
  };

  const totalZuccheriGrammi = ingredientsRecipe.reduce(
    (acc, curr) => acc + (curr.percentualeZuccheri / 100) * curr.peso,
    0
  );
  const totalGrassiGrammi = ingredientsRecipe.reduce(
    (acc, curr) => acc + (curr.percentualeGrassi / 100) * curr.peso,
    0
  );
  const totalSLNGGrammi = ingredientsRecipe.reduce(
    (acc, curr) => acc + (curr.percentualeSLNG / 100) * curr.peso,
    0
  );
  const totalAltriSolidiGrammi = ingredientsRecipe.reduce(
    (acc, curr) => acc + (curr.percentualeAltriSolidi / 100) * curr.peso,
    0
  );
  const totalSolidiTotaliGrammi = ingredientsRecipe.reduce(
    (acc, curr) =>
      acc +
      ((curr.percentualeZuccheri +
        curr.percentualeGrassi +
        curr.percentualeSLNG +
        curr.percentualeAltriSolidi) /
        100) *
        curr.peso,
    0
  );
  const totalNeutroOrBase = ingredientsRecipe.reduce((acc, curr) => {
    if (curr.isNeutroOrBase === "Neutro") {
      // Somma per il caso "Neutro"
      acc += (curr.peso / totalWeightIngredients) * 100;
    } else if (curr.isNeutroOrBase === "Base") {
      // Somma per il caso "Base"
      acc +=
        curr.peso /
        ((1 - totalPercentualeSolidiTotali) * totalWeightIngredients);
    }
    return acc;
  }, 0); // Inizializzo l'accumulatore a 0

  const totalPODGrammi = ingredientsRecipe.reduce(
    (acc, curr) => acc + (curr.percentualePOD / 100) * curr.peso,
    0
  );
  const totalPACGrammi = ingredientsRecipe.reduce(
    (acc, curr) => acc + (curr.percentualePAC / 100) * curr.peso,
    0
  );

  // Calcolo della percentuale sul peso totale del gelato per ciascun componente
  const totalPercentualeZuccheri =
    totalWeightIngredients > 0
      ? (totalZuccheriGrammi / totalWeightIngredients) * 100
      : 0;
  const totalPercentualeGrassi =
    totalWeightIngredients > 0
      ? (totalGrassiGrammi / totalWeightIngredients) * 100
      : 0;
  const totalPercentualeSLNG =
    totalWeightIngredients > 0
      ? (totalSLNGGrammi / totalWeightIngredients) * 100
      : 0;
  const totalPercentualeAltriSolidi =
    totalWeightIngredients > 0
      ? (totalAltriSolidiGrammi / totalWeightIngredients) * 100
      : 0;
  const totalPercentualeSolidiTotali =
    totalWeightIngredients > 0
      ? (totalSolidiTotaliGrammi / totalWeightIngredients) * 100
      : 0;
  const totalPercentualePOD =
    totalWeightIngredients > 0
      ? (totalPODGrammi / totalWeightIngredients) * 100
      : 0;
  const totalPercentualePAC =
    totalWeightIngredients > 0
      ? (totalPACGrammi / totalWeightIngredients) * 100
      : 0;
  const temperaturaServizio =
    totalWeightIngredients > 0 ? Math.round(-(totalPercentualePAC / 2)) : 0;

  console.log(totaliBalancer);

  const isPercentualeOutOfRange = (
    percentuale: number,
    min: number,
    max: number
  ) => {
    return percentuale < min || percentuale > max;
  };
  return (
    <div className="flex">
      {/* {JSON.stringify(totaliBalancer)} */}
      <Card className="flex flex-col shadow-lg m-4 p-4">
        <CardTitle className="text-lg p-4">Bilanciatore Ricetta</CardTitle>
        <CardContent>
          <TableHeader>
            <DrawerPage
              ingredients={ingredients}
              onIngredientAdd={handleAddIngredient}
            />
          </TableHeader>
          <Table>
            {/* <TableCaption>Ingredienti Ricetta Gelato</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="hidden sm:table-cell">
                  Categoria
                </TableHead>
                <TableHead className="w-[100px]">Descrizione</TableHead>
                <TableHead className="text-center">Peso</TableHead>
                <TableHead className="text-center">% sul Totale</TableHead>
                <TableHead className="text-center">Neutro o Basi</TableHead>
                <TableHead className="text-center">% Min</TableHead>
                <TableHead className="text-center">% Max</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ingredientsRecipe.map((i: Ingredient, index) => (
                <>
                  <TableRow
                    key={index}
                    // onClick={() => toggleAccordion(index)}
                    className="cursor-pointer hover:bg-muted"
                  >
                    <TableCell className="font-medium hidden sm:table-cell">
                      {i.categoriaId.name}
                    </TableCell>
                    <TableCell>{i.descrizione}</TableCell>
                    <TableCell className="text-center">
                      <input
                        type="number"
                        value={i.peso === null ? "" : i.peso}
                        onChange={(e) =>
                          handleWeightChange(index, e.target.value)
                        }
                        className="border rounded px-2 py-1 w-20 text-center"
                      />
                    </TableCell>
                    <TableCell className="text-center">
                      <span
                        style={{
                          color: isPercentualeOutOfRange(
                            i.percentualeTotale,
                            i.percentualeMin,
                            i.percentualeMax
                          )
                            ? "red"
                            : "black",
                        }}
                      >
                        {i.percentualeTotale.toFixed(2)}%
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      {i.isNeutroOrBase}
                    </TableCell>
                    <TableCell className="text-center">
                      {i.percentualeMin}
                    </TableCell>
                    <TableCell className="text-center">
                      {i.percentualeMax}
                    </TableCell>
                    <TableCell
                      className="text-right"
                      onClick={() => toggleAccordion(index)}
                    >
                      {openItem === index ? (
                        <ChevronUp className="inline-block ml-2" />
                      ) : (
                        <ChevronDown className="inline-block ml-2" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      <Trash2
                        className="text-red-500 cursor-pointer"
                        onClick={() => handleDeleteIngredient(index)}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={5} className="p-0">
                      <Accordion
                        type="single"
                        collapsible
                        value={`item-${openItem}`}
                      >
                        <AccordionItem value={`item-${index}`}>
                          <AccordionContent className="px-4 py-2">
                            <h1 className="mb-2">
                              Dettaglio Ingrediente: {i.descrizione}
                            </h1>
                            <div className="border-[1px] rounded-xl">
                              <Table className="w-full">
                                <TableHeader>
                                  <TableRow className="w-full">
                                    <TableHead className="text-center">
                                      Zuccheri
                                    </TableHead>
                                    <TableHead className="text-center">
                                      Grassi
                                    </TableHead>
                                    <TableHead className="text-center">
                                      SLNG
                                    </TableHead>
                                    <TableHead className="text-center">
                                      PAC
                                    </TableHead>
                                    <TableHead className="text-center">
                                      POD
                                    </TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  <TableRow className="w-full">
                                    <TableCell className="text-center">
                                      {i.percentualeZuccheri}%
                                    </TableCell>
                                    <TableCell className="text-center">
                                      {i.percentualeGrassi}%
                                    </TableCell>
                                    <TableCell className="text-center">
                                      {i.percentualeSLNG}%
                                    </TableCell>
                                    <TableCell className="text-center">
                                      {i.percentualePAC}%
                                    </TableCell>
                                    <TableCell className="text-center">
                                      {i.percentualePOD}%
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow className="bg-white">
                <TableCell colSpan={2}>Totale Peso Miscela</TableCell>
                <TableCell className="text-center">
                  {totalWeightIngredients} g
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
