import { Tooltip } from '@mantine/core';
import { IMG } from 'assets/img/img';
import { useState } from 'react';
import { $cl } from 'utils';
import ChromaticAberrationImage from './ChromaticAberrationImage';
import SiteImage from './SiteImage';
import styles from "./WebHeader.module.scss";

export type Logo = 'web' | 'music';

export interface WebHeaderProps {
  curtainSide: 'left' | 'right' | 'none';
  logo: Logo;
}

function WebHeader ({
  curtainSide,
  logo,
}: WebHeaderProps) {
  const [showLabel, setShowLabel] = useState(false);

  const logoImg = logo === 'music'
    ? IMG.lettering_music_pink
    : IMG.lettering_sq_pink;

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
        image={logoImg}
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
