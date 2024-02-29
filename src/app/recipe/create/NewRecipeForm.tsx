"use client";

import { useFormState } from "react-dom";
import CreateButton from "./CreateButton";
import { createRecipe } from "./actions";
import { redirect } from "next/navigation";

function NewRecipeForm() {
    const [state, formAction] = useFormState(createRecipe, null);

    if (state?.data) {
        redirect(`/recipe/${state.data.id}`);
    }

    return (
        <form className="flex flex-col gap-4 mt-8" action={formAction}>
            <input
                className="p-2 rounded-md bg-white/10 border-white/50 border-2"
                name="title"
                type="text"
                placeholder="Title"
                required
            />

            <textarea
                className="p-2 rounded-md resize-y bg-white/10 border-white/50 border-2"
                name="ingredients"
                rows={6}
                placeholder="Ingredients"
                required
            />
            <textarea
                className="p-2 rounded-md resize-y bg-white/10 border-white/50 border-2"
                name="instructions"
                rows={12}
                placeholder="Instructions"
                required
            />

            <CreateButton />
        </form>
    );
}

export default NewRecipeForm;
