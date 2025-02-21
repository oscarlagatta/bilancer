"use client";

import { Weight } from "lucide-react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const balanceSchema = z.object({
  weight: z.coerce
    .number()
    .positive("Per favore inserire un valore maggiore di zero"),
});

export default function BalanceForm() {
  const form = useForm<z.infer<typeof balanceSchema>>({
    resolver: zodResolver(balanceSchema),
    defaultValues: {
      weight: 0,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset
          disabled={form.formState.isSubmitting}
          className="grid grid-cols-2 gap-y-5 gap-x-2"
        >
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Weigth</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="inserire il peso"
                    />
                  </FormControl>
                  <FormDescription>
                    Per favore inseriere il valore del ingrediente
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Weigth</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="inserire il peso"
                    />
                  </FormControl>
                  <FormDescription>
                    Per favore inseriere il valore del ingrediente
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Weigth</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="inserire il peso"
                    />
                  </FormControl>
                  <FormDescription>
                    Per favore inseriere il valore del ingrediente
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Weigth</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="inserire il peso"
                    />
                  </FormControl>
                  <FormDescription>
                    Per favore inseriere il valore del ingrediente
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button type="submit">Salva</Button>
        </fieldset>
      </form>
    </Form>
  );
}
