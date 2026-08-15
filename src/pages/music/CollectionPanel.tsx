import { LinkIcon } from '@phosphor-icons/react';
import type { Song } from 'api/music';
import { useServer } from 'context/useServer';
import { useSong } from 'context/useSong';
import { useState } from 'react';
import type { DivProps } from 'types';
import { $cl, copyToClipboard } from 'utils';
import styles from './CollectionPanel.module.scss';
import LeftPanel from './LeftPanel';

export interface CollectionPanelProps extends DivProps {
  
}

function CollectionPanel ({
  className,
  ...divProps
}: CollectionPanelProps) {
  const srv = useServer();
  const songCtx = useSong();

  const [ open, setOpen ] = useState(true);

  if (!srv.index) return null;

  return (
    <LeftPanel
      className={$cl(styles.panel, className)}
      open={open}
      onChangeOpen={handleChangeOpen}
      {...divProps}
    >
      <div className={styles.container}>
        {srv.index.map((album, a) => <div
          key={a}
          className={styles.album}
        >
          <div className={styles.name}>
            {album.name}
            <LinkIcon
              className={styles.copyLink}
              onClick={() => handleClickAlbumLink(album.name)}
            />
          </div>

          <div className={styles.songContainer}>
            {album.songs.map((song, s) => <button
              key={s}
              className={styles.song}
              onClick={() => handleClickSong(song)}
              data-active={song.id === songCtx.song?.id}
            >
              <img
                className={styles.pic}
                src={srv.url + song.internalName + ".png"}
              />
                
              <div className={styles.index}>
                #{s + 1}
              </div>

              <div className={styles.name}>
                {song.displayName}&#32;
                <LinkIcon
                  className={styles.copyLink}
                  onClick={evt => handleClickSongLink(evt, song.displayName)}
                />
              </div>
            </button>)}
          </div>
        </div>)}
      </div>
    </LeftPanel>
  );

  function handleChangeOpen (open: boolean) {
    setOpen(open);
  }

  function handleClickSong (song: Song) {
    if (!srv.index) return;

    setOpen(false);
    songCtx.setSong(song);
  }

  function handleClickAlbumLink (album: string) {
    const websiteUrl = window.location.href;

    copyToClipboard(websiteUrl + `?a=${album.replaceAll(" ", "%20")}`);
  }

  function handleClickSongLink (evt: React.MouseEvent, song: string) {
    evt.stopPropagation();
    
    const websiteUrl = window.location.href;

    copyToClipboard(websiteUrl + `?s=${song.replaceAll(" ", "%20")}`);
  }
}

export default CollectionPanel;
