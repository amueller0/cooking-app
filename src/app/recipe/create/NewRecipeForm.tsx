"use client";

import { useFormState } from "react-dom";
import CreateButton from "./CreateButton";
import { createRecipe } from "./actions";
import { redirect } from "next/navigation";
import { ChangeEvent, useCallback, useState } from "react";

function NewRecipeForm() {
    const [state, formAction] = useFormState(createRecipe, null);
    const [file, setFile] = useState<File | null>(null);
    const [data, setData] = useState<{ image: string | null }>({ image: null });

    const onChangePicture = useCallback(() => {
        (event: ChangeEvent<HTMLInputElement>) => {
            const file = event.currentTarget.files && event.currentTarget.files[0];

            if (file === null) {
                return;
            }

            setFile(file);
            console.log(file);
            if (file.size / 1024 / 1024 > 4.5) {
                alert("File size too big (max 4.5MB)");
                return;
            }
            const reader = new FileReader();
            reader.addEventListener("load", loadEvent => {
                setData(prev => ({ ...prev, image: loadEvent.target?.result as string }));
            });
            reader.readAsDataURL(file);
        };
    }, []);

    if (state?.data) {
        redirect(`/recipe/${state.data.id}`);
    }

    return (
        <form className="flex flex-col gap-4 mt-8" action={formAction}>
            <input type="file" name="image" onChange={onChangePicture} />

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
