"use client";

import { IoMdHome } from "react-icons/io";
import { MdAccountCircle, MdExplore, MdForum } from "react-icons/md";
import NavBarItem from "./NavBarItem";
import { AiOutlinePlusCircle } from "react-icons/ai";

function NavBar() {
    return (
        <div className="sticky bottom-0 left-0 w-full grid grid-flow-col bg-black drop-shadow-lg z-50">
            <NavBarItem path="/" icon={IoMdHome} />
            <NavBarItem path="/explore" icon={MdExplore} />
            <NavBarItem path="/recipe/create" icon={AiOutlinePlusCircle} />
            <NavBarItem path="/forum" icon={MdForum} />
            <NavBarItem path="/account" icon={MdAccountCircle} />
        </div>
    );
}

export default NavBar;
