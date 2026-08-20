import i_pause from 'assets/img/music_os/player/pause.png';
import i_play from 'assets/img/music_os/player/play.png';
import i_stop from 'assets/img/music_os/player/stop.png';
import TintedImg from 'components/TintedImg';
import { Lrc, Lyric } from 'lrc-kit';
import { useEffect, useMemo, useRef, useState } from 'react';
import { PlayerWindowContent } from '../files';
import { useMusicOs } from '../useMusicOsCtx';
import styles from './Player.module.scss';

export interface PlayerContentProps {
  content: PlayerWindowContent;
}

function PlayerContent ({
  content,
}: PlayerContentProps) {
  const [ currentTime, setCurrentTime ] = useState(0);
  const [ lyrics, setLyrics ] = useState<Lyric[] | null>();

  const ctx = useMusicOs();
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const activeLineRef = useRef<HTMLDivElement>(null);

  const path = `music_os/${content.song.folder}/`;
  
  useEffect(() => {
    loadLyrics();
  }, [content.song?.internalName]);
  
  const currentLine = useMemo(() => {
    if (!lyrics) return;
    if (!audioRef.current) return;

    let id = 0;

    for (let i = 0; i < lyrics.length; i++) {
      if (lyrics[i].timestamp <= currentTime) id = i;
      else break;
    }

    return id;
  }, [lyrics, currentTime]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (ctx.volume < 1) audioRef.current.volume = 0 / 3;
    else if (ctx.volume < 2) audioRef.current.volume = 1 / 3;
    else if (ctx.volume < 3) audioRef.current.volume = 2 / 3;
    else audioRef.current.volume = 1;
  }, [ctx.volume]);

  useEffect(() => {
    activeLineRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, [currentLine]);

  return (
    <div className={styles.content}>
      <audio
        ref={audioRef}
        src={path + content.song.internalName + ".mp3"}
        autoPlay={true}
        onTimeUpdate={evt => setCurrentTime(evt.currentTarget.currentTime)}
        onEnded={handlePlayerEnd}
        onPause={handlePlayerPause}
        onPlay={handlePlayerPlay}
      />

      <video
        ref={videoRef}
        className={styles.video}
        src={path + content.song.internalName + ".mp4"}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden={true}
        tabIndex={-1}
      />

      <div className={styles.hud}>
        <div
          className={styles.lyrics}
        >
          {lyrics && lyrics.map((l, i) => <div
            key={i}
            ref={i === currentLine ? activeLineRef : null}
            className={styles.line}
            onClick={() => handleLyricsClick(l)}
            data-active={i === currentLine}
          >
            {l.content}
          </div>)}
        </div>

        <div className={styles.controls}>
          <div className={styles.ribbon}>
            <button onClick={handlePlay}>
              <TintedImg src={i_play} />
            </button>
            <button onClick={handlePause}>
              <TintedImg src={i_pause} />
            </button>
            <button onClick={handleStop}>
              <TintedImg src={i_stop} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  async function loadLyrics () {
      if (!content.song?.internalName) return;
  
      const resp = await fetch(path + content.song.internalName + ".lrc");
      const data = await resp.text() as string;
  
      const lrc = Lrc.parse(data);
      const lines = lrc.lyrics;
      
      setLyrics(lines);
  }

  function handlePlayerEnd () {
    videoRef.current?.pause();
  }

  function handlePlayerPause () {
    videoRef.current?.pause();
  }

  function handlePlayerPlay () {
    videoRef.current?.play();
  }

  function handlePlay () {
    videoRef.current?.play();
    audioRef.current?.play();
  }

  function handlePause () {
    videoRef.current?.pause();
    audioRef.current?.pause();
  }

  function handleStop () {
    if (!audioRef.current) return;

    videoRef.current?.pause();
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }

  function handleLyricsClick (line: Lyric) {
    if (!audioRef.current) return;

    audioRef.current.currentTime = line.timestamp;
  }
}

export default PlayerContent;
