import { useMediaQuery } from '@mantine/hooks';
import { IMG } from 'assets/img/img';
import { useEffect, useState } from 'react';
import { $cl } from 'utils';
import styles from './Layout.module.scss';
import Navigator from './Navigator';
import PhoneHeader from './PhoneHeader';
import SiteImage from './SiteImage';
import WebHeader, { Logo } from './WebHeader';

type AnimState = 'cover' | 'logo' | 'website';

export interface LayoutProps {
  curtainSide: 'left' | 'right' | 'none';
  logo: Logo;
  navigator?: boolean;
  children: React.ReactNode;
}

function Layout ({
  curtainSide,
  logo,
  navigator = false,
  children,
}: LayoutProps) {
  const [animState, setAnimState] = useState<AnimState>('cover');

  const isPhone = useMediaQuery('(min-width: 50rem)') === false;
  
  useEffect(() => {
    function handleKeyPress (evt: any) {
      if (animState !== 'website') {
        setAnimState('website');
      }
    }
    
    document.addEventListener('keypress', handleKeyPress);
    document.addEventListener('touchend', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
      document.removeEventListener('touchend', handleKeyPress);
    }
  }, [animState]);

  return (
    <div className={styles.websiteFrame}>
      {animState === 'cover' && <div
        className={styles.curtain}
        data-side={curtainSide}
        onAnimationEnd={handleCoverAnimationEnd}
      >
        <img src="/img/curtain-default.svg" />
      </div>}

      {animState === 'logo' && <div
        className={$cl(styles.introLogoContainer)}
        onAnimationEnd={handleLogoAnimationEnd}
      >
        <SiteImage
          className={styles.introLogo}
          image={IMG.aracnephobia_logo}
        />
      </div>}

      {animState === 'website' && <>
        <div className={styles.headerContainer}>
          {isPhone === false && <WebHeader
            curtainSide={curtainSide}
            logo={logo}
          />}
          {isPhone && <PhoneHeader />}
        </div>
        <div className={styles.pageContainer}>
          {children}
        </div>
      </>}
    
      {navigator
        && isPhone === false
        && animState === 'website'
        && <div className={styles.navigator}>
        <Navigator />
      </div>}
    </div>
  );

  function handleCoverAnimationEnd () {
    setAnimState('logo');
  }

  function handleLogoAnimationEnd (evt: React.AnimationEvent<HTMLDivElement>) {
    if (evt.animationName === styles.bounceOut) {
      setAnimState('website');
    }
  }
}

export default Layout;
