
import aracne from "./aracne.webp";
import aracne1_5 from "./aracne-1.5x.webp";
import aracne2 from "./aracne-2x.webp";
import aracne_alt_2 from "./aracne-alt.2x.webp";
import aracnephobia_logo from "./aracnephobia-logo.webp";
import crt_noise from "./crt_noise.gif";
import estalot_logo from "./estalot-logo.webp";
import lettering from "./logo-lettering.webp";
import lettering_1_5 from "./logo-lettering.1_5x.webp";
import lettering_2 from "./logo-lettering.2x.webp";
import lettering_sq_black from "./logo-lettering-sq-black.webp";
import menu_divider from "./menu-divider.webp";
import menu_section_sections from "./menu-section-sections.webp";
import menu_section_social from "./menu-section-social.webp";
import planet_1 from "./planet-1.webp";
import psychedelic_aracne from "./psychedelic_aracne.webp";
import psychedelic_planet from "./psychedelic_planet.webp";
import twp_vert from "./twp-vert.webp";
import twp_vert_1_5 from "./twp-vert.1_5x.webp";
import twp_vert_2 from "./twp-vert.2x.webp";
import about_curtain_left from "./about/curtain-left.webp";
import about_curtain_left_2 from "./about/curtain-left.2x.webp";
import about_curtain_top from "./about/curtain-top.webp";
import about_estalot_vertical_logo from "./about/estalot-vertical-logo.webp";
import about_estalot_vertical_logo_2 from "./about/estalot-vertical-logo.2x.webp";
import about_estalot_horizontal_logo from "./about/estalot-horizontal-logo.webp";
import about_header_ae_logo from "./about/header-ae-logo.webp";
import about_header_motif from "./about/header-motif.png";
import about_am_3d_grid from "./about/about_me_3d_grid.webp";
import about_am_3d_grid_2 from "./about/about_me_3d_grid.2x.webp";
import about_sorry from "./about/sorry.webp";
import about_animation_2 from "./about/word-table/animation.2x.webp";
import about_branding_2 from "./about/word-table/branding.2x.webp";
import about_cartoon_2 from "./about/word-table/cartoon.2x.webp";
import about_comic_2 from "./about/word-table/comic.2x.webp";
import about_content_creator_2 from "./about/word-table/content-creator.2x.webp";
import about_digital_artist_2 from "./about/word-table/digital-artist.2x.webp";
import about_graphic_design_2 from "./about/word-table/graphic-design.2x.webp";
import about_illustration_2 from "./about/word-table/illustration.2x.webp";
import about_marketing_2 from "./about/word-table/marketing.2x.webp";
import about_motion_graphics_2 from "./about/word-table/motion-graphics.2x.png";
import about_storyboard_2 from "./about/word-table/storyboard.2x.webp";
import about_storytelling_2 from "./about/word-table/storytelling.2x.webp";
import about_uiux_2 from "./about/word-table/uiux.2x.webp";
import about_video_2 from "./about/word-table/video.2x.webp";
import about_web_design_2 from "./about/word-table/web-design.2x.webp";
import about_writer_2 from "./about/word-table/writer.2x.webp";
import navigator_blog from "./navigator/blog.webp";
import navigator_cv from "./navigator/cv.webp";
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
        curtain_left: {
            src: about_curtain_left,
            srcSet: getSrcSet([
                { src: about_curtain_left, size: "1x" },
                { src: about_curtain_left_2, size: "1.5x"},
                { src: about_curtain_left_2, size: "2x"},
            ])
        },
        curtain_top: about_curtain_top,
        estalot_vertical_logo: {
            src: about_estalot_vertical_logo,
            srcSet: getSrcSet([
                { src: about_estalot_vertical_logo, size: "1x" },
                { src: about_estalot_vertical_logo_2, size: "1.5x"},
                { src: about_estalot_vertical_logo_2, size: "2x"},
            ])
        },
        estalot_horizontal_logo: about_estalot_horizontal_logo,
        header_ae_logo: about_header_ae_logo,
        header_motif: about_header_motif,
        am_3d_grid: {
            src: about_am_3d_grid,
            srcSet: getSrcSet([
                { src: about_am_3d_grid, size: "1x" },
                { src: about_am_3d_grid_2, size: "1.5x"},
                { src: about_am_3d_grid_2, size: "2x"},
            ])
        },
        sorry: about_sorry,

        // <--- TODO: MOVE --->
        animation: about_animation_2,
        branding: about_branding_2,
        cartoon: about_cartoon_2,
        comic: about_comic_2,
        content_creator: about_content_creator_2,
        digital_artist: about_digital_artist_2,
        graphic_design: about_graphic_design_2,
        illustration: about_illustration_2,
        marketing: about_marketing_2,
        motion_graphics: about_motion_graphics_2,
        storyboard: about_storyboard_2,
        storytelling: about_storytelling_2,
        uiux: about_uiux_2,
        video: about_video_2,
        web_design: about_web_design_2,
        writer: about_writer_2,
    } as ImageCollection,
    navigator: {
        blog: navigator_blog,
        cv: navigator_cv,
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
    aracne_alt: aracne_alt_2,
    aracnephobia_logo: aracnephobia_logo,
    crt_noise: crt_noise,
    estalot_logo,
    lettering: {
        src: lettering,
        srcSet: getSrcSet([
            { src: lettering, size: "1x" },
            { src: lettering_1_5, size: "1.5x" },
            { src: lettering_2, size: "2x"},
        ])
    },
    lettering_sq_black: lettering_sq_black,
    menu_divider: menu_divider,
    menu_section_sections: menu_section_sections,
    menu_section_social: menu_section_social,
    planet_1: planet_1,
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