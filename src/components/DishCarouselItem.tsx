export type DishCarouselItemProps = {
    title: string;
    imageUrl: string;
};

function DishCarouselItem({ title, imageUrl }: DishCarouselItemProps) {
    return (
        <div className="relative min-w-[200px]">
            <img
                src={imageUrl}
                alt={title}
                className="w-[200px] h-[200px] object-cover rounded-3xl -z-10"
            />

            {/* Gradient */}
            <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-b from-transparent via-black/50 to-black/80" />

            <div className="absolute bottom-0 m-2">
                <p className="font-normal text-xl">{title}</p>
            </div>
        </div>
    );
}

export default DishCarouselItem;
