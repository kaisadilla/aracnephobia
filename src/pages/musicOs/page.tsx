import i_bg from 'assets/img/music_os/bg.png';
import v_load from 'assets/img/music_os/load.mp4';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import IconGrid from './IconGrid';
import styles from './page.module.scss';
import Taskbar from './Taskbar';
import { useMusicOs } from './useMusicOsCtx';
import WindowArea from './WindowArea';

export interface MusicOsPageProps {
  
}

function MusicOsPage (props: MusicOsPageProps) {
  const ctx = useMusicOs();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [ isLoading, setLoading ] = useState(true);

  useEffect(() => {
    function handleKeyPress (evt: any) {
      setLoading(false);
    }
    
    document.addEventListener('keypress', handleKeyPress);
    document.addEventListener('touchend', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
      document.removeEventListener('touchend', handleKeyPress);
    }
  }, []);

  return (
    <div
      className={styles.page}
      data-leak-mode={ctx.isLeakMode}
    >
      <Helmet>
        <title>Aracnephobia's Music OS</title>
        <meta property="og:title" content="Aracnephobia's Music" />
        <meta property="og:description" content="All of Aracnephobia's songs in a needlessly complex retro interface." />
        <meta property="og:image" content="https://aracnephobia.com/logo-music.png" />
      </Helmet>

      <div className={styles.desktop}>
        <div
          className={styles.bg}
          //src={i_bg}
          style={{
            maskImage: `url('${i_bg}')`,
            WebkitMaskBoxImage: `url('${i_bg}')`,
          }}
        />
        <IconGrid />
        <WindowArea />
      </div>
      <div className={styles.taskbar}>
        <Taskbar />
      </div>

      
      {isLoading && <video
        ref={videoRef}
        className={styles.load}
        src={v_load}
        autoPlay
        muted
        playsInline
        aria-hidden={true}
        tabIndex={-1}
        onEnded={() => setLoading(false)}
      />}
    </div>
  );
}

export default MusicOsPage;
