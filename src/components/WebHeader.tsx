import React, { useState } from 'react';
import styles from "./WebHeader.module.scss";
import planet from "img/planet.webp";
import logo from "img/logo-lettering.webp";
import SiteImage from './SiteImage';
import { IMG } from 'img/img';
import { Tooltip } from '@mantine/core';

export interface WebHeaderProps {
    
}

function WebHeader (props: WebHeaderProps) {
    const [showLabel, setShowLabel] = useState(false);

    function handleMouseEnterPsycho () {
        if (Math.random() > 0.01) return;

        setShowLabel(true);
        setTimeout(() => setShowLabel(false), 2000);
    }

    return (
        <header className={styles.header}>
            <img className={styles.planet} src={planet} alt="" />
            <div className={styles.letteringContainer}>
                <SiteImage
                    className={styles.lettering}
                    image={IMG.lettering}
                />
            </div>
            <Tooltip.Floating
                label={showLabel ? "Awaken me..." : ""}
            >
                <SiteImage
                    className={styles.psycho}
                    image={IMG.psychedelic_planet}
                    data-spooky="Awaken me..."
                    onMouseEnter={handleMouseEnterPsycho}
                />
            </Tooltip.Floating>
        </header>
    );
}

export default WebHeader;
