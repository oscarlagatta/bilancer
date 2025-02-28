"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { createIngredientCategory } from "../actions"
import {useToast} from "@/hooks/use-toast";

const formSchema = z.object({
    name: z.string().min(1, "Name is required").max(100, "Name must be 100 characters or less"),
})

export default function NewIngredientCategoryPage() {
    const router = useRouter()
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsSubmitting(true)
        const result = await createIngredientCategory(data)
        setIsSubmitting(false)

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
            description: "Ingredient category created successfully.",
            variant: "default",
        })

        router.push("/dashboard/ingredient-categories")
    }

    return (
        <div className="w-full mx-auto py-6 px-4 sm:px-6 md:py-10">
            <Card className="mt-4">
                <CardHeader>
                    <CardTitle>New Ingredient Category</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Creating..." : "Create Category"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

