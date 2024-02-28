import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopNotSupported from "@/components/DesktopNotSupported";
import cn from "@/utils/cn";
import NavBar from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Cooking App",
    description: "Learn how to cook."
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "relative w-screen h-screen")}>
                <div>
                    <div className="hidden lg:block h-full">
                        <DesktopNotSupported />
                    </div>
                    <div className="block lg:hidden h-full">
                        {children}

                        <NavBar />
                    </div>
                </div>

                <Analytics />
            </body>
        </html>
    );
}
