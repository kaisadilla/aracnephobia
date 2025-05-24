import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import fm from 'front-matter';
import { BlogEntryAttributes } from './blog-entry';

import BlogEntry, { BlogEntryData } from './BlogEntry';
import { useMediaQuery } from '@mantine/hooks';
import SiteImage from 'components/SiteImage';
import { Portal } from '@mantine/core';
import { IMG } from 'assets/img/img';

export interface HomePageProps {
    
}

function HomePage (props: HomePageProps) {
    const isNotDesktop = useMediaQuery('(min-width: 75rem)') === false;

    const [doc, setDoc] = useState<BlogEntryData | null>(null);

    useEffect(() => {
        (async () => {
            const entry = await fetchFile("/blog/test.md");
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