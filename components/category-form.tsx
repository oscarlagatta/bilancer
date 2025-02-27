'use client';

import { z } from 'zod';
import {Form, useForm} from "react-hook-form";
import {iceCreamCategorySchema} from "@/validation/icecream-category-schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export const categoryFormSchema = z.object({
    id: z.coerce.number(),
    name: z.string().min(3, {
        message: 'Name must be at least 3 characters'
    }).max(100, {
        message: 'Name must contain no more than 300 characters'
    }),
    sugarsMin: z.coerce.number(),
    sugarsMax: z.coerce.number(),
    fatsMin: z.coerce.number(),
    fatsMax: z.coerce.number(),
    msnfMin: z.coerce.number(),
    msnfMax: z.coerce.number(),
    otherSolidsMin: z.coerce.number(),
    otherSolidsMax: z.coerce.number(),
    totalSolidsMin: z.coerce.number(),
    totalSolidsMax: z.coerce.number(),
    podMin: z.coerce.number(),
    podMax: z.coerce.number(),
    fruitMin: z.coerce.number(),
    fruitMax: z.coerce.number(),
    alcoholMin: z.coerce.number(),
    alcoholMax: z.coerce.number(),
    overrunMin: z.coerce.number(),
    overrunMax: z.coerce.number(),
    groundFoodsMin: z.coerce.number(),
    groundFoodsMax: z.coerce.number()
});

type Props = {
    onSubmit: (values: z.infer<typeof categoryFormSchema>) => void;
    defaultValues?: {
        id: number;
        name: string;
        sugarsMin: number;
        sugarsMax: number;
        fatsMin: number;
        fatsMax: number;
        msnfMin: number;
        msnfMax: number;
        otherSolidsMin: number;
        otherSolidsMax: number;
        totalSolidsMin: number;
        totalSolidsMax: number;
        podMin: number;
        podMax: number;
        fruitMin: number;
        fruitMax: number;
        alcoholMin: number;
        alcoholMax: number;
        overrunMin: number;
        overrunMax: number;
        groundFoodsMin: number;
        groundFoodsMax: number;
    };
}

export default function CategoryForm({onSubmit, defaultValues}: Props ) {

    const form = useForm<z.infer<typeof iceCreamCategorySchema>>({
        resolver: zodResolver(iceCreamCategorySchema),
        defaultValues: {
            id: 0,
            name: '',
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
            fruitMin: 0,
            fruitMax: 0,
            alcoholMin: 0,
            alcoholMax: 0,
            overrunMin: 0,
            overrunMax: 0,
            groundFoodsMin: 0,
            groundFoodsMax: 0,
            ...defaultValues
        }
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <fieldset disabled={form.formState.isSubmitting} className='grid grid-cols-2 gap-y-5 gap-x-2'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Name
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
                    <fieldset disabled={form.formState.isSubmitting} className='grid grid-cols-2 gap-y-5 gap-x-2'>
                        <FormField
                            control={form.control}
                            name='sugarsMin'
                            render={({field}) => {
                                return (
                                    <FormItem>
                                        <FormLabel>
                                            Sugars Min
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
                            name='sugarsMax'
                            render={({field}) => {
                                return (
                                    <FormItem>
                                        <FormLabel>
                                            Sugars Max
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
                        <Button type='submit'>Submit</Button>
                    </fieldset>
            </form>
        </Form>
)
}