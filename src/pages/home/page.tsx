import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import fm from 'front-matter';
import { BlogEntryAttributes } from './blog-entry';

import BlogEntry, { BlogEntryData } from './BlogEntry';
import { useMediaQuery } from '@mantine/hooks';
import SiteImage from 'components/SiteImage';
import { Portal, Tooltip } from '@mantine/core';
import { IMG } from 'assets/img/img';
import SVG from 'assets/img/svg';

export interface HomePageProps {
    
}

function HomePage (props: HomePageProps) {
    const isNotDesktop = useMediaQuery('(min-width: 75rem)') === false;

    const [doc, setDoc] = useState<BlogEntryData | null>(null);

    useEffect(() => {
        (async () => {
            const entry = await fetchFile("/blog/enemy.md");
            setDoc(entry);
        })();
    }, []);

    if (doc === null) return <>Loading...</>;

    return (
        <div className={styles.home}>
            {isNotDesktop === false && <>
                <Portal>
                    <SiteImage
                        className={styles.leftCurtain}
                        image={IMG.twp_vert}
                    />
                </Portal>
                <SiteImage
                    className={styles.aracne}
                    image={IMG.art.mirror}
                />
            </>}
            <div className="screenPresentation">
                <div className="socialMedia">
                    <Tooltip.Floating position='top' label="YouTube">
                        <a
                            target='_blank'
                            href="https://www.youtube.com/@LaMorguedeAracnePhobia"
                        >
                            <SVG.socialMedia.youtube />
                        </a>
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="Twitch">
                        <a
                            target='_blank'
                            href="https://www.twitch.tv/aracnephobia"
                        >
                            <SVG.socialMedia.twitch />
                        </a>
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="Instagram">
                        <a
                            target='_blank'
                            href="https://www.instagram.com/aracnephobia/"
                        >
                            <SVG.socialMedia.instagram />
                        </a>
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="TikTok">
                        <a
                            target='_blank'
                            href="https://www.tiktok.com/@aracne_phobia"
                        >
                            <SVG.socialMedia.tiktok />
                        </a>
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="X (formerly known as Twitter)">
                        <a
                            target='_blank'
                            href="https://x.com/Aracnephobia"
                        >
                            <SVG.socialMedia.twitter />
                        </a>
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="Bluesky">
                        <a
                            target='_blank'
                            href="https://bsky.app/profile/aracnephobia.com"
                        >
                            <SVG.socialMedia.bsky />
                        </a>
                    </Tooltip.Floating>
                    <Tooltip.Floating position='top' label="LinkedIn">
                        <a
                            target='_blank'
                            href="https://www.linkedin.com/in/ana-l%C3%A1zaro-estalot-52a860104/"
                        >
                            <SVG.socialMedia.linkedin />
                        </a>
                    </Tooltip.Floating>
                </div>
                <div className="screen">
                    <div className={styles.screenContent}>
                        <BlogEntry entry={doc} />
                    </div>
                </div>
            </div>
        </div>
    );
}

async function fetchFile (id: string) : Promise<BlogEntryData> {
    const res = await fetch(id);
    const txt = await res.text();

    return fm<BlogEntryAttributes>(txt);
}

export default HomePage;