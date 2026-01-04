import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Mandy Saada - Guide Voyage Algérie",
    description: "Découvrez l'Algérie avec Mandy Saada. Guide de voyage exclusif, conseils et bons plans.",
    icons: {
        icon: "/mandy_memoji.webp",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="scroll-smooth">
            <body className={`${poppins.variable} antialiased bg-white text-gray-900 selection:bg-gold-500/30 selection:text-gold-950 font-sans`}>
                {children}
            </body>
        </html>
    );
}
