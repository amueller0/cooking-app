function DishCarouselItem() {
    return (
        <div className="relative min-w-[200px]">
            <img
                src={`https://picsum.photos/200?random=${Math.random()}`}
                className="rounded-3xl -z-10"
            />

            {/* Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/50 to-black/80" />

            <div className="absolute bottom-0 m-2">
                <p className="font-light text-xl">Spaghetti Bolognese</p>
            </div>
        </div>
    );
}

export default DishCarouselItem;