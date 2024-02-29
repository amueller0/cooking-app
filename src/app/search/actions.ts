"use server";

import prisma from "@/lib/db";

export async function searchRecipes(searchTerm: string) {
    const recipes = await prisma.recipe.findMany({
        where: {
            title: {
                contains: searchTerm,
                mode: "insensitive"
            }
        }
    });

    return recipes;
}
