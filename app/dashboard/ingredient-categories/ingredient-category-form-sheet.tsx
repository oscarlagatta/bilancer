"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import type { IngredientCategory } from "@/types/ingredient-category"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(1, "Name is required").max(100, "Name must be 100 characters or less"),
})

type Props = {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
    category: IngredientCategory
    onSubmit: (data: IngredientCategory) => Promise<void>
}

export default function IngredientCategoryFormSheet({ isOpen, onOpenChange, category, onSubmit }: Props) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: category,
    })

    const handleSubmit = async (data: z.infer<typeof formSchema>) => {
        await onSubmit(data as IngredientCategory)
    }

    return (
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit Ingredient Category</SheetTitle>
                </SheetHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 py-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end space-x-2">
                            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                                Cancel
                            </Button>
                            <Button type="submit">Save Changes</Button>
                        </div>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    )
}

