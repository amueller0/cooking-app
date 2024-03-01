import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import { deleteRecipe } from "./actions";
import DeleteButton from "./DeleteButton";

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
        <>
            <div className="relative">
                <img className="mb-4 rounded-md" src={recipe.imageUrl} />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/75 z-10" />
            </div>

            <h1 className="text-3xl font-bold">{recipe.title}</h1>
            <div className="text-sm font-thin">
                Created on {recipe.createdAt.toDateString()}
            </div>

            <div className="mt-8 p-2 rounded-md bg-white/10">
                <h2 className="text-xl font-semibold">Ingredients</h2>
                <div
                    className="mt-2"
                    dangerouslySetInnerHTML={{
                        __html: recipe.ingredients.replace(/\n/g, "<br />")
                    }}
                />
            </div>
            <div className="mt-8 p-2 rounded-md bg-white/10">
                <h2 className="text-xl font-semibold">Instructions</h2>
                <div
                    className="mt-2"
                    dangerouslySetInnerHTML={{
                        __html: recipe.instructions.replace(/\n/g, "<br />")
                    }}
                />
            </div>

            <div className="h-[1px] my-12 bg-white/20" />

            <div className="flex justify-center w-full">
                <DeleteButton recipe={recipe} />
            </div>
        </>
    );
}
