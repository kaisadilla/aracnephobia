import React from 'react';
import styles from './ChromaticAberrationImage.module.scss';
import SiteImage, { SiteImageProps } from './SiteImage';
import { $cl } from 'utils';

export interface ChromaticAberrationImageProps extends SiteImageProps {
    
}

function ChromaticAberrationImage ({
    className,
    ...siteImageProps
}: ChromaticAberrationImageProps) {

    return (
        <div
            className={$cl(styles.chromaticAberration, className)}
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
