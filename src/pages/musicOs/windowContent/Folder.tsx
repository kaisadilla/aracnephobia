import i_gallery from 'assets/img/music_os/folder/gallery.png';
import i_link_yt from 'assets/img/music_os/folder/link_yt.png';
import i_portfolio from 'assets/img/music_os/folder/portfolio.png';
import i_song from 'assets/img/music_os/folder/song.png';
import i_folder_bg_leak from 'assets/img/music_os/folder_bg_leak.png';
import i_folder_bg from 'assets/img/music_os/folder_bg_logo.png';
import TintedImg from 'components/TintedImg';
import { FolderWindowContent, LinkFile, Picture, Song } from '../files';
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
      {content.folder.isLeak === false && <TintedImg
        className={styles.bg}
        src={i_folder_bg}
      />}
      {content.folder.isLeak && <img
        className={styles.bg} 
        src={i_folder_bg_leak}
      />}

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

        {content.folder.links.map((l, i) => <_Icon
          key={i}
          type='link'
          link={l}
        />)}
      </div>
    </div>
  );
}

interface _IconProps {
  type: 'song' | 'gallery' | 'portfolio' | 'link';
  song?: Song | null;
  pictures?: Picture[] | null;
  link?: LinkFile | null;
}

function _Icon ({
  type,
  song = null,
  pictures = null,
  link = null,
}: _IconProps) {
  const ctx = useMusicOs();

  const icon = (() => {
    if (type === 'gallery') return i_gallery;
    if (type === 'portfolio') return i_portfolio;
    if (type === 'link') {
      if (link!.site === 'youtube') return i_link_yt;

      return i_link_yt;
    }

    return i_song;
  })();

  const name = (() => {
    if (type === 'gallery') return "Photo gallery";
    if (type === 'portfolio') return "Drawing portfolio";
    if (type === 'link') return link!.name;

    return song!.name;
  })();

  return (
    <div
      className={styles.icon}
      onPointerDown={handleClick}
    >
      <img src={icon} />
      <span>{name}</span>
    </div>
  );

  function handleClick () {
    if (type === 'song') {
       ctx.openWindow(
        {
          type: 'player',
          song: song!,
        },
        {
          width: 765,
          height: 800,
        }
      );
    }
    else if (type === 'link') {
      window.open(link!.url, '_blank');
    }
    else {
      ctx.openWindow(
        {
          type: 'gallery',
          name: (type === 'gallery' ? "Photo Gallery" : "Drawing Portfolio"),
          pictures: pictures!
        }
      );
    }
  }
}


export default FolderContent;
