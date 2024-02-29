import type { Recipe } from "@prisma/client";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

export type SearchResultItemProps = {
    recipe: Recipe;
};

function SearchResultItem({ recipe }: SearchResultItemProps) {
    return (
        <Link href={`/recipe/${recipe.id}`}>
            <div className="grid grid-cols-[auto_min-content] items-center bg-white/20 p-2 rounded-md">
                <div>{recipe.title}</div>
                <IoChevronForwardOutline />
            </div>
        </Link>
    );
}

export default SearchResultItem;
