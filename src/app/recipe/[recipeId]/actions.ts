"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export async function deleteRecipe(id: string) {
    await prisma.recipe.delete({
        where: {
            id
        }
    });

    redirect("/explore");
}
