import { HiPlusCircle } from "react-icons/hi";

function CreateButton() {
    return (
        <a href="/recipe/create">
            <div className="flex justify-center items-center bg-white/20 p-2 rounded-full mt-12">
                <div className="flex gap-2 items-center text-xl">
                    <HiPlusCircle /> Create Recipe
                </div>
            </div>
        </a>
    );
}

export default CreateButton;
