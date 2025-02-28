"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PencilIcon } from "lucide-react"

import type { IceCreamCategory } from "@/types/icecream-category"
import { useRouter } from "next/navigation"
import { updateCategory } from "@/app/dashboard/categories/[categoryId]/action"

import type { z } from "zod"
import type { iceCreamCategorySchema } from "@/validation/icecream-category-schema"
import CategoryFormSheet from "@/app/dashboard/categories/[categoryId]/category-form-sheet";
import {useToast} from "@/hooks/use-toast";

type CategoryRowActionsProps = {
    category: IceCreamCategory
}

export function CategoryRowActions({ category }: CategoryRowActionsProps) {
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

        setIsOpen(false)
        router.refresh()
    }

    return (
        <>
            <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
                <PencilIcon className="h-4 w-4" />
            </Button>
            <CategoryFormSheet isOpen={isOpen} onOpenChange={setIsOpen} category={category} onSubmit={handleSubmit} />
        </>
    )
}

