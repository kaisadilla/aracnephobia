import Layout from 'components/Layout';
import { useServer } from 'context/useServer';
import { useSong } from 'context/useSong';
import { useEffect, useRef } from 'react';
import CollectionPanel from './CollectionPanel';
import Lyrics from './Lyrics';
import Nav from './Nav';
import styles from './page.module.scss';
import Player from './Player';

export interface MusicPageProps {
  
}

function MusicPage (props: MusicPageProps) {
  const song = useSong();
  const srv = useServer();

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    srv.tryLoadIndex();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const time = song.time / 1000;
    const diff = Math.abs(video.currentTime - time);
    if (diff < 0.15) return;

    video.currentTime = time;
  }, [song.time]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (song.isPlaying) {
      video.play();
    }
    else {
      video.pause();
    }
  }, [song.isPlaying]);

  return (
    <Layout
      curtainSide='none'
      logo='music'
    >
      <div className={styles.page}>
        <Nav className={styles.nav} />
        <CollectionPanel className={styles.collection} />
        <div className={styles.lyricsContainer}>
          {song.song?.hasVideo && <video
            ref={videoRef}
            className={styles.musicVideo}
            src={srv.url + song.song.internalName + ".webm"}
            autoPlay
            muted
            playsInline
            aria-hidden={true}
            tabIndex={-1}
          />}
          <Lyrics className={styles.lyrics} />
        </div>
        {song.song && <Player className={styles.player} />}
      </div>
    </Layout>
  );
}

export default MusicPage;
