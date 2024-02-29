import Link from "next/link";
import { FaSearch } from "react-icons/fa";

function Header() {
    return (
        <div className="w-full h-12 bg-slate-800 sticky top-0">
            <div className="h-full flex justify-between items-center flex-row px-2">
                <Link href="/">
                    <h1 className="text-xl text-white font-extralight">Cooking App</h1>
                </Link>
                <Link href="/search">
                    <FaSearch className="text-xl" />
                </Link>
            </div>
        </div>
    );
}

export default Header;
