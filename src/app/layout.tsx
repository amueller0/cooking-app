import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopNotSupported from "@/components/DesktopNotSupported";
import cn from "@/utils/cn";
import NavBar from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Cooking App",
    description: "Learn how to cook.",
    manifest: "/manifest.json"
};

export const viewport: Viewport = {
    themeColor: "#cc0000"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "relative w-screen h-screen")}>
                <div className="hidden lg:block h-full">
                    <DesktopNotSupported />
                </div>
                <div className="block lg:hidden h-full">
                    <main className="p-4">{children}</main>

                    <NavBar />
                </div>

                <Analytics />
            </body>
        </html>
    );
}
