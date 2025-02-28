import { getCategory } from "@/DATA/getCategory"
import { notFound } from "next/navigation"
import EditCategoryForm from "@/app/dashboard/categories/[categoryId]/edit-category-form"
import type { IceCreamCategory } from "@/types/icecream-category"

export default async function ModificaCategoriePage({
                                                        params,
                                                    }: {
    params: { categoryId: string }
}) {
    const categoryId = Number(params.categoryId)
    const categoryData = await getCategory(categoryId)

    if (!categoryData) {
        notFound()
    }

    // Convert string values to numbers
    const category: IceCreamCategory = {
        id: categoryData.id,
        name: categoryData.name,
        sugarsMin: Number(categoryData.sugarsMin),
        sugarsMax: Number(categoryData.sugarsMax),
        fatsMin: Number(categoryData.fatsMin),
        fatsMax: Number(categoryData.fatsMax),
        msnfMin: Number(categoryData.msnfMin),
        msnfMax: Number(categoryData.msnfMax),
        otherSolidsMin: Number(categoryData.otherSolidsMin),
        otherSolidsMax: Number(categoryData.otherSolidsMax),
        totalSolidsMin: Number(categoryData.totalSolidsMin),
        totalSolidsMax: Number(categoryData.totalSolidsMax),
        podMin: Number(categoryData.podMin),
        podMax: Number(categoryData.podMax),
        pacMin: Number(categoryData.pacMin),
        pacMax: Number(categoryData.pacMax),
        fruitMin: Number(categoryData.fruitMin),
        fruitMax: Number(categoryData.fruitMax),
        alcoholMin: Number(categoryData.alcoholMin),
        alcoholMax: Number(categoryData.alcoholMax),
        overrunMin: Number(categoryData.overrunMin),
        overrunMax: Number(categoryData.overrunMax),
        groundFoodsMin: Number(categoryData.groundFoodsMin),
        groundFoodsMax: Number(categoryData.groundFoodsMax),
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Ice Cream Category: {category.name}</h1>
            <EditCategoryForm category={category} />
        </div>
    )
}

