import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ingredientSchema} from "@/validation/ingredientSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import { z } from 'zod';
import {Switch} from "@/components/ui/switch";
export type Category = {
    id: number;
    name: string;
}

type Props = {
    categories: Category[];
    onSubmit: (data: z.infer<typeof ingredientSchema>) => Promise<void>;
    defaultValues?: {
        categoryId: number;
        description: string;
        sugar: number;
        fat: number;
        slng: number;
        altriSolidi: number;
        pod: number;
        pac: number;
        minPercentage: number;
        maxPercentage: number;
        foodCostForKg: number;
        bilanciaSuLiquidi: boolean;
    };
}

export default function IngredientForm({
                                            categories,
                                            onSubmit,
                                            defaultValues,
                                        }: Props) {
    const form = useForm<z.infer<typeof ingredientSchema>>({
        resolver: zodResolver(ingredientSchema),
        mode: 'onBlur',
        defaultValues: {
            sugar: 0,
            fat: 0,
            slng: 0,
            altriSolidi: 0,
            pod: 0,
            pac: 0,
            categoryId: 0,
            description: '',
            minPercentage: 0,
            maxPercentage: 0,
            foodCostForKg: 0,
            bilanciaSuLiquidi: false,
            ...defaultValues
        }
    });


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <fieldset disabled={form.formState.isSubmitting} className='grid grid-cols-2 gap-y-5 gap-x-2'>
                    <FormField
                        control={form.control}
                        name='categoryId'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Category
                                    </FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value.toString()}>
                                            <SelectTrigger>
                                                <SelectValue/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {categories.map(category => (
                                                    <SelectItem key={category.id} value={category.id.toString()}>
                                                        {category.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}/>
                    <FormField
                        control={form.control}
                        name='description'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Description
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}
                    />



                </fieldset>
                <fieldset disabled={form.formState.isSubmitting} className='grid grid-cols-4 mt-5 gap-5'>
                    <FormField
                        control={form.control}
                        name='sugar'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Sugar
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} type='number'/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name='fat'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Fat
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} type='number'/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name='fat'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Fat
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} type='number'/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name='slng'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Slng
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} type='number'/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name='slng'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Slng
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} type='number'/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name='altriSolidi'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Altri Solidi
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} type='number'/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}
                    />

                </fieldset>
                <fieldset disabled={form.formState.isSubmitting} className='grid grid-cols-4 mt-5  gap-5'>
                    <FormField
                        control={form.control}
                        name="bilanciaSuLiquidi"
                        render={({field}) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                <div className="space-y-0.5">
                                    <FormLabel className="text-base">Bilancia su Liquidi</FormLabel>
                                </div>
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='pod'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Pod
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} type='number'/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name='pac'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Pac
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} type='number'/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name='minPercentage'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Min Percentage
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} type='number'/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}
                    />

                </fieldset>
                <fieldset disabled={form.formState.isSubmitting} className='mt-5 flex flex-col gap-5'>
                    <FormField
                        control={form.control}
                        name='maxPercentage'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Pac
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} type='number'/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name='foodCostForKg'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Min Percentage
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} type='number'/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}
                    />
                    <Button type='submit'>Submit</Button>
                </fieldset>
            </form>
        </Form>
)
}