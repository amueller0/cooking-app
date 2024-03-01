"use server";

import prisma from "@/lib/db";
import { CreateRecipeSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { put } from "@vercel/blob";
import { customAlphabet } from "nanoid";

export async function createRecipe(previousState: unknown, formData: FormData) {
    const result = CreateRecipeSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return { error: result.error.format() };
    }

    const nanoid = customAlphabet(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        7
    );
    const blob = await put(nanoid(), result.data.image as File, {
        contentType: (result.data.image as File).type,
        access: "public"
    });

    const recipe = await prisma.recipe.create({
        data: {
            imageUrl: blob.url,
            title: result.data.title,
            ingredients: result.data.ingredients,
            instructions: result.data.instructions
        }
    });

    revalidatePath("/");
    revalidatePath("/explore");

    if (result.success) {
        return { data: recipe };
    }
}
