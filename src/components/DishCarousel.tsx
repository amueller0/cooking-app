import type { Recipe } from "@prisma/client";
import DishCarouselItem from "./DishCarouselItem";
import Link from "next/link";

export type DishCarouselProps = {
    title: string;
    content: Recipe[];
};

function DishCarousel({ title, content }: DishCarouselProps) {
    return (
        <div className="mt-8">
            <h2 className="text-xl text-white/75 font-medium mb-2">{title}</h2>

            <div className="flex flex-row gap-4 overflow-auto">
                {content.map((recipe, index) => (
                    <Link href={`/recipe/${recipe.id}`} key={index}>
                        <DishCarouselItem title={recipe.title} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default DishCarousel;
