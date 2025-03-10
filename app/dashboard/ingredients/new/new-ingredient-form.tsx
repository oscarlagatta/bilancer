'use client';

import IngredientForm from "@/components/ingredient-form";
import type {z} from "zod";
import {ingredientSchema} from "@/validation/ingredientSchema";

type Category = {
    id: number;
    name: string;
}

export default function NewIngredientForm({ categories} : {categories: Category[]}) {

    const handleSubmit =  async (data: z.infer<typeof ingredientSchema>) => {
        console.log(data)
    }

    return (
        <IngredientForm categories={categories} onSubmit={handleSubmit} />
    )
}