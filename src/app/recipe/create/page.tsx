import NewRecipeForm from "./NewRecipeForm";

export default function CreateRecipePage() {
    return (
        <>
            <h1 className="text-4xl font-bold text-white">Create a Recipe</h1>
            <div className="text-md font-thin text-white">
                Publish your favorite recipes!
            </div>

            <NewRecipeForm />
        </>
    );
}
