import i_start from 'assets/img/music_os/start.png';
import i_amazon from 'assets/img/music_os/start/amazon.png';
import i_apple from 'assets/img/music_os/start/apple.png';
import i_bandcamp from 'assets/img/music_os/start/bandcamp.png';
import i_qobuz from 'assets/img/music_os/start/qobuz.png';
import i_spotify from 'assets/img/music_os/start/spotify.png';
import i_tidal from 'assets/img/music_os/start/tidal.png';
import i_youtube from 'assets/img/music_os/start/youtube.png';
import i_heart_empty from 'assets/img/music_os/taskbar/heart_empty.png';
import i_heart_filled from 'assets/img/music_os/taskbar/heart_filled.png';
import i_volume from 'assets/img/music_os/taskbar/volume.png';
import TintedImg from 'components/TintedImg';
import { useClickOutside } from 'hooks/useClickOutside';
import { useRef, useState } from 'react';
import { OsWindow } from './files';
import styles from './Taskbar.module.scss';
import { useMusicOs } from './useMusicOsCtx';

export interface TaskbarProps {
  
}

const LINKS = {
  apple: "https://music.apple.com/es/album/i-survived-wrong-ep/6785887143",
  spotify: "https://open.spotify.com/album/1NKrgrABkn1CQaNFxU450K?go=1&utm_source=Original_Original&utm_medium=Original&utm_content=18c57965-5cbf-4d31-8bfc-84884f070396_none_Aracnephobia_none_I%20Survived%20Wrong_none_20260629_https%3A%2F%2Ft.co%2F_beatclap_none_beatclap.es%2Fi-survived-wrong-fqvwyt",
  amazon: "https://music.amazon.com/albums/B0H6WYXRQ6?tag=linkfiregen&ie=UTF8&linkCode=as2&ascsubtag=6eb0e6d0a4091668429a1a7b7a7c6b0a&ref=dmm_acq_soc_es_u_lfire_lp_x_6eb0e6d0a4091668429a1a7b7a7c6b0a",
  youtube: "https://www.youtube.com/@AracnePhobiaMusic",
  qobuz: "https://open.qobuz.com/album/w2g7xg2aff0rn?lf=6eb0e6d0a4091668429a1a7b7a7c6b0a",
  tidal: "http://www.tidal.com/album/538144398",
  bandcamp: "https://aracnephobia.bandcamp.com/album/i-survived-wrong-ep-0",
};

function Taskbar (props: TaskbarProps) {
  const [ isAudioOpen, setAudioOpen ] = useState(false);

  const ctx = useMusicOs();

  const startRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(
    startRef, menuRef, ctx.isStartMenuOpen, () => ctx.setStartMenuOpen(false)
  );

  return (
    <div className={styles.taskbar}>
      <button
        ref={startRef}
        className={styles.startBtn}
        onPointerDown={handleClickStart}
      >
        <img src={i_start} />
        <span>START</span>
      </button>

      <div className={styles.tabContainer}>
        {Object.keys(ctx.openWindows).map(k => ctx.openWindows[k]).map(w => (
          <_Tab key={w.id} window={w} />
        ))}
      </div>

      <div className={styles.systray}>
        <TintedImg
          className={styles.volume}
          src={i_volume}
          onClick={() => ctx.setVolume(0)}
        />
        <TintedImg
          className={styles.heart}
          src={ctx.volume > 0 ? i_heart_filled : i_heart_empty}
          data-filled={ctx.volume > 0}
          onClick={() => ctx.setVolume(1)}
        />
        <TintedImg
          className={styles.heart}
          src={ctx.volume > 1 ? i_heart_filled : i_heart_empty}
          data-filled={ctx.volume > 1}
          onClick={() => ctx.setVolume(2)}
        />
        <TintedImg
          className={styles.heart}
          src={ctx.volume > 2 ? i_heart_filled : i_heart_empty}
          data-filled={ctx.volume > 2}
          onClick={() => ctx.setVolume(3)}
        />
      </div>

      {ctx.isStartMenuOpen && <div ref={menuRef} className={styles.startMenu}>
        <button
          className={styles.item}
          onPointerDown={() => handleClickStartElement(LINKS.spotify)}
        >
          <TintedImg src={i_spotify} />
          <span>Spotify</span>
        </button>

        <button
          className={styles.item}
          onPointerDown={() => handleClickStartElement(LINKS.bandcamp)}
        >
          <TintedImg src={i_bandcamp} />
          <span>Bandcamp</span>
        </button>

        <button
          className={styles.item}
          onPointerDown={() => handleClickStartElement(LINKS.apple)}
        >
          <TintedImg src={i_apple} />
          <span>Apple Music</span>
        </button>

        <button
          className={styles.item}
          onPointerDown={() => handleClickStartElement(LINKS.youtube)}
        >
          <TintedImg src={i_youtube} />
          <span>YouTube Music</span>
        </button>

        <button
          className={styles.item}
          onPointerDown={() => handleClickStartElement(LINKS.amazon)}
        >
          <TintedImg src={i_amazon} />
          <span>Amazon Music</span>
        </button>

        <button
          className={styles.item}
          onPointerDown={() => handleClickStartElement(LINKS.qobuz)}
        >
          <TintedImg src={i_qobuz} />
          <span>Qobuz Music</span>
        </button>

        <button
          className={styles.item}
          onPointerDown={() => handleClickStartElement(LINKS.tidal)}
        >
          <TintedImg src={i_tidal} />
          <span>Tidal Music</span>
        </button>
      </div>}
    </div>
  );

  function handleClickStart () {
    ctx.setStartMenuOpen(!ctx.isStartMenuOpen);
  }

  function handleClickAudio () {
    setAudioOpen(prev => !prev);
  }

  function handleClickStartElement (url: string) {
    window.open(url, '_blank');
    ctx.setStartMenuOpen(!ctx.isStartMenuOpen);
  }
}

interface _TabProps {
  window: OsWindow;
}

function _Tab ({
  window,
}: _TabProps) {
  const ctx = useMusicOs();

  return (
    <div
      className={styles.tab}
      data-focused={
        ctx.focusedWindow === window.id
        && window.isMinimized === false
      }
      onPointerDown={handlePointerDown}
    >
      <span>{"Window"}</span>
    </div>
  );

  function handlePointerDown () {
    if (ctx.focusedWindow === window.id) {
      ctx.setWindowOnTop('0');
      ctx.updateWindow(window.id, {
        ...window,
        isMinimized: true,
      });
    }
    else {
      ctx.setWindowOnTop(window.id);
      ctx.updateWindow(window.id, {
        ...window,
        isMinimized: false,
      });
    }
  }
}


export default Taskbar;
