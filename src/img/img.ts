
import aracne from "./aracne.webp";
import aracne1_5 from "./aracne-1.5x.webp";
import aracne2 from "./aracne-2x.webp";
import bsky from "./social/bsky.webp";
import twitter from "./social/formerly-known-as-twitter.webp";
import instagram from "./social/instagram.webp";
import linkedin from "./social/linkedin.webp";
import tiktok from "./social/tiktok.webp";
import twitch from "./social/twitch.webp";
import youtube from "./social/youtube.webp";

export type ImageSrc = string | ResponsiveImageSrc;

export type ResponsiveImageSrc = {
    src: string;
    srcSet: string;
    alt?: string;
}

type ImageCollection = {
    [name: string]: ImageSrc;
}

export const IMG = {
    social: {
        bsky: bsky,
        twitter,
        instagram,
        linkedin,
        tiktok,
        twitch,
        youtube,
    } as ImageCollection,
    aracne: {
        src: aracne,
        srcSet: getSrcSet([
            { src: aracne },
            { src: aracne1_5, size: "1.5x"},
            { src: aracne2, size: "2x"},
        ])
    },
    psychedelic_planet: {
        src: ""
    }
}

function getSrcSet (imgs: {src: string, size?: string}[]) : string {
    var strSet = "";

    for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i];
        strSet += img.src;

        if (img.size) {
            strSet += " ";
            strSet += img.size;
        }
        strSet + ", "
    }
    
    return strSet;
}