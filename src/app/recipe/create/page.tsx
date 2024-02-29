import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import CreateButton from "./CreateButton";

export default function CreateRecipePage() {
    async function createRecipe(formData: FormData) {
        "use server";

        const rawFormData = {
            title: formData.get("title") as string,
            ingredients: formData.get("ingredients") as string,
            instructions: formData.get("instructions") as string
        };

        const recipe = await prisma.recipe.create({
            data: {
                title: rawFormData.title,
                ingredients: rawFormData.ingredients,
                instructions: rawFormData.instructions
            }
        });

        redirect(`/recipe/${recipe.id}`);
    }

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold text-white">Create a Recipe</h1>
            <div className="text-md font-thin text-white">
                Publish your favorite recipes!
            </div>

            <form className="flex flex-col gap-4 mt-8" action={createRecipe}>
                <input
                    className="p-2 rounded-md bg-white/10 border-white/50 border-2"
                    name="title"
                    type="text"
                    placeholder="Title"
                />

                <textarea
                    className="p-2 rounded-md resize-y bg-white/10 border-white/50 border-2"
                    name="ingredients"
                    rows={6}
                    placeholder="Ingredients"
                />
                <textarea
                    className="p-2 rounded-md resize-y bg-white/10 border-white/50 border-2"
                    name="instructions"
                    rows={12}
                    placeholder="Instructions"
                />

                <CreateButton />
            </form>
        </div>
    );
}
