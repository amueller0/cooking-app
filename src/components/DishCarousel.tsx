import DishCarouselItem from "./DishCarouselItem";

export type DishCarouselProps = {
    title: string;
};

function DishCarousel({ title }: DishCarouselProps) {
    return (
        <div className="mt-8">
            <h2 className="text-xl text-white/75 font-medium mb-2">{title}</h2>

            <div className="flex flex-row gap-4 overflow-auto">
                {[...Array(3)].map((_, index) => (
                    <DishCarouselItem key={index} />
                ))}
            </div>
        </div>
    );
}

export default DishCarousel;
