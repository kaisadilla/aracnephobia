import i_folder_bg from 'assets/img/music_os/folder_bg_logo.png';
import i_play from 'assets/img/music_os/player/play.png';
import TintedImg from 'components/TintedImg';
import { useState } from 'react';
import { GalleryWindowContent } from '../files';
import styles from './Gallery.module.scss';

export interface GalleryContentProps {
  content: GalleryWindowContent,
}

function GalleryContent ({
  content,
}: GalleryContentProps) {
  const [ idx, setIdx ] = useState(0);

  const img = content.pictures[idx];

  return (
    <div className={styles.content}>
      <TintedImg className={styles.bg} src={i_folder_bg} />

      <div className={styles.nav}>
        <button className={styles.prev} onClick={handlePrev}>
          <TintedImg src={i_play} />
        </button>

        <div className={styles.title}>{img.name}</div>

        <button className={styles.next} onClick={handleNext}>
          <TintedImg src={i_play} />
        </button>
      </div>

      <div className={styles.imgContainer}>
        <img
          src={img.image}
        />
      </div>
    </div>
  );

  function handlePrev () {
    setIdx(prev => prev === 0 ? content.pictures.length - 1 : prev -1);
  }

  function handleNext () {
    setIdx(prev => (prev + 1) % content.pictures.length);
  }
}

export default GalleryContent;
