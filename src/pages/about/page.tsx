import React, { useRef, useState } from 'react';
import styles from "./page.module.scss";
import twpHorizThin from "@src/img/twp-horiz-thin.webp";
import Word, { MultiWord } from './Word';
import WordTable from './WordTable';
import { makeRect } from 'types';
import { Typewriter } from 'react-simple-typewriter';
import { IMG } from 'img/img';
import { Tooltip } from '@mantine/core';
import SiteImage from 'components/SiteImage';
import WebHeader from 'components/WebHeader';
import Navigator from 'components/Navigator';
import useDynamicHook from 'hooks/useDynamicSize';

function AboutPage () {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <img className={styles.curtainTop} src={twpHorizThin} alt="" />
                <WordTable className={styles.wordTable}>
                    <Word
                        image={IMG.about.cartoon}
                        imagePos={makeRect(0, 0.29, 0.285, 0.078)}
                        word="CARTOON"
                        font='invisible'
                        fontSize={1.42}
                        wordPos={makeRect(0.04, 0, 0.16, 0.39)}
                    />
                    <Word
                        image={IMG.about.uiux}
                        imagePos={makeRect(0.234, 0.019, 0.235, 0.08)}
                        word="UX/UI"
                        font='illusion-magic'
                        fontSize={2.6}
                        wordPos={makeRect(0.26, 0, 0.16, 0.24)}
                    />
                    <Word
                        image={IMG.about.storyboard}
                        imagePos={makeRect(0.239, 0.203, 0.193, 0.069)}
                        word="STORY BOARD"
                        font='invisible'
                        fontSize={0.65}
                        wordPos={makeRect(0.23, 0.2, 0.18, 0.15)}
                    />
                    <Word
                        image={IMG.about.content_creator}
                        imagePos={makeRect(0.439, 0.0985, 0.294, 0.0965)}
                        word="CONTENT CREATOR"
                        font='gotile'
                        fontSize={0.52}
                        wordPos={makeRect(0.4, 0, 0.28, 0.24)}
                    />
                    <Word
                        image={IMG.about.writer}
                        imagePos={makeRect(0.445, 0.257, 0.1345, 0.046)}
                        word="WRITER"
                        font='illusion-magic'
                        fontSize={1.6}
                        wordPos={makeRect(0.43, 0.225, 0.1, 0.1)}
                    />
                    <Word
                        image={IMG.about.video}
                        imagePos={makeRect(0.75, 0.038, 0.17, 0.082)}
                        word="VIDEO"
                        font='invisible'
                        fontSize={1.3}
                        wordPos={makeRect(0.665, 0.02, 0.2, 0.28)}
                    />
                    <Word
                        image={IMG.about.digital_artist}
                        imagePos={makeRect(0.6, 0.244, 0.15, 0.05)}
                        word="DIGITAL ARTIST"
                        font='grandstander'
                        fontSize={0.67}
                        wordPos={makeRect(0.515, 0.22, 0.13, 0.1)}
                    />
                    <Word
                        image={IMG.about.graphic_design}
                        imagePos={makeRect(0.899, 0.173, 0.135, 0.048)}
                        word="GRAPHIC DESIGN"
                        font='amatic-sc'
                        fontSize={1.02}
                        wordPos={makeRect(0.84, 0.015, 0.16, 0.28)}
                    />
                    <Word
                        image={IMG.about.branding}
                        imagePos={makeRect(0.929, 0.292, 0.16, 0.096)}
                        word="BRANDING"
                        font='grandstander'
                        fontSize={1.42}
                        wordPos={makeRect(0.87, 0.27, 0.13, 0.28)}
                    />
                    <Word
                        image={IMG.about.marketing}
                        imagePos={makeRect(0.672, 0.447, 0.22, 0.127)}
                        word="MARKETING"
                        font='invisible'
                        fontSize={1.3}
                        wordPos={makeRect(0.6, 0.31, 0.28, 0.69)}
                    />
                    <Word
                        image={IMG.about.storytelling}
                        imagePos={makeRect(0.785, 0.654, 0.295, 0.098)}
                        word="Storytelling"
                        font='gotile'
                        fontSize={1.0}
                        wordPos={makeRect(0.845, 0.54, 0.155, 0.3)}
                    />
                    <Word
                        image={IMG.about.web_design}
                        imagePos={makeRect(0.063, 0.776, 0.441, 0.176)}
                        word="WEB&#x2009; DESIGN"
                        font='gotile'
                        fontSize={0.53}
                        align='end'
                        wordPos={makeRect(0, 0.69, 0.5, 0.31)}
                    />
                    <MultiWord
                        image={IMG.about.illustration}
                        imagePos={makeRect(0.495, 0.825, 0.635, 0.133)}
                        words={[
                            {
                                word: "ILLUSTRATION",
                                wordPos: makeRect(0.485, 0.66, 0.13, 0.33),
                                font: 'grandstander',
                                fontSize: 1.2,
                            },
                            {
                                word: "COMIC",
                                wordPos: makeRect(0.91, 0.82, 0.1, 0.18),
                                font: 'illusion-magic',
                                fontSize: 3,
                            },
                        ]}
                    />
                    <MultiWord
                        image={IMG.about.animation}
                        imagePos={makeRect(0.063, 0.6745, 0.195, 0.122)}
                        words={[
                            {
                                word: "GRAPHICS",
                                wordPos: makeRect(0.125, 0.663, 0.08, 0.145),
                                font: 'invisible',
                                fontSize: 1.15,
                            },
                            {
                                word: "MOTION",
                                wordPos: makeRect(0.04, 0.663, 0.086, 0.145),
                                font: 'illusion-magic',
                                fontSize: 2.4,
                            },
                            {
                                word: "ANIMATION",
                                wordPos: makeRect(0.205, 0.663, 0.06, 0.145),
                                font: 'grandstander',
                                fontSize: 1.5,
                            },
                        ]}
                    />
                </WordTable>
                {false && <img className={styles.template} src="template2.webp" style={{
                    marginTop: "100px",
                }} />}
            </div>
            <div className={styles.aboutMeCard}>
                <SiteImage
                    className={styles.portrait}
                    image={IMG.aracne}
                />
                <div className={styles.msg0}>
                    sorry for acting weird
                </div>
                <div className={styles.msg1}>
                    i'm weird, it will happen again.
                </div>
                <div className={styles.social}>
                    <Tooltip.Floating position='top' label="YouTube">
                        <a
                            target='_blank'
                            href="https://www.youtube.com/@LaMorguedeAracnePhobia"
                        >
                            <SiteImage
                                className={styles.icon}
                                image={IMG.social.youtube}
                            />
                        </a>
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="Twitch">
                        <a
                            target='_blank'
                            href="https://www.twitch.tv/aracnephobia"
                        >
                            <SiteImage
                                className={styles.icon}
                                image={IMG.social.twitch}
                            />
                        </a>
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="Instagram">
                        <a
                            target='_blank'
                            href="https://www.instagram.com/aracnephobia/"
                        >
                            <SiteImage 
                                className={styles.icon}
                                image={IMG.social.instagram}
                            />
                        </a>
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="TikTok">
                        <a
                            target='_blank'
                            href="https://www.tiktok.com/@aracne_phobia"
                        >
                            <SiteImage
                                className={styles.icon}
                                image={IMG.social.tiktok}
                            />
                        </a>
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="X (formerly known as Twitter)">
                        <a
                            target='_blank'
                            href="https://x.com/Aracnephobia"
                        >
                            <SiteImage
                                className={styles.icon}
                                image={IMG.social.twitter}
                            />
                        </a>
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="Bluesky">
                        <a
                            target='_blank'
                            href="https://bsky.app/profile/aracnephobia.com"
                        >
                            <SiteImage
                                className={styles.icon}
                                image={IMG.social.bsky}
                            />
                        </a>
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="LinkedIn">
                        <a
                            target='_blank'
                            href="https://www.linkedin.com/in/ana-l%C3%A1zaro-estalot-52a860104/"
                        >
                            <SiteImage
                                className={styles.icon}
                                image={IMG.social.linkedin}
                            />
                        </a>
                    </Tooltip.Floating>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
