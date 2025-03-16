'use client';

import React, { useEffect, useState } from 'react';
import styles from "./page.module.scss"
import { getClassString } from 'src/utils';

const SRC_LOGO_REGULAR = "/img/aracnephobia-logo.webp";
const SRC_LOGO_HOLE = "/img/wip-hole-here.webp";
const SRC_LOGO_GONE = "/img/wip-gone-now.webp";

export interface WipPageProps {
    
}

function WipPage (props: WipPageProps) {
    const [isActive, setActive] = useState(true);
    const [imgSrc, setImgSrc] = useState(SRC_LOGO_REGULAR);

    return (
        <div className={styles.page}>
            <img
                className={getClassString(
                    styles.logo,
                    isActive && styles.activeLogo,
                )}
                src={imgSrc}
                alt="logo"
                onClick={handleLogoClick}
            />
        </div>
    );

    function handleLogoClick (evt: React.MouseEvent) {
        if (isActive === false) return;
        setActive(false);

        setImgSrc(SRC_LOGO_HOLE);
        setTimeout(() => setImgSrc(SRC_LOGO_GONE), 1_600);
        setTimeout(() => setImgSrc(SRC_LOGO_REGULAR), 2_500);
        setTimeout(() => {
            changeFavicon(16);
            changeFavicon(32);
        }, 2_500);
    }
}

function changeFavicon (size: number) {
    const $favicon = document.getElementById(`favicon-${size}`);
    if ($favicon) {
        ($favicon as HTMLLinkElement).href = `img/favicon_mad_${size}.ico`
    }
}

export default WipPage;
