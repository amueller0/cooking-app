import { z } from "zod";

export const CreateRecipeSchema = z.object({
    title: z.string().min(1, "Required").max(64, "Too long"),
    ingredients: z
        .string()
        .min(1, "Required")
        .max(2 ** 12, "Too long"),
    instructions: z
        .string()
        .min(1, "Required")
        .max(2 ** 16, "Too long")
});
