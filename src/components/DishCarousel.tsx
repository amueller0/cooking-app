import type { Recipe } from "@prisma/client";
import DishCarouselItem from "./DishCarouselItem";
import Link from "next/link";

export type DishCarouselProps = {
    title: string;
    content: Recipe[];
};

function DishCarousel({ title, content }: DishCarouselProps) {
    return (
        <div className="mt-8 p-2 rounded-xl bg-white/10">
            <h2 className="text-xl text-white/85 font-medium mb-4">{title}</h2>

            <div className="flex flex-row gap-4 overflow-auto">
                {content.map((recipe, index) => (
                    <Link href={`/recipe/${recipe.id}`} key={index}>
                        <DishCarouselItem title={recipe.title} />
                    </Link>
                ))}

                {content.length === 0 && (
                    <div className="text-white/50">No recipes found.</div>
                )}
            </div>
        </div>
    );
}

export default DishCarousel;
