import { ScrollArea } from '@mantine/core';
import React, { useRef, useState } from 'react';
import { $cl } from 'utils';
import styles from './section.module.scss';
import SiteImage from 'components/SiteImage';
import { IMG } from 'assets/img/img';
import Window from './Window';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';
import SVG from 'assets/img/svg';
import { Typewriter } from 'react-simple-typewriter';
import gsap from 'gsap';

import video_morgue from "assets/portfolio2/Reel/La Morgue de Aracne.mp4";
import video_rastreadores from "assets/video/rastreadores.mp4";
import ReactPlayer from 'react-player';
import VideoWindow from './VideoWindow';
import en_US from 'localization/en_US';
import { useMediaQuery } from '@mantine/hooks';

export interface SkillsProps {
    
}

function Skills (props: SkillsProps) {
    const isPhone = useMediaQuery('(min-width: 50rem)') === false;
    
    const [loc, setLoc] = useState(en_US);

    return (
        <ScrollArea
            classNames={{
                root: styles.section,
                scrollbar: styles.scrollbar,
                thumb: styles.thumb
            }}
            scrollbars='y'
            offsetScrollbars='y'
            type='auto'
            scrollbarSize={isPhone ? "1em" : "4em"}
        >

        <div className={$cl(styles.sectionContent, styles.skills)}>
            
        <div className={styles.header}>
            <SiteImage
                className={styles.tablet} image={IMG.about.skills_digital_artist}
            />
            <SiteImage
                className={styles.phone} image={IMG.about.skills_digital_artist_phone}
            />
        </div>

        <div className={$cl(styles.g2, styles.skillsText)}>
            <div className={styles.left}>
                <Window className={styles.win} title="skills.exe">
                    <loc.about.skills.skills className={styles.txtContainer} />
                </Window>
                <SiteImage image={IMG.about.mental_toxicity} />
            </div>
            <div className={styles.right} style={{
                backgroundImage: `url(${IMG.about.anim_bg1})`
            }}>
                <SiteImage image={IMG.about.guapisima} />
            </div>
        </div>

        <Window
            className={$cl(styles.skillWindow, styles.artSkills)}
            title='art.skills'
        >
            <div className={styles.artContainer}>
                <_ArtSkill
                    title="Concept art"
                    icon={<SVG.about.skills.conceptArt />}
                />
                <_ArtSkill
                    title="Digital painting"
                    icon={<SVG.about.skills.digitalPainting />}
                />
                <_ArtSkill
                    className={styles.comicArtist}
                    title="Comic artist"
                    icon={<SVG.about.skills.comicArtist />}
                />
                <_ArtSkill
                    className={styles.tattooDesign}
                    title="Tattoo design"
                    icon={<SVG.about.skills.tattooDesign />}
                />
            </div>
        </Window>

        <div className={$cl(styles.g2, styles.videos)}>
            <div className={styles.left}>
                <VideoWindow
                    className={styles.vid}
                    title="move.on"
                    src={video_morgue}
                />
            </div>
            <div className={styles.right}>
                <div className={styles.tripleWord}>
                    <SVG.about.wordVideo className={styles.word1} />
                    <SVG.about.wordVideo className={styles.word2} />
                    <SVG.about.wordVideo className={styles.word3} />
                </div>
                <VideoWindow
                    className={styles.vid}
                    title="move.on"
                    src={video_rastreadores}
                    nodisc
                />
                <div className={styles.sector07}>
                    <SiteImage image={IMG.about.sector_07} />
                </div>
            </div>
        </div>

        <Window
            className={$cl(styles.skillWindow, styles.videoSkills)}
            title='video.skills'
        >
            <div className={styles.artContainer}>
                <_ArtSkill
                    title="Video creator"
                    className={styles.videoCreator}
                    icon={<SVG.about.skills.videoCreator />}
                />
                <_ArtSkill
                    title="Video editor"
                    className={styles.videoEditor}
                    icon={<SVG.about.skills.videoEditor />}
                />
                <_ArtSkill
                    title="Motion graphics"
                    icon={<SVG.about.skills.motionGraphics />}
                />
                <_ArtSkill
                    title="2D animation"
                    className={styles._2dAnimation}
                    icon={<SVG.about.skills._2dAnimation />}
                />
            </div>
        </Window>

        <div className={styles.minigame}>
            TODO
        </div>

        <Window
            className={$cl(styles.skillWindow, styles.devSkills)}
            title='dev.skills'
        >
            <div className={styles.artContainer}>
                <_ArtSkill
                    title="Videogame dev"
                    icon={<SVG.about.skills.conceptArt />}
                />
                <_ArtSkill
                    title="Web design"
                    icon={<SVG.about.skills.conceptArt />}
                />
                <_ArtSkill
                    title="UX/UI"
                    icon={<SVG.about.skills.conceptArt />}
                />
                <_ArtSkill
                    title="Scrum & agile"
                    icon={<SVG.about.skills.conceptArt />}
                />
            </div>
        </Window>

        <div className={styles.logos}>
            <SiteImage className={styles.logo} image={IMG.aracnephobia_logo} />
            <SiteImage className={styles.logo} image={IMG.about.logo_morgue} />
            <SiteImage className={styles.logo} image={IMG.about.logo_doppie} />
        </div>

        <Window
            className={$cl(styles.skillWindow, styles.designSkills)}
            title='design.skills'
        >
            <div className={styles.artContainer}>
                <_ArtSkill
                    title="Graphic design"
                    icon={<SVG.about.skills.conceptArt />}
                />
                <_ArtSkill
                    title="Logo & Branding"
                    icon={<SVG.about.skills.conceptArt />}
                />
                <_ArtSkill
                    title="Photography"
                    icon={<SVG.about.skills.conceptArt />}
                />
            </div>
        </Window>

        <div className={$cl(styles.g2, styles.photo1)}>
            <div className={styles.left}>
                <SiteImage image={IMG.about.photo1} />
            </div>
            <div className={styles.right}>
                <ChromaticAberrationImage
                    image={IMG.about.design_design_design_design}
                    horizFlicker={12}
                    duration={10}
                    opacity={0.3}
                />
            </div>
        </div>

        <Window
            className={$cl(styles.skillWindow, styles.adSkills)}
            title='advertising.skills'
        >
            <div className={styles.artContainer}>
                <_ArtSkill
                    title="Marketing"
                    icon={<SVG.about.skills.conceptArt />}
                />
                <_ArtSkill
                    title="Influencer Marketing"
                    icon={<SVG.about.skills.conceptArt />}
                />
                <_ArtSkill
                    title="Ads analytics"
                    icon={<SVG.about.skills.conceptArt />}
                />
            </div>
        </Window>

        <SiteImage
            className={styles.family}
            image={IMG.art.aracne_family}
        />

        <Window
            className={$cl(styles.skillWindow, styles.readMeSkills)}
            title='read.me'
        >
            <div className={styles.artContainer}>
                <_ArtSkill
                    title="Storytelling"
                    icon={<SVG.about.skills.conceptArt />}
                />
                <_ArtSkill
                    title="Copy writer"
                    icon={<SVG.about.skills.conceptArt />}
                />
                <_ArtSkill
                    title="Script writer"
                    icon={<SVG.about.skills.conceptArt />}
                />
            </div>
        </Window>

        <div className={$cl(styles.g2, styles.footer)}>
            <div className={styles.left}>
                <SiteImage image={IMG.about.ornaments3} />
            </div>
            <div className={styles.right}>
                <SiteImage image={IMG.about.skills_pic1} />
            </div>
        </div>
        
        </div>

        </ScrollArea>
    );
}

interface _ArtSkillProps {
    title: string;
    icon: React.ReactElement;
    className?: string;
}

function _ArtSkill ({
    title,
    icon,
    className,
}: _ArtSkillProps) {

    return (
        <div className={$cl(styles.artSkill, className)}>
            <div className={styles.nameContainer}>
                <span>{title}</span>
            </div>
            <div className={styles.iconContainer}>
                {icon}
            </div>
        </div>
    );
}


export default Skills;
