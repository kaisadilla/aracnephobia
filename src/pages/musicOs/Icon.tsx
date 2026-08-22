import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import i_err_mask from 'assets/img/music_os/error/mask.png';
import i_broken from 'assets/img/music_os/file/broken.png';
import i_contact from 'assets/img/music_os/file/contact.png';
import i_coven from 'assets/img/music_os/file/coven.png';
import i_folder from 'assets/img/music_os/file/folder.png';
import i_leak from 'assets/img/music_os/file/leak.png';
import i_playlist from 'assets/img/music_os/file/playlist.png';
import i_wish from 'assets/img/music_os/file/wish.png';
import i_witch from 'assets/img/music_os/file/witch.png';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';
import React from 'react';
import styles from './Icon.module.scss';
import { ErrorWindowContent, File, FolderWindowContent, InfoWindowContent, PlaylistWindowContent } from './files';
import { useMusicOs } from './useMusicOsCtx';

export const ICON_WIDTH = 130;
export const ICON_HEIGHT = 100;

export interface IconProps {
  file: File,
  position: { top: number, left: number, };
  index?: number;
  selected?: boolean;
  onPointerDown?: (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function Icon ({
  file,
  position,
  index = 0,
  selected = false,
  onPointerDown,
}: IconProps) {
  const ctx = useMusicOs();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: file.name,
  });

  const style: React.CSSProperties = {
    top: position.top + "px",
    left: position.left + "px",
    transform: CSS.Translate.toString(transform),
    zIndex: index,
  };

  const iconImg = (() => {
    if (file.type === 'broken') {
      return file.isLeak ? i_leak : i_broken;
    }
    if (file.type === 'folder') {
      return file.isLeak ? i_leak : i_folder;
    }
    if (file.type === 'playlist') return i_playlist;
    if (file.type === 'witch') return i_witch;
    if (file.type === 'coven') return i_coven;
    if (file.type === 'wish') return i_wish;
    if (file.type === 'contact') return i_contact;

    return i_broken;
  })();

  return (
    <div
      ref={setNodeRef}
      className={styles.icon}
      style={style}
      {...listeners}
      {...attributes}
      onPointerDown={handlePointerDown}
      onDoubleClick={handleDoubleClick}
      data-selected={selected}
    >
      <ChromaticAberrationImage
        className={styles.image}
        image={iconImg}
      />
      <div className={styles.fileName}>{file.name}</div>
    </div>
  );

  function handlePointerDown (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    listeners?.onPointerDown?.(evt);
    onPointerDown?.(evt);
  }

  function handleDoubleClick () {
    if (file.type === 'witch') {
      window.open("https://www.aracnephobia.com", '_blank');
      return;
    }

    const content = (() => {
      if (file.type === 'broken') {
        return {
          type: 'error',
          image: file.image,
          title: file.title,
          message: file.message,
        } as ErrorWindowContent;
      }
      if (file.type === 'folder') {
        return {
          type: 'folder',
          folder: file,
        } as FolderWindowContent;
      }
      if (file.type === 'coven') {
        return {
          type: 'info',
          infoType: 'coven',
        } as InfoWindowContent;
      }
      if (file.type === 'playlist') {
        return {
          type: 'playlist'
        } as PlaylistWindowContent;
      }
      if (file.type === 'wish') {
        return {
          type: 'error',
          image: i_err_mask,
          title: "ERROR 01 // IDENTITY REQUIRED",
          message: "You cannot remove a mask while you still need it to survive.",
        } as ErrorWindowContent;
      }

      return null;
    })();

    const dims = (() => {
      if (file.type === 'broken') {
        return {
          width: 600,
          height: 600,
        }
      }
      if (file.type === 'coven') {
        return {
          width: 850,
          height: 600,
        }
      }
      if (file.type === 'playlist') {
        return {
          width: 1000,
          height: 600,
        }
      }
      if (file.type === 'wish') {
        return {
          width: 600,
          height: 600,
        }
      }

      return {
        width: 720,
        height: 475,
      }
    })();

    if (content === null) return;

    const isLeak = (file.type === 'broken' || file.type === 'folder')
      && file.isLeak;

    const uuid = ctx.openWindow(content, dims, isLeak);
    ctx.setWindowOnTop(uuid);

    if (isLeak) ctx.setLeakMode(true);
  }
}

export default Icon;
