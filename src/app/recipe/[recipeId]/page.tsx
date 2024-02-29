import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export type RecipePageProps = {
    params: {
        recipeId: string;
    };
};

export default async function RecipePage({ params }: RecipePageProps) {
    const recipe = await prisma.recipe.findUnique({
        where: {
            id: params.recipeId
        }
    });
    if (recipe === null) {
        notFound();
    }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">{recipe.title}</h1>
            <div className="text-sm font-thin">
                Created on {recipe.createdAt.toDateString()}
            </div>

            <div className="mt-8 p-2 rounded-md bg-white/10">
                <h2 className="text-xl font-semibold">Ingredients</h2>
                <div className="mt-2">{recipe.ingredients}</div>
            </div>
            <div className="mt-8 p-2 rounded-md bg-white/10">
                <h2 className="text-xl font-semibold">Instructions</h2>
                <div className="mt-2">{recipe.instructions}</div>
            </div>
        </div>
    );
}
