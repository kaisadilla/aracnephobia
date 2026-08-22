import i_song from 'assets/img/music_os/folder/song.png';
import TextOnNoise from 'components/TextOnNoise';
import { useState } from 'react';
import { $cl } from 'utils';
import { PlaylistWindowContent, Song, THE_LEAK, THE_MASK } from '../files';
import MusicPlayer from '../MusicPlayer';
import styles from './Playlist.module.scss';

export interface PlaylistContentProps {
  content: PlaylistWindowContent;
}

function PlaylistContent (props: PlaylistContentProps) {
  const [ song, setSong ] = useState<Song | null>(null);

  return (
    <div className={styles.content}>
      <div className={styles.player}>
        {!song && <div className={styles.offline}>
          <TextOnNoise message="No song selected" />
        </div>}
        {song && <MusicPlayer song={song} />}
      </div>

      <div className={styles.playlist}>
        <div className={$cl(styles.album, styles.theLeak)}>
          <div className={styles.title}>
            THE//LEAK
          </div>
          <div className={styles.list}>
            {THE_LEAK.songs.map((s, i) => <div
              key={i}
              className={styles.entry}
              onClick={() => handleClickSong(s)}
            >
              <img src={i_song} />
              <div>{s.name}</div>
            </div>)}
          </div>
        </div>

        <div className={$cl(styles.album, styles.theMask)}>
          <div className={styles.title}>
            THE//MASK
          </div>
          <div className={styles.list}>
            {THE_MASK.songs.map((s, i) => <div
              key={i}
              className={styles.entry}
              onClick={() => handleClickSong(s)}
            >
              <img src={i_song} />
              <div>{s.name}</div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );

  function handleClickSong (song: Song) {
    setSong(song);
  }
}

export default PlaylistContent;
