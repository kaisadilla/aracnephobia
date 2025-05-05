import React, { useState } from 'react';
import styles from './page.module.scss';
import { IMG } from 'assets/img/img';
import SiteImage from 'components/SiteImage';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';
import SVG from 'assets/img/svg';
import { $cl } from 'utils';
import AboutMe from './AboutMe';
import { useMediaQuery } from '@mantine/hooks';
import Skills from './Skills';

type Section = 'about'
    | 'skills'
    | 'tools'
    | 'education'
    | 'experience'
    ;

export interface AboutPageProps {
    
}

function AboutPage (props: AboutPageProps) {
    const isPhone = useMediaQuery('(min-width: 50rem)') === false;

    const [section, setSection] = useState<Section>('about');

    return (
        <div className={styles.page}>
            <div className={styles.left}>
                {isPhone && <>
                    <SiteImage
                        className={styles.curtain}
                        image={IMG.about.curtain_top}
                    />
                    <ChromaticAberrationImage
                        className={styles.estalot}
                        horizFlicker={4}
                        vertFlicker={8}
                        image={IMG.about.estalot_horizontal_logo}
                    />
                </>}
                {isPhone === false && <>
                    <SiteImage
                        className={styles.curtain}
                        image={IMG.about.curtain_left}
                    />
                    <ChromaticAberrationImage
                        className={styles.estalot}
                        horizFlicker={4}
                        vertFlicker={8}
                        image={IMG.about.estalot_vertical_logo}
                    />
                </>}
            </div>
            <div className={styles.header}>
                <ChromaticAberrationImage
                    image={IMG.about.header_motif}
                    horizFlicker={4}
                    className={styles.left}
                />
                <span>ANA LÁZARO</span>
                <ChromaticAberrationImage
                    image={IMG.about.header_motif}
                    horizFlicker={4}
                    className={styles.right}
                />
            </div>
            <div className={styles.navbar}>
                <div className={styles.ribbon}>
                    <button
                        className={$cl(section === 'about' && styles.selected)}
                        onClick={() => setSection('about')}
                    >
                        <SVG.about.navbar.about_me />
                        <span>About me</span>
                    </button>
                    <button
                        className={$cl(section === 'skills' && styles.selected)}
                        onClick={() => setSection('skills')}
                    >
                        <SVG.about.navbar.skills />
                        <span>Skills</span>
                    </button>
                    <button
                        className={$cl(section === 'tools' && styles.selected)}
                        onClick={() => setSection('tools')}
                    >
                        <SVG.about.navbar.tools />
                        <span>Tools</span>
                    </button>
                    <button
                        className={$cl(section === 'education' && styles.selected)}
                        onClick={() => setSection('education')}
                    >
                        <SVG.about.navbar.education />
                        <span>Education</span>
                    </button>
                    <button
                        className={$cl(section === 'experience' && styles.selected)}
                        onClick={() => setSection('experience')}
                    >
                        <SVG.about.navbar.experience />
                        <span>Experience</span>
                    </button>
                </div>
                <SiteImage image={IMG.about.header_ae_logo} />
                <div className={styles.title}>
                    {section === 'about' && "About me"}
                    {section === 'skills' && "Skills"}
                    {section === 'tools' && "Tools"}
                    {section === 'education' && "Education"}
                    {section === 'experience' && "Experience"}
                </div>
            </div>
            <div className={styles.content}>
                {section === 'about' && <AboutMe />}
                {section === 'skills' && <Skills />}
            </div>
        </div>
    );
}

export default AboutPage;
