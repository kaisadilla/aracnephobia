import i_gallery from 'assets/img/music_os/folder/gallery.png';
import i_portfolio from 'assets/img/music_os/folder/portfolio.png';
import i_song from 'assets/img/music_os/folder/song.png';
import i_folder_bg from 'assets/img/music_os/folder_bg_logo.png';
import { FolderWindowContent, Picture, Song } from '../files';
import { useMusicOs } from '../useMusicOsCtx';
import styles from './Folder.module.scss';

export interface FolderContentProps {
  content: FolderWindowContent;
}

function FolderContent ({
  content,
}: FolderContentProps) {
  return (
    <div className={styles.content}>
      <div
        className={styles.bg}
        style={{
          maskImage: `url('${i_folder_bg}')`,
          WebkitMaskBoxImage: `url('${i_folder_bg}')`,
        }}
      />

      <div className={styles.list}>
        {content.folder.songs.map(s => <_Icon
          key={s.internalName}
          type='song'
          song={s}
        />)}

        <_Icon
          type='gallery'
          pictures={content.folder.photos}
        />

        <_Icon
          type='portfolio'
          pictures={content.folder.photos}
        />
      </div>
    </div>
  );
}

interface _IconProps {
  type: 'song' | 'gallery' | 'portfolio';
  song?: Song | null;
  pictures?: Picture[] | null;
}

function _Icon ({
  type,
  song = null,
  pictures = null,
}: _IconProps) {
  const ctx = useMusicOs();

  const icon = (() => {
    if (type === 'gallery') return i_gallery;
    if (type === 'portfolio') return i_portfolio;
    return i_song;
  })();

  const name = (() => {
    if (type === 'gallery') return "Photo gallery";
    if (type === 'portfolio') return "Drawing portfolio";
    return song!.name;
  })();

  return (
    <div
      className={styles.icon}
      onPointerDown={handleClickSong}
    >
      <img src={icon} />
      <span>{name}</span>
    </div>
  );

  function handleClickSong () {
    if (type === 'song') ctx.openWindow(
      {
        type: 'player',
        song: song!,
      },
      {
        width: 765,
        height: 800,
      }
    );
    else ctx.openWindow(
      {
        type: 'gallery',
        name: (type === 'gallery' ? "Photo Gallery" : "Drawing Portfolio"),
        pictures: pictures!
      }
    );
  }
}


export default FolderContent;
