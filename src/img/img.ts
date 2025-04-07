
import aracne from "./aracne.webp";
import aracne1_5 from "./aracne-1.5x.webp";
import aracne2 from "./aracne-2x.webp";
import aracnephobia_logo from "./aracnephobia-logo.webp";
import lettering from "./logo-lettering.webp";
import lettering_1_5 from "./logo-lettering.1_5x.webp";
import lettering_2 from "./logo-lettering.2x.webp";
import psychedelic_aracne from "./psychedelic_aracne.webp";
import psychedelic_planet from "./psychedelic_planet.webp";
import twp_vert from "./twp-vert.webp";
import twp_vert_1_5 from "./twp-vert.1_5x.webp";
import twp_vert_2 from "./twp-vert.2x.webp";
import about_animation_2 from "./about/animation.2x.webp";
import about_branding_2 from "./about/branding.2x.webp";
import about_cartoon_2 from "./about/cartoon.2x.webp";
import about_content_creator_2 from "./about/content-creator.2x.webp";
import about_digital_artist_2 from "./about/digital-artist.2x.webp";
import about_graphic_design_2 from "./about/graphic-design.2x.webp";
import about_illustration_2 from "./about/illustration.2x.webp";
import about_marketing_2 from "./about/marketing.2x.webp";
import about_storyboard_2 from "./about/storyboard.2x.webp";
import about_storytelling_2 from "./about/storytelling.2x.webp";
import about_uiux_2 from "./about/uiux.2x.webp";
import about_video_2 from "./about/video.2x.webp";
import about_web_design_2 from "./about/web-design.2x.webp";
import about_writer_2 from "./about/writer.2x.webp";
import navigator_blog from "./navigator/blog.webp";
import navigator_me from "./navigator/me.webp";
import navigator_portfolio from "./navigator/portfolio.webp";
import os_cursor from "./os/cursor.webp";
import os_folder from "./os/folder.png";
import os_folder_1_5 from "./os/folder.1.5x.png";
import os_folder_2 from "./os/folder.2x.png";
import os_pdf_logo_2 from "./os/pdf_logo.2x.webp";
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
    about: {
        animation: about_animation_2,
        branding: about_branding_2,
        cartoon: about_cartoon_2,
        content_creator: about_content_creator_2,
        digital_artist: about_digital_artist_2,
        graphic_design: about_graphic_design_2,
        illustration: about_illustration_2,
        marketing: about_marketing_2,
        storyboard: about_storyboard_2,
        storytelling: about_storytelling_2,
        uiux: about_uiux_2,
        video: about_video_2,
        web_design: about_web_design_2,
        writer: about_writer_2,
    } as ImageCollection,
    navigator: {
        blog: navigator_blog,
        me: navigator_me,
        portfolio: navigator_portfolio,
    } as ImageCollection,
    os: {
        cursor: os_cursor,
        folder: {
            src: os_folder,
            srcSet: getSrcSet([
                { src: os_folder, size: "1x" },
                { src: os_folder_1_5, size: "1.5x"},
                { src: os_folder_2, size: "2x"},
            ])
        },
        pdf_logo: os_pdf_logo_2,
    } as ImageCollection,
    social: {
        bsky,
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
    aracnephobia_logo: aracnephobia_logo,
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