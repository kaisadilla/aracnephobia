import { ScrollArea } from '@mantine/core';
import React from 'react';
import { $cl } from 'utils';
import styles from './section.module.scss';
import SiteImage from 'components/SiteImage';
import { IMG } from 'assets/img/img';
import Window from './Window';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';
import SVG from 'assets/img/svg';
import { Typewriter } from 'react-simple-typewriter';

export interface SkillsProps {
    
}

function Skills (props: SkillsProps) {

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
            </div>
        </ScrollArea>
    );
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
