"use client";

import { IoIosSearch, IoMdHome } from "react-icons/io";
import { MdAccountCircle, MdExplore, MdForum } from "react-icons/md";
import NavBarItem from "./NavBarItem";

function NavBar() {
    return (
        <div className="fixed bottom-0 left-0 w-full grid grid-cols-5 bg-black drop-shadow-lg">
            <NavBarItem path="/" icon={IoMdHome} />
            <NavBarItem path="/search" icon={IoIosSearch} />
            <NavBarItem path="/explore" icon={MdExplore} />
            <NavBarItem path="/forum" icon={MdForum} />
            <NavBarItem path="/account" icon={MdAccountCircle} />
        </div>
    );
}

export default NavBar;
