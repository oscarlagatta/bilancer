"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PencilIcon } from "lucide-react"
import CategoryFormSheet from "./category-form-sheet"
import type { IceCreamCategory } from "@/types/icecream-category"
import { useRouter } from "next/navigation"
import type { z } from "zod"
import { updateCategory } from "@/app/dashboard/categories/[categoryId]/action"

import type { iceCreamCategorySchema } from "@/validation/icecream-category-schema"
import {useToast} from "@/hooks/use-toast";

export default function EditCategoryForm({
                                             category,
                                         }: {
    category: IceCreamCategory
}) {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const { toast } = useToast()

    const handleSubmit = async (data: z.infer<typeof iceCreamCategorySchema>) => {
        const result = await updateCategory(data)

        if (result?.error) {
            toast({
                title: "Error",
                description: result.message,
                variant: "destructive",
            })
            return
        }

        toast({
            title: "Success",
            description: "Category updated successfully.",
            variant: "default",
        })

        router.refresh()
    }

    return (
        <>
            <Button onClick={() => setIsOpen(true)} variant="outline">
                <PencilIcon className="mr-2 h-4 w-4" /> Edit Category
            </Button>
            <CategoryFormSheet isOpen={isOpen} onOpenChange={setIsOpen} category={category} onSubmit={handleSubmit} />
        </>
    )
}

