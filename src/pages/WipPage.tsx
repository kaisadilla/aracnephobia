import React, { useEffect, useState } from 'react';
import styles from "./WipPage.module.scss";
import { $cl } from 'utils';

const SRC_LOGO_REGULAR = "/img/aracnephobia-logo.webp";
const SRC_LOGO_ALT = "/img/aracnephobia-logo-alt.webp";
const SRC_LOGO_HOLE = "/img/wip-hole-here.webp";
const SRC_LOGO_GONE = "/img/wip-gone-now.webp";

function WipPage () {
    const [isCoverRemoved, setCoverRemoved] = useState(false);
    const [isClickable, setClickable] = useState(true);
    const [imgSrc, setImgSrc] = useState(SRC_LOGO_REGULAR);
    
    useEffect(() => {
        setTimeout(() => setCoverRemoved(true), 200);
    }, []);

    return (
        <div className={styles.page}>
            {/* Prevent lazy loading the logo on hover. */}
            <img src="/img/aracnephobia-logo-alt.webp" style={{display: 'none'}} />
            
            <div className={$cl(styles.curtain, isCoverRemoved && styles.removed)}>
                <img src="/img/curtain-default.svg" />
            </div>
            
            <div
                className={$cl(
                    styles.logo,
                    isClickable && styles.clickable,
                )}
                onClick={handleLogoClick}
                onMouseEnter={handleLogoMouseEnter}
                onMouseLeave={handleLogoMouseLeave}
            >
                <img
                    src={imgSrc}
                    style={{display: isClickable ? 'none' : 'block'}}
                />
            </div>
        </div>
    );

    function handleLogoClick (evt: React.MouseEvent) {
        if (isClickable === false) return;
        setClickable(false);

        setImgSrc(SRC_LOGO_HOLE);

        setTimeout(() => setImgSrc(SRC_LOGO_GONE), 800);
        setTimeout(() => {
            setImgSrc(SRC_LOGO_REGULAR);
            changeFavicon(16);
            changeFavicon(32);
            setClickable(true);
        }, 1_400);
    }

    function handleLogoMouseEnter (evt: React.MouseEvent) {
        if (isClickable === false) return;
        setImgSrc(SRC_LOGO_ALT);
    }

    function handleLogoMouseLeave (evt: React.MouseEvent) {
        if (isClickable === false) return;
        setImgSrc(SRC_LOGO_REGULAR);
    }
}

function changeFavicon (size: number) {
    const $favicon = document.getElementById(`favicon-${size}`);
    if ($favicon) {
        ($favicon as HTMLLinkElement).href = `img/favicon_mad_${size}.ico`
    }
}

export default WipPage;
