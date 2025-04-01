
import aracne from "./aracne.webp";
import aracne1_5 from "./aracne-1.5x.webp";
import aracne2 from "./aracne-2x.webp";
import lettering from "./logo-lettering.webp";
import lettering_1_5 from "./logo-lettering.1_5x.webp";
import lettering_2 from "./logo-lettering.2x.webp";
import psychedelic_aracne from "./psychedelic_aracne.webp";
import psychedelic_planet from "./psychedelic_planet.webp";
import twp_vert from "./twp-vert.webp";
import twp_vert_1_5 from "./twp-vert.1_5x.webp";
import twp_vert_2 from "./twp-vert.2x.webp";
import navigator_blog from "./navigator/blog.webp";
import navigator_me from "./navigator/me.webp";
import navigator_portfolio from "./navigator/portfolio.webp";
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
    navigator: {
        blog: navigator_blog,
        me: navigator_me,
        portfolio: navigator_portfolio,
    } as ImageCollection,
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
            { src: aracne, size: "1x" },
            { src: aracne1_5, size: "1.5x"},
            { src: aracne2, size: "2x"},
        ])
    },
    lettering: {
        src: lettering,
        srcSet: getSrcSet([
            { src: lettering, size: "1x" },
            { src: lettering_1_5, size: "1.5x" },
            { src: lettering_2, size: "2x"},
        ])
    },
    psychedelic_aracne: psychedelic_aracne,
    psychedelic_planet: psychedelic_planet,
    twp_vert: {
        src: twp_vert,
        srcSet: getSrcSet([
            { src: twp_vert, size: "1x" },
            { src: twp_vert_1_5, size: "1.5x" },
            { src: twp_vert_2, size: "2x"},
        ])
    }
}

function getSrcSet (imgs: {src: string, size: string}[]) : string {
    var strSet = "";

    for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i];
        strSet += img.src + " " + img.size + ", ";
    }
    
    return strSet;
}