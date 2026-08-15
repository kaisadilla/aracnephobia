import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import i_broken from 'assets/img/music_os/file/broken.png';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';
import React from 'react';
import styles from './Icon.module.scss';
import { File } from './files';
import { useMusicOs } from './useMusicOsCtx';

export const ICON_WIDTH = 95;
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
        image={i_broken}
      />
      <div className={styles.fileName}>{file.name}</div>
    </div>
  );

  function handlePointerDown (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    listeners?.onPointerDown?.(evt);
    onPointerDown?.(evt);
  }

  function handleDoubleClick () {
    // TODO
  }
}

export default Icon;
