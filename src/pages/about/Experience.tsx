import { ScrollArea } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import { $cl, clampNumber } from 'utils';
import styles from './section.module.scss';
import { useMediaQuery } from '@mantine/hooks';
import SVG from 'assets/img/svg';
import { IMG } from 'assets/img/img';
import SiteImage from 'components/SiteImage';
import Window from './Window';

export interface ExperienceProps {
    
}

function Experience (props: ExperienceProps) {
    const isPhone = useMediaQuery('(min-width: 50rem)') === false;
    
    // Trajectory components
    const containerRef = useRef<HTMLDivElement>(null);
    const trajRef = useRef<HTMLImageElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
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
                        <SVG.about.experience.wordImpossible />
                        <SVG.about.experience.wordImpossible />
                        <SVG.about.experience.wordImpossible />
                    </div>
                    <SiteImage
                        className={styles.border}
                        image={IMG.about.trajectory_border}
                    />
                    <Window
                        className={styles.trajectoryWindow}
                        frameClassName={styles.trajectoryFrame}
                        title=""
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

export default Experience;
