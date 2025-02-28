"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { iceCreamCategorySchema } from "@/validation/icecream-category-schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import type { IceCreamCategory } from "@/types/icecream-category"
import type { z } from "zod"

type Props = {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
    category: IceCreamCategory
    onSubmit: (data: z.infer<typeof iceCreamCategorySchema>) => Promise<void>
}

export default function CategoryFormSheet({ isOpen, onOpenChange, category, onSubmit }: Props) {
    const form = useForm<IceCreamCategory>({
        resolver: zodResolver(iceCreamCategorySchema),
        defaultValues: {
            ...category,
            // Ensure all numeric fields are properly typed as numbers
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
            pacMin: Number(category.pacMin),
            pacMax: Number(category.pacMax),
            fruitMin: Number(category.fruitMin),
            fruitMax: Number(category.fruitMax),
            alcoholMin: Number(category.alcoholMin),
            alcoholMax: Number(category.alcoholMax),
            overrunMin: Number(category.overrunMin),
            overrunMax: Number(category.overrunMax),
            groundFoodsMin: Number(category.groundFoodsMin),
            groundFoodsMax: Number(category.groundFoodsMax),
        },
    })

    const handleSubmit = async (data: IceCreamCategory) => {
        await onSubmit(data)
    }

    const formFields = [
        { title: "Sugars", min: "sugarsMin", max: "sugarsMax" },
        { title: "Fats", min: "fatsMin", max: "fatsMax" },
        { title: "MSNF", min: "msnfMin", max: "msnfMax" },
        { title: "Other Solids", min: "otherSolidsMin", max: "otherSolidsMax" },
        { title: "Total Solids", min: "totalSolidsMin", max: "totalSolidsMax" },
        { title: "POD", min: "podMin", max: "podMax" },
        { title: "PAC", min: "pacMin", max: "pacMax" },
        { title: "Fruit", min: "fruitMin", max: "fruitMax" },
        { title: "Alcohol", min: "alcoholMin", max: "alcoholMax" },
        { title: "Overrun", min: "overrunMin", max: "overrunMax" },
        { title: "Ground Foods", min: "groundFoodsMin", max: "groundFoodsMax" },
    ]

    return (
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetContent className="w-[400px] sm:w-[540px] sm:max-w-[100vw] overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>Edit Ice Cream Category</SheetTitle>
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
                                        <Input {...field} className="w-full" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {formFields.map((field) => (
                                <div key={field.title} className="space-y-2">
                                    <h3 className="font-medium text-sm">{field.title}</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        <FormField
                                            control={form.control}
                                            name={field.min as keyof IceCreamCategory}
                                            render={({ field: formField }) => (
                                                <FormItem>
                                                    <FormLabel className="text-xs">Min (%)</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...formField}
                                                            type="number"
                                                            step="0.01"
                                                            className="h-8"
                                                            onChange={(e) => {
                                                                // Convert string to number before updating form
                                                                formField.onChange(Number(e.target.value))
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name={field.max as keyof IceCreamCategory}
                                            render={({ field: formField }) => (
                                                <FormItem>
                                                    <FormLabel className="text-xs">Max (%)</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...formField}
                                                            type="number"
                                                            step="0.01"
                                                            className="h-8"
                                                            onChange={(e) => {
                                                                // Convert string to number before updating form
                                                                formField.onChange(Number(e.target.value))
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end space-x-2 sticky bottom-0 bg-background pt-4 pb-2">
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

