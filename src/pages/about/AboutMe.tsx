import React, { useState } from 'react';
import styles from './section.module.scss';
import { $cl, randomInt } from 'utils';
import SiteImage from 'components/SiteImage';
import { IMG } from 'assets/img/img';
import Window from './Window';
import WordTable from 'pages/about2/WordTable';
import Word from 'pages/about2/Word';
import { makeRect } from 'types';
import SVG from 'assets/img/svg';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';
import { ScrollArea } from '@mantine/core';
import { DndContext, DragEndEvent, useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import MutableJapaneseChar from './MutableJapaneseChar';
import en_US from 'localization/en_US';
import { Typewriter } from 'react-simple-typewriter';
import SkillCell from './SkillCell';
import FeatureCell from './FeatureCell';
import { useMediaQuery } from '@mantine/hooks';
import { EnterByScalingUp, EnterFromAnimation } from './animations';

const KATAKANA_CP_START = 0x30a0;
const KATAKANA_CP_END = 0x30ff;
const KANJI_CP_START = 0x4e00;
const KANJI_CP_END = 0x9faf;

export interface AboutMeProps {
    
}

function AboutMe (props: AboutMeProps) {
    const isPhone = useMediaQuery('(min-width: 50rem)') === false;

    const [loc, setLoc] = useState(en_US);
    const [currentKanji, setCurrentKanji] = useState("新世紀エヴァンゲリオン");
    const [currentPlanet, setCurrentPlanet] = useState(randomInt(3));

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

        <div className={$cl(styles.sectionContent, styles.aboutMe)}>
            <SiteImage
                className={$cl(styles.bg, styles.bgGrid)}
                image={IMG.about.am_3d_grid}
            />
            <EnterByScalingUp className={styles.aracneIntro}>
                <div className={styles.portrait}>
                    <SiteImage
                        className={styles.regular}
                        image={IMG.aracne}
                    />
                    <SiteImage
                        className={styles.alt}
                        image={IMG.aracne_alt}
                    />
                </div>
                <SiteImage
                    className={styles.sorry}
                    image={IMG.about.sorry}
                />
            </EnterByScalingUp>
            <div className={styles.header}>
                <SiteImage
                    className={styles.tablet} image={IMG.about.artist_designer}
                />
                <SiteImage
                    className={styles.phone} image={IMG.about.artist_designer_phone}
                />
            </div>
            <div className={$cl(styles.g2, styles.bio)}>
                <EnterFromAnimation
                    className={styles.left}
                    from='right'
                >
                    <Window  title="bio.exe">
                        <loc.about.about_me.bio className={styles.txtContainer} />
                    </Window>
                </EnterFromAnimation>
                <EnterFromAnimation
                    className={styles.right}
                    from='left'
                    style={{backgroundImage: `url(${IMG.about.anim_bg1})`}}
                >
                    <SiteImage image={IMG.about.aracne_photo1} />
                </EnterFromAnimation>
            </div>
            <div className={$cl(styles.g2, styles.collage1)}>
                <EnterFromAnimation from='left' className={styles.left}>
                    <Window
                        className={$cl(styles.skillWindow, styles.likes)}
                        title='likes.me'
                    >
                        <div className={styles.featureContainer}>
                            <FeatureCell
                                icon={<SiteImage image={IMG.about.me.musicals} />}
                                name="Animated musicals"
                            />
                            <FeatureCell
                                icon={<SiteImage image={IMG.about.me.games} />}
                                name="Video games"
                            />
                            <FeatureCell
                                icon={<SiteImage image={IMG.about.me.arts} />}
                                name="Audiovisual arts"
                            />
                            <FeatureCell
                                icon={<SiteImage image={IMG.about.me.horror} />}
                                name="Horror movies"
                                bloody
                            />
                            <FeatureCell
                                icon={<SiteImage image={IMG.about.me.rupaul} />}
                                name="Rupaul's drag race"
                            />
                            <FeatureCell
                                icon={<SiteImage image={IMG.about.me.cats} />}
                                name="Lovely cats"
                            />
                            <FeatureCell
                                icon={<SiteImage image={IMG.about.me.literature} />}
                                name="Comics & literature"
                            />
                            <FeatureCell
                                icon={<SiteImage image={IMG.about.me.scifi} />}
                                name="Sci-fi"
                            />
                        </div>
                    </Window>
                    <div className={styles.socialMediaContainer}>
                        <Window
                            className={styles.skillWindow}
                            title="Social.media"
                        >
                            <div className={styles.featureContainer}>
                                <FeatureCell
                                    icon={<SVG.socialMedia.youtube />}
                                    name="YouTube"
                                    href="https://www.youtube.com/@LaMorguedeAracnePhobia"
                                />
                                <FeatureCell
                                    icon={<SVG.socialMedia.twitch />}
                                    name="Twitch"
                                    href="https://www.twitch.tv/aracnephobia"
                                />
                                <FeatureCell
                                    icon={<SVG.socialMedia.instagram />}
                                    name="Instagram"
                                    href="https://www.instagram.com/aracnephobia/"
                                />
                                <FeatureCell
                                    icon={<SVG.socialMedia.tiktok />}
                                    name="Tiktok"
                                    href="https://www.tiktok.com/@aracne_phobia"
                                />
                                <FeatureCell
                                    icon={<SVG.socialMedia.twitter />}
                                    name="Twitter"
                                    href="https://x.com/Aracnephobia"
                                />
                                <FeatureCell
                                    icon={<SVG.socialMedia.linkedin />}
                                    name="LinkedIn"
                                    href="https://www.linkedin.com/in/ana-l%C3%A1zaro-estalot-52a860104/"
                                />
                                <FeatureCell
                                    icon={<SVG.socialMedia.bsky />}
                                    name="Bluesky"
                                    href="https://bsky.app/profile/aracnephobia.com"
                                />
                            </div>
                        </Window>
                        <div className={styles.ornaments}>
                            <SiteImage image={IMG.about.ornaments1} />
                        </div>
                    </div>
                </EnterFromAnimation>
                <EnterFromAnimation from='right' className={styles.right}>
                    <Window className={styles.contactMe} title="contact.me">
                        <a
                            className={styles.container}
                            href="mailto:a.lazaro.estalot@gmail.com"
                        >
                            <span>a.lazaro.estalot@gmail.com</span>
                        </a>
                    </Window>
                    <div className={styles.photo2} style={{
                        backgroundImage: `url(${IMG.about.anim_bg2})`
                    }}>
                        <SVG.circle />
                        <SiteImage image={IMG.about.aracne_photo2} />
                    </div>
                </EnterFromAnimation>
            </div>
            <div
                className={styles.damnYourEyes}
                style={{backgroundImage: `url(${IMG.about.damn_your_eyes})`}}
            >
                <EnterByScalingUp className={styles.wordTableSuperContainer}>
                    <Window
                        className={styles.wordTableWindow}
                        title="Hashtag.cloud"
                    >
                        <div className={styles.wordTableContainer}>
                            <_WordTable />
                        </div>
                    </Window>
                </EnterByScalingUp>
            </div>
            <div className={styles.jpBigContainer}>
                <div className={styles.frame}>
                    {[...currentKanji].map((c, i) => <MutableJapaneseChar
                            key={i}
                            id={"about_jp_char_" + i}
                            initial={c}
                        />
                    )}
                </div>
            </div>
            <div className={styles.footer}>
                <EnterFromAnimation from='left' className={styles.planetContainer}>
                    <SVG.about.window.close className={styles.corner} />
                    <SVG.about.window.close className={styles.corner} />
                    <SVG.about.window.close className={styles.corner} />
                    <SVG.about.window.close className={styles.corner} />
                    <div className={styles.content}>
                        <SVG.planet
                            key={10 + currentPlanet}
                            className={styles.planet}
                            onMouseEnter={() => handleMouseEnterPlanet(0)}
                            onTouchStart={() => handleMouseEnterPlanet(0)}
                            style={{
                                visibility: currentPlanet === 0 ? 'visible' : 'hidden',
                                opacity: currentPlanet === 0 ? 1 : 0,
                            }}
                        />
                        <SVG.planet
                            key={20 + currentPlanet}
                            className={styles.planet}
                            onMouseEnter={() => handleMouseEnterPlanet(1)}
                            onTouchStart={() => handleMouseEnterPlanet(1)}
                            style={{
                                visibility: currentPlanet === 1 ? 'visible' : 'hidden',
                                opacity: currentPlanet === 1 ? 1 : 0,
                            }}
                        />
                        <SVG.planet
                            key={30 + currentPlanet}
                            className={styles.planet}
                            onMouseEnter={() => handleMouseEnterPlanet(2)}
                            onTouchStart={() => handleMouseEnterPlanet(2)}
                            style={{
                                visibility: currentPlanet === 2 ? 'visible' : 'hidden',
                                opacity: currentPlanet === 2 ? 1 : 0,
                            }}
                        />
                    </div>
                </EnterFromAnimation>
                <EnterFromAnimation from='right' className={styles.ornaments}>
                    <SiteImage image={IMG.about.ornaments2} />
                    <a href="https://azariadev.dev" target='_blank'>
                        Developed by <strong>Azaria</strong>
                    </a>
                </EnterFromAnimation>
            </div>
        </div>
        
        </ScrollArea>
    );

    function handleMouseEnterPlanet (index: number) {
        if (currentPlanet !== index) return;

        let newVal = randomInt(3);
        if (newVal === currentPlanet) newVal++;
        newVal %= 3;

        setCurrentPlanet(newVal);
    }
}

function _WordTable () {

    return (
        <WordTable className={styles.wordTable}>
            <Word
                image={IMG.about.cartoon}
                imagePos={makeRect(0.74, 0.75, 0.26, 0.21)}
                word="CARTOON"
                font='invisible'
                fontSize={1.3}
                wordPos={makeRect(0.86, 0.18, 0.14, 0.82)}
            />
            <Word
                image={IMG.about.storyboard}
                imagePos={makeRect(0.14, 0.27, 0.12, 0.12)}
                word="STORYBOARD"
                font='invisible'
                fontSize={1.35}
                wordPos={makeRect(0.172, 0.005, 0.065, 0.565)}
            />
            <Word
                image={IMG.about.content_creator}
                imagePos={makeRect(-0.006, 0.605, 0.19, 0.18)}
                word="CONTENT&#x2009; CREATOR"
                font='gotile'
                fontSize={0.52}
                align='right'
                wordPos={makeRect(-0.0075, 0.59, 0.185, 0.4)}
            />
            <Word
                image={IMG.about.writer}
                imagePos={makeRect(0.36, 0.34, 0.135, 0.135)}
                word="WRITER"
                font='illusion-magic'
                fontSize={2.5}
                wordPos={makeRect(0.375, 0.395, 0.07, 0.29)}
            />
            <Word
                image={IMG.about.video}
                imagePos={makeRect(0.465, 0.18, 0.15, 0.2)}
                word="VIDEO"
                font='invisible'
                fontSize={1.4}
                wordPos={makeRect(0.45, 0.01, 0.2, 0.8)}
            />
            <Word
                image={IMG.about.digital_artist}
                imagePos={makeRect(0.478, 0.755, 0.145, 0.14)}
                word="DIGITAL ARTIST"
                font='illusion-magic'
                fontSize={1.15}
                wordPos={makeRect(0.5, 0.79, 0.12, 0.21)}
            />
            <Word
                image={IMG.about.graphic_design}
                imagePos={makeRect(0.835, 0.05, 0.18, 0.18)}
                word="GRAPHIC DESIGN"
                font='amatic-sc'
                fontSize={0.50}
                wordPos={makeRect(0.86, 0.001, 0.14, 0.18)}
            />
            <Word
                image={IMG.about.branding}
                imagePos={makeRect(0.71, 0.292, 0.143, 0.23)}
                word="BRANDING"
                font='grandstander'
                fontSize={1.42}
                wordPos={makeRect(0.79, 0.01, 0.08, 0.5)}
            />
            <Word
                image={IMG.about.marketing}
                imagePos={makeRect(0.62, 0.06, 0.175, 0.155)}
                word="MARKETING"
                font='invisible'
                fontSize={1.42}
                wordPos={makeRect(0.654, 0.01, 0.13, 0.99)}
            />
            <Word
                image={IMG.about.storytelling}
                imagePos={makeRect(0.727, 0.565, 0.184, 0.18)}
                word="STORYTELLING"
                font='illusion-magic'
                fontSize={2.25}
                wordPos={makeRect(0.802, 0.51, 0.07, 0.49)}
            />
            <Word
                image={IMG.about.web_design}
                imagePos={makeRect(0.25, 0.047, 0.195, 0.222)}
                word="WEB&#x2009; DESIGN"
                font='gotile'
                fontSize={0.55}
                align='start'
                wordPos={makeRect(0.23, 0.01, 0.215, 0.385)}
            />
            <Word
                image={IMG.about.illustration}
                imagePos={makeRect(-0.02, 0.785, 0.305, 0.19)}
                word="ILLUSTRATION"
                font='grandstander'
                fontSize={1.25}
                wordPos={makeRect(0.1825, 0.57, 0.058, 0.43)}
            />
            <Word
                image={IMG.about.comic}
                imagePos={makeRect(0.34, 0.656, 0.12, 0.17)}
                word="COMIC"
                font='invisible'
                fontSize={1.3}
                wordPos={makeRect(0.37, 0.68, 0.08, 0.32)}
            />
            <Word
                image={IMG.about.animation}
                imagePos={makeRect(0.18, 0.415, 0.18, 0.315)}
                word="ANIMATION"
                font='grandstander'
                fontSize={1.41}
                wordPos={makeRect(0.245, 0.265, 0.11, 0.735)}
            />
            <Word
                image={IMG.about.motion_graphics}
                imagePos={makeRect(0.0, 0.03, 0.173, 0.19)}
                word="MOTION GRAPHICS"
                font='invisible'
                align='start'
                fontSize={0.64}
                wordPos={makeRect(0.005, 0, 0.17, 0.59)}
            />
            <Word
                image={IMG.about.uiux}
                imagePos={makeRect(0.005, 0.44, 0.12, 0.11)}
                word="UX/UI"
                font='illusion-magic'
                fontSize={1.8}
                wordPos={makeRect(0.024, 0.415, 0.08, 0.20)}
            />{/**/}
        </WordTable>
    );
}

interface _SocialMediaButtonProps {
    icon: React.ReactElement;
    name: string;
}

function _SocialMediaButton ({
    icon,
    name,
}: _SocialMediaButtonProps) {
    return (
        <a
            className={styles.socialMediaButton}
            target='_blank'
            href="https://www.youtube.com/@LaMorguedeAracnePhobia"
        >
            <div className={styles.iconContainer}>
                {icon}
            </div>
            <div className={styles.name}>
                <SVG.heart />
                <span>{name}</span>
            </div>
        </a>
    );
}

interface _DraggableProps {
    id: string;
    children: React.ReactNode;
}



export default AboutMe;
