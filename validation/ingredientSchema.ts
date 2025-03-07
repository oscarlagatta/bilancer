import { z } from "zod"

export const ingredientSchema = z
    .object({
        categoryId: z.number().int().min(0, {
            message: "Seleziona una categoria valida",
        }),

        description: z.string().min(1, {
            message: "La descrizione è obbligatoria",
        }),

        sugar: z.coerce
            .number({
                required_error: "Il valore dello zucchero è obbligatorio",
                invalid_type_error: "Inserisci un valore numerico valido",
            })
            .min(0, {
                message: "Il valore dello zucchero non può essere negativo",
            }),

        fat: z.coerce
            .number({
                required_error: "Il valore dei grassi è obbligatorio",
                invalid_type_error: "Inserisci un valore numerico valido",
            })
            .min(0, {
                message: "Il valore dei grassi non può essere negativo",
            }),

        slng: z.coerce
            .number({
                required_error: "Il valore SLNG è obbligatorio",
                invalid_type_error: "Inserisci un valore numerico valido",
            })
            .min(0, {
                message: "Il valore SLNG non può essere negativo",
            }),

        altriSolidi: z.coerce
            .number({
                required_error: "Il valore degli altri solidi è obbligatorio",
                invalid_type_error: "Inserisci un valore numerico valido",
            })
            .min(0, {
                message: "Il valore degli altri solidi non può essere negativo",
            }),

        pod: z.coerce
            .number({
                required_error: "Il valore POD è obbligatorio",
                invalid_type_error: "Inserisci un valore numerico valido",
            })
            .min(0, {
                message: "Il valore POD non può essere negativo",
            }),

        pac: z.coerce
            .number({
                required_error: "Il valore PAC è obbligatorio",
                invalid_type_error: "Inserisci un valore numerico valido",
            })
            .min(0, {
                message: "Il valore PAC non può essere negativo",
            }),

        minPercentage: z.coerce
            .number({
                required_error: "La percentuale minima è obbligatoria",
                invalid_type_error: "Inserisci un valore numerico valido",
            })
            .min(0, {
                message: "La percentuale minima non può essere negativa",
            })
            .max(100, {
                message: "La percentuale minima non può superare il 100%",
            }),

        maxPercentage: z.coerce
            .number({
                required_error: "La percentuale massima è obbligatoria",
                invalid_type_error: "Inserisci un valore numerico valido",
            })
            .min(0, {
                message: "La percentuale massima non può essere negativa",
            })
            .max(100, {
                message: "La percentuale massima non può superare il 100%",
            }),

        foodCostForKg: z.coerce
            .number({
                required_error: "Il costo alimentare è obbligatorio",
                invalid_type_error: "Inserisci un valore numerico valido",
            })
            .min(0, {
                message: "Il costo alimentare non può essere negativo",
            }),

        bilanciaSuLiquidi: z.boolean({
            required_error: "Questo campo è obbligatorio",
            invalid_type_error: "Il valore deve essere vero o falso",
        }),
    })
    .refine((data) => data.maxPercentage >= data.minPercentage, {
        message: "La percentuale massima deve essere maggiore o uguale alla percentuale minima",
        path: ["maxPercentage"],
    })

