function CreateRecipePage() {
    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold text-white">Create a Recipe</h1>
            <div className="text-md font-thin text-white">
                Publish your favorite recipes!
            </div>

            <form className="flex flex-col gap-4 mt-8">
                <input
                    className="p-2 rounded-md bg-white/10 border-white/50 border-2"
                    type="text"
                    placeholder="Title"
                />

                <textarea
                    className="p-2 rounded-md resize-y bg-white/10 border-white/50 border-2"
                    rows={6}
                    placeholder="Ingredients"
                />
                <textarea
                    className="p-2 rounded-md resize-y bg-white/10 border-white/50 border-2"
                    rows={12}
                    placeholder="Instructions"
                />

                <button
                    className="mt-4 p-2 rounded-md bg-white/10 border-white/50 border-2"
                    type="submit"
                >
                    Create
                </button>
            </form>
        </div>
    );
}

export default CreateRecipePage;
