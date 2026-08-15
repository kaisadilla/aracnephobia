import { useServer } from 'context/useServer';
import { useSong } from 'context/useSong';
import { Lrc, type Lyric } from 'lrc-kit';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { DivProps } from 'types';
import { $cl } from 'utils';
import styles from './Lyrics.module.scss';

export interface LyricsProps extends DivProps {
  solidBackground?: boolean;
}

function Lyrics ({
  className,
  solidBackground = false,
  ...divProps
}: LyricsProps) {
  const srv = useServer();
  const song = useSong();

  const [ lyrics, setLyrics ] = useState<Lyric[] | null>(null);

  const activeLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadLyrics();
  }, [song.song?.internalName]);

  const currentLine = useMemo(() => {
    if (!lyrics) return;

    let id = 0;

    for (let i = 0; i < lyrics.length; i++) {
      if (lyrics[i].timestamp <= song.time / 1000) id = i;
      else break;
    }

    return id;
  }, [lyrics, song.time]);

  useEffect(() => {
    activeLineRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, [currentLine]);

  if (!song.song) return (
    <div
      className={$cl(styles.noLyrics, className)}
      data-solid={solidBackground}
      {...divProps}
    >
      Choose a song.
    </div>
  );

  if (!song.song.internalName) return (
    <div
      className={$cl(styles.noLyrics, className)}
      data-solid={solidBackground}
      {...divProps}
    >
      (No lyrics available)
    </div>
  );

  if (!lyrics) return (
    <div
      className={$cl(styles.noLyrics, className)}
      data-solid={solidBackground}
      {...divProps}
    >
      Loading...
    </div>
  );

  return (
    <div
      className={$cl(styles.lyrics, className)}
      data-solid={solidBackground}
      {...divProps}
    >
      {lyrics.map((l, i) => <div
        key={i}
        ref={i === currentLine ? activeLineRef : null}
        className={styles.line}
        onClick={() => handleLyricsClick(l)}
        data-active={i === currentLine}
      >
        {l.content}
      </div>)}
    </div>
  );

  function handleLyricsClick (line: Lyric) {
    if (!song.audioRef.current) return;

    song.audioRef.current.currentTime = line.timestamp;
    song.setTime(Math.floor(line.timestamp * 1000));
  }
  
  async function loadLyrics () {
    if (!song.song?.internalName) return;

    const resp = await fetch(srv.url + song.song.internalName + ".lrc");
    const data = await resp.text() as string;

    const lrc = Lrc.parse(data);
    const lines = lrc.lyrics;
    
    setLyrics(lines);
  }
}

export default Lyrics;
