"use client"

import type { z } from "zod"
import { useForm } from "react-hook-form"
import { iceCreamCategorySchema } from "@/validation/icecream-category-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type Props = {
    onSubmit: (values: z.infer<typeof iceCreamCategorySchema>) => void
    defaultValues?: z.infer<typeof iceCreamCategorySchema>
}

export default function CategoryForm({ onSubmit, defaultValues }: Props) {
    const form = useForm<z.infer<typeof iceCreamCategorySchema>>({
        resolver: zodResolver(iceCreamCategorySchema),
        defaultValues: {
            id: 0,
            name: "",
            sugarsMin: 0,
            sugarsMax: 0,
            fatsMin: 0,
            fatsMax: 0,
            msnfMin: 0,
            msnfMax: 0,
            otherSolidsMin: 0,
            otherSolidsMax: 0,
            totalSolidsMin: 0,
            totalSolidsMax: 0,
            podMin: 0,
            podMax: 0,
            pacMin: 0,
            pacMax: 0,
            fruitMin: 0,
            fruitMax: 0,
            alcoholMin: 0,
            alcoholMax: 0,
            overrunMin: 0,
            overrunMax: 0,
            groundFoodsMin: 0,
            groundFoodsMax: 0,
            ...defaultValues,
        },
    })

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
        <div className="container mx-auto px-4 py-8">
            <Card className="w-full max-w-6xl mx-auto">
                <CardHeader>
                    <CardTitle>Ice Cream Category</CardTitle>
                    <CardDescription>Create or edit an ice cream category</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

                            <Separator />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {formFields.map((field, index) => (
                                    <div key={field.title} className="space-y-4">
                                        <h3 className="font-medium text-lg">{field.title}</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name={field.min as keyof z.infer<typeof iceCreamCategorySchema>}
                                                render={({ field: formField }) => (
                                                    <FormItem>
                                                        <FormLabel>Min (%)</FormLabel>
                                                        <FormControl>
                                                            <Input {...formField} type="number" step="0.01" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={field.max as keyof z.infer<typeof iceCreamCategorySchema>}
                                                render={({ field: formField }) => (
                                                    <FormItem>
                                                        <FormLabel>Max (%)</FormLabel>
                                                        <FormControl>
                                                            <Input {...formField} type="number" step="0.01" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button type="submit" className="w-full">
                                Save Changes
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

