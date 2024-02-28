import DishCarousel from "@/components/DishCarousel";
import { MdAccountCircle } from "react-icons/md";

export default function Home() {
    return (
        <main className="p-4">
            <h1 className="text-xl text-white/75">Cooking App</h1>
            <div className="flex flex-row items-center gap-2 mt-2 mb-16 text-3xl">
                <MdAccountCircle />
                <span className="font-semibold">Hello User!</span>
            </div>

            <DishCarousel title="Recently Cooked" />
            <DishCarousel title="Currently Trending" />
            <DishCarousel title="Currently Trending" />
            <DishCarousel title="Currently Trending" />
            <DishCarousel title="Currently Trending" />
        </main>
    );
}
