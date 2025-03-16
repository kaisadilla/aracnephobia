import localFont from 'next/font/local';
import { Amatic_SC, Creepster, Jolly_Lodger, Metal_Mania } from "next/font/google";

export const metalMania = Metal_Mania({
    weight: ['400'],
    subsets: ['latin', 'latin-ext'],
    variable: "--font-metal-mania",
});

export const creepster = Creepster({
    weight: ['400'],
    subsets: ['latin'],
    variable: "--font-creepster",
})

export const jollyLodger = Jolly_Lodger({
    weight: ['400'],
    subsets: ['latin', 'latin-ext'],
    variable: "--font-jolly-lodger",
})

export const amaticSc = Amatic_SC({
    weight: ['400', '700'],
    subsets: ['latin', 'latin-ext'],
    variable: "--font-amatic-sc",
})

export const wonderNight = localFont({
    src: './Wonder Night.ttf',
    weight: '400',
    style: 'normal',
    variable: '--font-wonder-night'
})