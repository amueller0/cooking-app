export type NavBarItemProps = {
    path: string;
    icon: React.ReactNode;
};

function NavBarItem({ path, icon }: NavBarItemProps) {
    return (
        <a href={path} className="flex justify-center items-center p-3 text-4xl">
            {icon}
        </a>
    );
}

export default NavBarItem;
