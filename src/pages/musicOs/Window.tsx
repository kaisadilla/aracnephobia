import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import i_close from 'assets/img/music_os/window/close.png';
import i_maximize from 'assets/img/music_os/window/maximize.png';
import i_minimize from 'assets/img/music_os/window/minimize.png';
import i_restore from 'assets/img/music_os/window/restore.png';
import { NumberSize } from 're-resizable';
import { Direction } from 're-resizable/lib/resizer';
import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { getWindowName, OsWindow } from './files';
import { useMusicOs } from './useMusicOsCtx';
import styles from './Window.module.scss';
import ErrorContent from './windowContent/Error';
import FolderContent from './windowContent/Folder';
import GalleryContent from './windowContent/Gallery';
import InfoContent from './windowContent/Info';
import PlayerContent from './windowContent/Player';

export interface WindowProps {
  parentWidth: number;
  parentHeight: number;
  window: OsWindow,
  index?: number;
  onPointerDown?: (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function Window ({
  parentWidth,
  parentHeight,
  window,
  index,
  onPointerDown,
}: WindowProps) {
  const ctx = useMusicOs();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: window.id,
  });

  const [ size, setSize ] = useState({ ...window.initialSize });

  const rndStyle: React.CSSProperties = {
    top: window.isMaximized ? 0 : window.position.top + "px",
    left: window.isMaximized ? 0 : window.position.left + "px",
    zIndex: index,
    pointerEvents: 'auto',
  };

  const windowStyle: React.CSSProperties = {
    transform: window.isMaximized ? "" : CSS.Translate.toString(transform),
  };

  const windowSize = window.isMaximized
    ? { width: parentWidth, height: parentHeight }
    : size;

  return (
    <Rnd
      className={styles.windowContainer}
      disableDragging={true}
      defaultSize={size}
      minWidth={196}
      minHeight={128}
      maxWidth={parentWidth}
      maxHeight={parentHeight}
      style={rndStyle}
      onResize={handleResize}
      size={windowSize}
      onPointerDown={onPointerDown}
    >
      <div
        className={styles.window}
        style={windowStyle}
        data-maximized={window.isMaximized}
      >
        <div className={styles.titlebar}>
          <div
            className={styles.title}
            {...attributes}
            {...listeners}
            onPointerMove={handleTitleDrag}
          >
            {getWindowName(window)}
          </div>
          <div className={styles.ribbon}>
            <button
              className={styles.minimize}
              onPointerDown={handleMinimize}
            >
              <img src={i_minimize} />
            </button>

            <button
              className={styles.maximize}
              onPointerDown={handleMaximize}
            >
              {window.isMaximized === false && <img src={i_maximize} />}
              {window.isMaximized && <img src={i_restore} />}
            </button>

            <button
              className={styles.minimize}
              onPointerDown={handleClose}
            >
              <img src={i_close} />
            </button>
          </div>
        </div>

        <div className={styles.content}>
          {window.content.type === 'error' && <ErrorContent
            content={window.content}
          />}
          {window.content.type === 'folder' && <FolderContent
            content={window.content}
          />}
          {window.content.type === 'player' && <PlayerContent
            content={window.content}
          />}
          {window.content.type === 'info' && <InfoContent
            content={window.content}
          />}
          {window.content.type === 'gallery' && <GalleryContent
            content={window.content}
          />}
        </div>
      </div>
    </Rnd>
  );

  function handleResize (
    evt: MouseEvent | TouchEvent,
    direction: Direction,
    elementRef: HTMLElement,
    delta: NumberSize,
  ) {
    const newPos = { ...window.position };

    if (direction.toLowerCase().includes('left')) {
      newPos.left += size.width - elementRef.offsetWidth;
    }
    if (direction.toLowerCase().includes('top')) {
      newPos.top += size.height - elementRef.offsetHeight;
    }

    ctx.updateWindow(window.id, {
      ...window,
      position: newPos,
    });

    setSize({
      width: elementRef.offsetWidth,
      height: elementRef.offsetHeight,
    });
  }

  function handleTitleDrag (evt: React.PointerEvent<HTMLDivElement>) {
    if (evt.pressure <= 0) return;

    const top = window.isMaximized ? 0 : window.position.top;

    ctx.updateWindow(window.id, {
      ...window,
      position: { ...window.position, top, },
      isMaximized: false,
    })
  }

  function handleMinimize () {
    ctx.updateWindow(window.id, {
      ...window,
      isMinimized: true,
    });
  }

  function handleMaximize () {
    ctx.updateWindow(window.id, {
      ...window,
      isMaximized: !window.isMaximized,
    });
  }

  function handleClose () {
    ctx.closeWindow(window.id);
  }
}

export default Window;
