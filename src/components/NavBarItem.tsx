"use client";

import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

export type NavBarItemProps = {
    path: string;
    icon: IconType;
};

function NavBarItem({ path, icon }: NavBarItemProps) {
    const currentPath = "/" + usePathname().split("/")[1];
    const isHighlighted = currentPath === path;

    return (
        <a href={path} className="flex justify-center items-center p-3 text-4xl">
            {icon({ fill: isHighlighted ? "#cc0000" : "#ffffff" })}
        </a>
    );
}

export default NavBarItem;
