import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles.scss";
import { $cl } from "src/utils";
import { amaticSc, creepster, jollyLodger, metalMania, wonderNight } from "src/fonts/google_fonts";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "La Morgue de Aracnephobia",
    description: "Descubre los misterios de la morgue...",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={fontVariables()}>
            <head>
                <link
                    id="favicon-16"
                    rel="icon"
                    href="img/favicon_16.ico"
                    type='image/x-icon'
                    sizes="16x16"
                />
                <link
                    id="favicon-32"
                    rel="icon"
                    href="img/favicon_32.ico"
                    type='image/x-icon'
                    sizes="32x32"
                />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}

function fontVariables () : string {
    return $cl(
        metalMania.variable,
        creepster.variable,
        jollyLodger.variable,
        amaticSc.variable,
        wonderNight.variable,
    )
}