import { ScrollArea } from '@mantine/core';
import React, { useRef } from 'react';
import { $cl } from 'utils';
import styles from './section.module.scss';
import SiteImage from 'components/SiteImage';
import { IMG } from 'assets/img/img';
import Window from './Window';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';
import SVG from 'assets/img/svg';
import { Typewriter } from 'react-simple-typewriter';
import gsap from 'gsap';

export interface SkillsProps {
    
}

function Skills (props: SkillsProps) {
    const pathRef = useRef<SVGPathElement>(null);

    return (
        <ScrollArea
            classNames={{
                root: styles.section,
                scrollbar: styles.scrollbar,
                thumb: styles.thumb
            }}
            scrollbars='y'
            offsetScrollbars='y'
            type='always'
            scrollbarSize="4em"
        >
            <div className={$cl(styles.sectionContent, styles.skills)}>
                <div className={styles.firstRow}>
                    <SiteImage
                        className={styles.left}
                        image={IMG.about.mental_toxicity}
                    />
                    <div
                        className={styles.right}
                        style={{backgroundImage: `url(${IMG.about.skills_bg1})`}}
                    >
                        <ChromaticAberrationImage
                            image={IMG.about.skills_pic1}
                            horizFlicker={6}
                            vertFlicker={6}
                        />
                    </div>
                </div>
                <Window className={styles.arts} title='art.skills'>
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
                            title="Comic artist"
                            icon={<SVG.about.skills.comicArtist />}
                        />
                        <_ArtSkill
                            title="Tattoo design"
                            icon={<SVG.about.skills.tattooDesign />}
                        />
                    </div>
                </Window>
                <SiteImage className={styles.eva1} image={IMG.about.eva1} />
            </div>
            <svg viewBox="0 0 721.4 483.19" fill="none" onClick={handleC}>
                <path id="outo" ref={pathRef} stroke="currentColor" stroke-width="10" d="M721.4,483.19l-50.73-131.2c31.05-34.62,48.85-74.88,48.85-117.86C719.52,104.82,558.45,0,359.76,0S0,104.82,0,234.13s161.07,234.13,359.76,234.13c69.55,0,134.48-12.85,189.52-35.09l172.12,50.02Z"/>
                <path id="into" stroke="none" stroke-width="13.4178" d="M64.5485 448.135L189.866 322.818L132.904 269.652C120.752 242.31 132.904 220.285 167.081 239.272L406.324 474.718L588.604 296.235L383.539 91.1698C372.146 56.9923 394.931 45.5998 417.716 56.9923L558.224 205.095L569.617 193.702C612.149 99.5243 546.831 55.7265 508.856 45.5998C482.274 22.8148 498.73 8.89059 516.451 7.62476C656.959 56.9923 626.579 186.107 596.199 239.272L622.782 262.057C649.364 288.64 651.896 303.83 641.769 311.425L440.501 512.693C422.273 530.921 402.526 530.414 394.931 527.883L303.791 448.135L174.676 569.655L132.904 527.883L7.58594 611.428L98.726 489.908L64.5485 448.135Z" stroke-linejoin="round"/>
                </svg>
        </ScrollArea>
    );

    function handleC () {
        const target = Math.random() < 0.5 ? "#into" : "#outo";

        gsap.to(pathRef.current, {
            duration: 3,
            morphSVG: target,
            ease: 'power2.inOut',
        })
    }
}

interface _ArtSkillProps {
    title: string;
    icon: React.ReactElement;
}

function _ArtSkill ({
    title,
    icon,
}: _ArtSkillProps) {

    return (
        <div className={styles.artSkill}>
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
