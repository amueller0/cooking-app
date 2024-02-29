"use client";

import { useState } from "react";
import { searchRecipes } from "./actions";
import type { Recipe } from "@prisma/client";
import SearchResultItem from "./SearchResultItem";

export default function SearchPage() {
    const [results, setResults] = useState<Recipe[]>();

    return (
        <>
            <input
                className="w-full p-1 rounded-md bg-white/10 border-white/50 border-2"
                type="search"
                placeholder="Search"
                onChange={async event => {
                    setResults(await searchRecipes(event.currentTarget.value));
                }}
                autoFocus
            />

            <div className="mt-8 flex flex-col gap-2">
                {results?.map(recipe => (
                    <SearchResultItem key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </>
    );
}
