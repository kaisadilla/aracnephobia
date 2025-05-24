import React, { useState } from 'react';
import styles from "./WebHeader.module.scss";
import planet from "assets/img/planet.webp";
import logo from "assets/img/logo-lettering.webp";
import SiteImage from './SiteImage';
import { IMG } from 'assets/img/img';
import { Tooltip } from '@mantine/core';
import ChromaticAberrationImage from './ChromaticAberrationImage';
import { $cl } from 'utils';

export interface WebHeaderProps {
    curtainSide: 'left' | 'right' | 'none';
}

function WebHeader ({
    curtainSide,
}: WebHeaderProps) {
    const [showLabel, setShowLabel] = useState(false);

    function handleMouseEnterPsycho () {
        if (Math.random() > 0.01) return;

        setShowLabel(true);
        setTimeout(() => setShowLabel(false), 2000);
    };

    return (
        <header className={$cl(
            styles.header,
            curtainSide === 'left' && styles.leftPad,
            curtainSide === 'right' && styles.rightPad,
        )}>
            <ChromaticAberrationImage
                className={styles.logo}
                image={IMG.lettering_sq_pink}
                horizFlicker={6}
                vertFlicker={0}
                duration={0.65}
                opacity={0.6}
            />

            <ChromaticAberrationImage
                image={IMG.about.header_motif}
                horizFlicker={4}
                className={styles.motifLeft}
            />

            <ChromaticAberrationImage
                image={IMG.about.header_motif}
                horizFlicker={4}
                className={styles.motifRight}
            />

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

            {/*<img className={styles.planet} src={planet} alt="" />
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
            </Tooltip.Floating>*/}
        </header>
    );
}

export default WebHeader;
