'use client';

import IngredientForm from "@/components/ingredient-form";

type Category = {
    id: number;
    name: string;
}

export default function NewIngredientForm({ categories} : {categories: Category[]}) {

    const handleSubmit =  async (data: any) => {
        console.log(data)
    }

    return (
        <IngredientForm categories={categories} onSubmit={handleSubmit} />
    )
}