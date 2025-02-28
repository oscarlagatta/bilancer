"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PencilIcon, TrashIcon } from "lucide-react"
import IngredientCategoryFormSheet from "./ingredient-category-form-sheet"
import type { IngredientCategory } from "@/types/ingredient-category"

import { updateIngredientCategory, deleteIngredientCategory } from "./actions"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {useToast} from "@/hooks/use-toast";
import {useRouter} from "next/navigation";

type IngredientCategoryRowActionsProps = {
    category: IngredientCategory
    // onUpdate: (updatedCategory: IngredientCategory) => void
    // onDelete: (categoryId: number) => void
}

export function IngredientCategoryRowActions({ category }: IngredientCategoryRowActionsProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const { toast } = useToast()
    const router = useRouter();

    const handleSubmit = async (data: IngredientCategory) => {
        const result = await updateIngredientCategory(data)

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

        // onUpdate(data)
        setIsOpen(false)
        router.refresh()
    }

    const handleDelete = async () => {
        const result = await deleteIngredientCategory(category.id)

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
            description: "Category deleted successfully.",
            variant: "default",
        })

        // onDelete(category.id)
        setIsDeleteDialogOpen(false)
        router.refresh()
    }

    return (
        <>
            <Button variant="outline" size="icon" onClick={() => setIsOpen(true)} className="mr-2">
                <PencilIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => setIsDeleteDialogOpen(true)}>
                <TrashIcon className="h-4 w-4" />
            </Button>
            <IngredientCategoryFormSheet
                isOpen={isOpen}
                onOpenChange={setIsOpen}
                category={category}
                onSubmit={handleSubmit}
            />
            <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure you want to delete this category?</AlertDialogTitle>
                        <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

