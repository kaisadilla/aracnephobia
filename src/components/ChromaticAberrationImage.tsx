import React from 'react';
import styles from './ChromaticAberrationImage.module.scss';
import SiteImage, { SiteImageProps } from './SiteImage';
import { $cl } from 'utils';

export interface ChromaticAberrationImageProps extends SiteImageProps {
    horizFlicker?: number;
    vertFlicker?: number;
    duration?: number;
    opacity?: number;
}

function ChromaticAberrationImage ({
    className,
    horizFlicker = 2,
    vertFlicker = 0,
    duration = 1,
    opacity = 0.5,
    ...siteImageProps
}: ChromaticAberrationImageProps) {

    return (
        <div
            className={$cl(styles.chromaticAberration, className)}
            style={{
                '--horiz-flicker': `${horizFlicker}px`,
                '--vert-flicker': `${vertFlicker}px`,
                '--duration': `${duration}`,
                '--opacity': `${opacity}`,
            } as React.CSSProperties}
        >
            <SiteImage
                className={styles.sentinel}
                {...siteImageProps}
            />
            <SiteImage
                className={styles.base}
                {...siteImageProps}
            />
            <SiteImage
                className={styles.aber1}
                {...siteImageProps}
            />
            <SiteImage
                className={styles.aber2}
                {...siteImageProps}
            />
            <SiteImage
                className={styles.top}
                {...siteImageProps}
            />
        </div>
    );
}

export default ChromaticAberrationImage;
