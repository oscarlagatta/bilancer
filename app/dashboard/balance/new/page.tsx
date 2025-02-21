// "use client";

// import BalanceForm from "@/components/balance-form";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Link from "next/link";

// export default function NewBalancePage() {
//   return (
//     <div className="max-w-screen mx-auto py-10">
//       <Breadcrumb>
//         <BreadcrumbList>
//           <BreadcrumbItem>
//             <BreadcrumbLink asChild>
//               <Link href="/dashboard">Dashboard</Link>
//             </BreadcrumbLink>
//           </BreadcrumbItem>
//           <BreadcrumbSeparator />
//           <BreadcrumbItem>
//             <BreadcrumbLink asChild>
//               <Link href="/dashboard/balance">Bilanci</Link>
//             </BreadcrumbLink>
//           </BreadcrumbItem>
//           <BreadcrumbSeparator />
//           <BreadcrumbItem>
//             <BreadcrumbPage>Nuovo Bilanciamento</BreadcrumbPage>
//           </BreadcrumbItem>
//         </BreadcrumbList>
//       </Breadcrumb>
//       <Card className="mt-4 max-w-screen-md">
//         <CardHeader>
//           <CardTitle>Nuovo Bilanciamento</CardTitle>
//           <CardContent>
//             <BalanceForm />
//           </CardContent>
//         </CardHeader>
//       </Card>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { TableIngredients } from "./components/tableIngredients/TableIngredients";
import { Ingredient } from "@/types/ingredient";
import { ingredientsDB } from "@/DATA/ingredients";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { Recipe, TotaliBalancer } from "@/types/recipe";
import { categoryRecipeDB } from "@/DATA/categoryRecipe";
import { Balancer } from "./components/balancer/balancer";

export default function GelatoCalculator2() {
  const [pesoGelato, setPesoGelato] = useState<number>(1000);
  const [selectedTypeGelato, setSelectedTypeGelato] = useState(0);
  const [ingredients, setIngredients] = useState<Ingredient[]>(ingredientsDB);
  const [totaliBalancer, setTotaliBalancer] = useState<TotaliBalancer>();
  const [recipe, setRecipe] = useState<Recipe>({
    id: "1",
    name: "",
    category: {
      id: 1,
      nameCategoryRecipe: "Gelato",
      percentualeMinZuccheri: 16,
      percentualeMaxZuccheri: 22,
      percentualeMinGrassi: 5,
      percentualeMaxGrassi: 12,
      percentualeMinSLNG: 7.5,
      percentualeMaxSLNG: 11.5,
      percentualeMinAltriSolidi: 0,
      percentualeMaxAltriSolidi: 5,
      percentualeMinPOD: 16,
      percentualeMaxPOD: 20,
      percentualeMinPAC: 26,
      percentualeMaxPAC: 31,
      percentualeMinFrutta: 20,
      percentualeMaxFrutta: 40,
      percentualeMinAlcolici: 1,
      percentualeMaxAlcolici: 2,
    },
    ingredients: [],
  });

  const handlePesoGelatoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPesoGelato = parseFloat(e.target.value);
    setPesoGelato(newPesoGelato);
  };

  const handleSelectedTypeGelato = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newValue = event.target.value;
    setSelectedTypeGelato(Number(newValue));
  };

  const handleUpdateBalancer = (data: TotaliBalancer) => {
    console.log("totali BValancer", data);
    setTotaliBalancer(data);
  };
  const updateRecipe = (updatedFields: Partial<Recipe>) => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      ...updatedFields,
      category: {
        ...prevRecipe.category,
        ...updatedFields.category,
      },
    }));
    console.log(recipe);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mx-auto md:order-1 md:flex-row md: justify-center">
        <Card className="flex justify-start h-[260px] w-[350px] m-4 flex-col shadow-lg">
          <CardTitle className="p-2 pl-5">
            <h1 className="text-xl ">Ricetta Gelato</h1>
          </CardTitle>
          <CardContent>
            <div>
              <label>Tipologia Gelato</label>
              <select
                className="bg-slate-50 p-1 border-[1px] rounded ml-2 mb-2"
                value={selectedTypeGelato}
                onChange={handleSelectedTypeGelato}
              >
                <option value="">-- Seleziona Tipologia --</option>
                {categoryRecipeDB.map((cat) => (
                  <option key={cat.id} className="bg-slate-50" value={cat.id}>
                    {cat.nameCategoryRecipe}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Peso Totale Gelato (g): </label>
              <input
                className="border-[1px] rounded bg-slate-50 w-14 text-center mb-2"
                type="text"
                value={pesoGelato}
                onChange={handlePesoGelatoChange}
                // min="0"
              />
            </div>
            <div>
              <label>Nome Ricetta: </label>
              <input
                className="border-[1px] rounded bg-slate-50 w-full text-left pl-2 placeholder:text-center"
                type="text"
                value={recipe?.name}
                onChange={(e) => updateRecipe({ name: e.target.value })}
                placeholder=" - Inserisci nome ricetta -"
              />
            </div>
          </CardContent>
        </Card>
        <div className="flex md:order-2 ">
          <Balancer totali={totaliBalancer} />
        </div>
      </div>
      <div className="md:order-3">
        <TableIngredients
          ingredients={ingredients}
          dataSendFromTableIngrediants={handleUpdateBalancer}
        />
      </div>
    </div>
  );
}
