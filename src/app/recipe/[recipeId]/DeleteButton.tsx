"use client";

import type { Recipe } from "@prisma/client";
import { deleteRecipe } from "./actions";

export type DeleteButtonProps = {
    recipe: Recipe;
};

function DeleteButton({ recipe }: DeleteButtonProps) {
    return (
        <button
            className="bg-red-900 px-6 py-2 rounded-md"
            onClick={async () => {
                const verification = window.confirm(
                    "Do you really want to delete this recipe?"
                );
                if (!verification) {
                    return;
                }

                await deleteRecipe(recipe.id);
            }}
        >
            Delete Recipe
        </button>
    );
}

export default DeleteButton;
