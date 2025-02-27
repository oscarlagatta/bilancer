"use client";

import {useRouter} from "next/navigation";
import {z} from "zod";
import CategoryForm, {categoryFormSchema} from "@/components/category-form";
import {updateCategory} from "@/app/dashboard/categories/[categoryId]/action";
import {useToast} from "@/hooks/use-toast";


export default function EditCategoryForm({ category }: { category: {
    id: number;
    name: string;
    sugarsMin: string;
    sugarsMax: string;
    fatsMin: string;
    fatsMax: string;
    msnfMin: string;
    msnfMax: string;
    otherSolidsMin: string;
    otherSolidsMax: string;
    totalSolidsMin: string;
    totalSolidsMax: string;
    podMin: string;
    podMax: string;
    fruitMin: string;
    fruitMax: string;
    alcoholMin: string;
    alcoholMax: string;
    overrunMin: string;
    overrunMax: string;
    groundFoodsMin: string;
    groundFoodsMax: string;
    } }) {
    const router = useRouter();

    const {toast} = useToast();

    const handleSubmit = async (data: z.infer<typeof categoryFormSchema>) => {

        const result = await updateCategory({
            id: category.id,
            name: data.name,
            sugarsMin: data.sugarsMin,
            sugarsMax: data.sugarsMax,
            fatsMin: data.fatsMin,
            fatsMax: data.fatsMax,
            msnfMin: data.msnfMin,
            msnfMax: data.msnfMax,
            otherSolidsMin: data.otherSolidsMin,
            otherSolidsMax: data.otherSolidsMax,
            totalSolidsMin: data.totalSolidsMin,
            totalSolidsMax: data.totalSolidsMax,
            podMin: data.podMin,
            podMax: data.podMax,
            fruitMin: data.fruitMin,
            fruitMax: data.fruitMax,
            alcoholMin: data.alcoholMin,
            alcoholMax: data.alcoholMax,
            overrunMin: data.overrunMin,
            overrunMax: data.overrunMax,
            groundFoodsMin: data.groundFoodsMin,
            groundFoodsMax: data.groundFoodsMax,
        });

        if (result?.error) {
            toast({
                title: "Error",
                description: result.message,
                variant: 'destructive'
            });
            return;
        }

        toast({
            title: "Success",
            description: "Transaction updated.",
            variant: 'success'
        });

        router.push(`/dashboard/categories`);
    }
    return (
        <CategoryForm
            defaultValues={{
                id: category.id,
                name: category.name,
                sugarsMin: Number(category.sugarsMin),
                sugarsMax: Number(category.sugarsMax),
                fatsMin: Number(category.fatsMin),
                fatsMax: Number(category.fatsMax),
                msnfMin: Number(category.msnfMin),
                msnfMax: Number(category.msnfMax),
                otherSolidsMin: Number(category.otherSolidsMin),
                otherSolidsMax: Number(category.otherSolidsMax),
                totalSolidsMin: Number(category.totalSolidsMin),
                totalSolidsMax: Number(category.totalSolidsMax),
                podMin: Number(category.podMin),
                podMax: Number(category.podMax),
                fruitMin: Number(category.fruitMin),
                fruitMax: Number(category.fruitMax),
                alcoholMin: Number(category.alcoholMin),
                alcoholMax: Number(category.alcoholMax),
                overrunMin: Number(category.overrunMin),
                overrunMax: Number(category.overrunMax),
                groundFoodsMin: Number(category.groundFoodsMin),
                groundFoodsMax: Number(category.groundFoodsMax),
            }}
            onSubmit={handleSubmit}
        />
    );
}