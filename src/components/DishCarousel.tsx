import type { Recipe } from "@prisma/client";
import DishCarouselItem from "./DishCarouselItem";

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
                    <a href={`/recipe/${recipe.id}`} key={index}>
                        <DishCarouselItem title={recipe.title} />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default DishCarousel;
