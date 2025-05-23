import { ScrollArea } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import { $cl, clampNumber } from 'utils';
import styles from './section.module.scss';
import { useMediaQuery } from '@mantine/hooks';
import SVG from 'assets/img/svg';
import { IMG } from 'assets/img/img';
import SiteImage from 'components/SiteImage';
import Window from './Window';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';
import { EnterByScalingDown, EnterByScalingUp, EnterFromAnimation } from './animations';
import { Typewriter } from 'react-simple-typewriter';
import useVisible from 'hooks/useVisible';

export interface ExperienceProps {
    
}

function Experience (props: ExperienceProps) {
    const isPhone = useMediaQuery('(min-width: 50rem)') === false;
    
    // Trajectory components
    const containerRef = useRef<HTMLDivElement>(null);
    const trajRef = useRef<HTMLImageElement>(null);
    const [pos, setPos] = useState({ x: 0, y: -370 });
    const [isDragging, setDragging] = useState(false);
    const start = useRef({ x: 0, y: 0 });

    useEffect(() => {
        window.addEventListener('pointermove', handleTrajPointerMove);
        window.addEventListener('pointerup', handleTrajPointerUp);

        return () => {
            window.removeEventListener('pointermove', handleTrajPointerMove);
            window.removeEventListener('pointerup', handleTrajPointerUp);
        };
    }, [isDragging, setDragging, pos, setPos, handleTrajPointerUp]);

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
            <div className={$cl(styles.sectionContent, styles.experience)}>

            <div className={styles.trajectoryContainer}>
                <div className={styles.impossibleContainer}>
                    <EnterByScalingDown
                        className={styles.word}
                        style={{animationDelay: '0.4s'}}
                    >
                        <SVG.about.experience.wordImpossible />
                    </EnterByScalingDown>
                    <EnterByScalingDown
                        className={styles.word}
                        style={{animationDelay: '0.7s'}}
                    >
                        <SVG.about.experience.wordImpossible />
                    </EnterByScalingDown>
                    <EnterByScalingDown
                        className={styles.word}
                        style={{animationDelay: '1s'}}
                    >
                        <SVG.about.experience.wordImpossible />
                    </EnterByScalingDown>
                </div>
                <SiteImage
                    className={styles.border}
                    image={IMG.about.trajectory_border}
                />
                <Window
                    className={styles.trajectoryWindow}
                    frameClassName={styles.trajectoryFrame}
                    title="History.me"
                >
                    <div ref={containerRef} className={styles.trajectoryFrame2}>
                        <SiteImage
                            ref={trajRef}
                            className={styles.trajectory}
                            image={IMG.about.trajectory}
                            onPointerDown={handleTrajPointerDown}
                            style={{left: `${pos.x}px`, top: `${pos.y}px` }}
                        />
                    </div>
                </Window>
            </div>

            <EnterByScalingUp className={styles.socialMediaWindowContainer}>
                <Window
                    title="Social.media"
                    className={styles.socialMediaWindow}
                    frameClassName={styles.socialMediaFrame}
                >
                    <div className={styles.socialMediaList}>
                        <a
                            target='_blank'
                            href="https://www.youtube.com/@LaMorguedeAracnePhobia"
                        >
                            <SVG.socialMedia.youtube />
                            <div>YouTube</div>
                        </a>
                        <a
                            target='_blank'
                            href="https://www.twitch.tv/aracnephobia"
                        >
                            <SVG.socialMedia.twitch />
                            <div>Twitch</div>
                        </a>
                        <a
                            target='_blank'
                            href="https://www.instagram.com/aracnephobia/"
                        >
                            <SVG.socialMedia.instagram />
                            <div>Instagram</div>
                        </a>
                        <a
                            target='_blank'
                            href="https://www.tiktok.com/@aracne_phobia"
                        >
                            <SVG.socialMedia.tiktok />
                            <div>TikTok</div>
                        </a>
                        <a
                            target='_blank'
                            href="https://x.com/Aracnephobia"
                        >
                            <SVG.socialMedia.twitter />
                            <div>Formerly Twitter</div>
                        </a>
                        <a
                            target='_blank'
                            href="https://bsky.app/profile/aracnephobia.com"
                        >
                            <SVG.socialMedia.bsky />
                            <div>BlueSky</div>
                        </a>
                        <a
                            target='_blank'
                            href="https://www.linkedin.com/in/ana-l%C3%A1zaro-estalot-52a860104/"
                        >
                            <SVG.socialMedia.linkedin />
                            <div>LinkedIn</div>
                        </a>
                    </div>
                    <div className={styles.pic}>
                        <ChromaticAberrationImage
                            image={IMG.about.aracne_photo3}
                            horizFlicker={96}
                            vertFlicker={32}
                            opacity={0.3}
                            duration={5}
                        />
                    </div>
                </Window>
            </EnterByScalingUp>

            <_ShootMeAMail />

            <div className={$cl(styles.g2, styles.contactMe)}>
                <EnterFromAnimation from='left' className={styles.left}>
                    <SiteImage image={IMG.about.tali} />
                </EnterFromAnimation>
                <EnterFromAnimation from='right' className={styles.right}>
                    <Window frameClassName={styles.frame} title="sections.me">
                        <div className={styles.img}>
                            <SiteImage image={IMG.about.eyes_galore} />
                        </div>
                        <div className={styles.sections}>
                            <a href="/portfolio">
                                <div>Portfolio</div>
                                <SVG.sections.portfolio />
                            </a>
                            <a href="/blog">
                                <div>About me</div>
                                <SVG.sections.about />
                            </a>
                            <a href="/home">
                                <div>Blog</div>
                                <SVG.sections.home />
                            </a>
                        </div>
                    </Window>
                </EnterFromAnimation>
            </div>

            <SiteImage className={styles.footer} image={IMG.about.footer_education} />

            </div>
        </ScrollArea>
    );

    function handleTrajPointerDown (evt: React.PointerEvent) {
        evt.preventDefault();
        setDragging(true);
        start.current = { x: evt.clientX, y: evt.clientY };
    }

    function handleTrajPointerMove (evt: PointerEvent) {
        if (isDragging === false) return;
        if (containerRef.current === null) return;
        if (trajRef.current === null) return;

        const dx = evt.clientX - start.current.x;
        const dy = evt.clientY - start.current.y;

        const newX = pos.x + dx;
        const newY = pos.y + dy;

        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        const trajWidth = trajRef.current.offsetWidth;
        const trajHeight = trajRef.current.offsetHeight;

        start.current = { x: evt.clientX, y: evt.clientY };
        setPos({
            x: clampNumber(newX, -(trajWidth - containerWidth), 0),
            y: clampNumber(newY, -(trajHeight - containerHeight), 0),
        });
    }

    function handleTrajPointerUp (evt: PointerEvent) {
        if (isDragging === false) return;

        console.log("dropped");
        setDragging(false);
    }
}

function _ShootMeAMail () {
    const { ref, isVisible } = useVisible({ threshold: 0.5 });

    return (
        <div
            ref={ref}
            className={styles.shootMeAMail}
        >
            <a
                className={styles.shootMeText}
                href="mailto:a.lazaro.estalot@gmail.com"
                style={{display: isVisible ? 'flex' : 'none'}}
            >
                <SVG.about.experience.mailBorder
                />
                <Typewriter
                    key={isVisible ? "vis" : "hid"}
                    words={["...Or shoot me a mail"]}
                    typeSpeed={30}
                />
            </a>
            <EnterByScalingUp className={styles.img} threshold={0.5}>
                <SiteImage image={IMG.art.dev_designer} />
            </EnterByScalingUp>
        </div>
    );
}


export default Experience;
