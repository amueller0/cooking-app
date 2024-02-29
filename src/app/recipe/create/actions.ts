"use server";

import prisma from "@/lib/db";
import { CreateRecipeSchema } from "./schema";

export async function createRecipe(previousState: unknown, formData: FormData) {
    const result = CreateRecipeSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return { error: result.error.format() };
    }

    const recipe = await prisma.recipe.create({
        data: {
            title: result.data.title,
            ingredients: result.data.ingredients,
            instructions: result.data.instructions
        }
    });

    if (result.success) {
        return { data: recipe };
    }
}
