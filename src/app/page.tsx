import DishCarousel from "@/components/DishCarousel";
import { MdAccountCircle } from "react-icons/md";
import prisma from "@/lib/db";

export default async function Home() {
    const recipes = await prisma.recipe.findMany();

    return (
        <>
            <div className="flex flex-row items-center gap-2 mt-2 mb-16 text-3xl">
                <MdAccountCircle />
                <span className="font-semibold">Hello User!</span>
            </div>

            <DishCarousel title="Recently Cooked" content={recipes} />
            <DishCarousel title="Currently Trending" content={recipes} />
        </>
    );
}
