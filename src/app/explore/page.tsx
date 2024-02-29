import DishCarousel from "@/components/DishCarousel";
import prisma from "@/lib/db";
import CreateButton from "./CreateButton";

export default async function ExplorePage() {
    const recipes = await prisma.recipe.findMany();

    return (
        <>
            <h1 className="text-4xl font-semibold">Explore</h1>
            <div className="text-md font-thin">Find new exiting recipes!</div>

            <DishCarousel title="Community Recipes" content={recipes} />

            <CreateButton />
        </>
    );
}
