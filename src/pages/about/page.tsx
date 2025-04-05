import React, { useState } from 'react';
import styles from "./page.module.scss";
import twpHorizThin from "@src/img/twp-horiz-thin.webp";
import Word from './Word';
import WordTable from './WordTable';
import { makeRect } from 'types';
import { Typewriter } from 'react-simple-typewriter';
import { IMG } from 'img/img';
import { Tooltip } from '@mantine/core';
import SiteImage from 'components/SiteImage';
import WebHeader from 'components/WebHeader';
import Navigator from 'components/Navigator';

function AboutMePage () {
    const [revealedWords, setRevealedWords] = useState([] as string[]);

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <img className={styles.curtainTop} src={twpHorizThin} alt="" />
                <WordTable className={styles.wordTable}>
                    {<Word
                        imagePos={makeRect(0, 0.5, 0.2, 0.2)}
                        word="CARTOON"
                        font='invisible'
                        fontSize={1.15}
                        wordPos={makeRect(0, 0, 0.23, 0.42)}
                    />}
                    <Word
                        word="UI/UX"
                        font='illusion-magic'
                        fontSize={1.45}
                        wordPos={makeRect(0.21, 0, 0.42, 0.37)}
                    />
                    <Word
                        word="CONTENT CREATOR"
                        font='gotile'
                        fontSize={0.5}
                        wordPos={makeRect(0.63, 0, 0.37, 0.25)}
                    />
                    <Word
                        word="MARKETING"
                        font='invisible'
                        fontSize={1.2}
                        wordPos={makeRect(0.62, 0.27, 0.38, .73)}
                    />
                    <Word
                        word="WEB&#x2009; DESIGN"
                        font='gotile'
                        align='end'
                        fontSize={0.55}
                        wordPos={makeRect(0.03, 0.76, 0.45, 0.235)}
                    />
                    <Word
                        word="ILLUSTRATION"
                        font='grandstander'
                        fontSize={1.2}
                        wordPos={makeRect(0.47, 0.705, 0.13, 0.29)}
                    />
                </WordTable>
                <img src="template.webp" style={{
                    marginTop: "100px",
                }} />
            </div>
            <div className={styles.aboutMeCard}>
                <SiteImage
                    className={styles.portrait}
                    image={IMG.aracne}
                />
                <div className={styles.msg0}>
                    siento si hago cosas raras
                </div>
                <div className={styles.msg1}>
                    yo soy rara, volverá a pasar.
                </div>
                <div className={styles.social}>
                    <Tooltip.Floating position='top' label="YouTube">
                        <SiteImage
                            className={styles.icon}
                            image={IMG.social.youtube}
                        />
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="Twitch">
                        <SiteImage
                            className={styles.icon}
                            image={IMG.social.twitch}
                        />
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="Instagram">
                        <SiteImage 
                            className={styles.icon}
                            image={IMG.social.instagram}
                        />
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="TikTok">
                        <SiteImage
                            className={styles.icon}
                            image={IMG.social.tiktok}
                        />
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="X (Twitter)">
                        <SiteImage
                            className={styles.icon}
                            image={IMG.social.twitter}
                        />
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="Bluesky">
                        <SiteImage
                            className={styles.icon}
                            image={IMG.social.bsky}
                        />
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="LinkedIn">
                        <SiteImage
                            className={styles.icon}
                            image={IMG.social.linkedin}
                        />
                    </Tooltip.Floating>
                </div>
            </div>
        </div>
    );
}

export default AboutMePage;
