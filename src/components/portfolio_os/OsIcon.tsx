import React from 'react';
import styles from './OsIcon.module.scss'
import SiteImage from 'components/SiteImage';
import { IMG } from 'img/img';
import { $cl } from 'utils';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Folder, OsFile, useOsContext } from 'context/usePortfolioContext';

export const ICON_WIDTH = 95;
export const ICON_HEIGHT = 100;

export interface OsIconProps {
    file: OsFile;
    position: { top: number, left: number }
    index?: number;
    selected?: boolean;
    onPointerDown?: (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function OsIcon ({
    file,
    position,
    index = 0,
    selected = false,
    onPointerDown,
}: OsIconProps) {
    const ctx = useOsContext();

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: file.name
    });

    const style: React.CSSProperties = {
        top: position.top + "px",
        left: position.left + "px",
        transform: CSS.Translate.toString(transform),
        zIndex: index,
    }

    return (
        <div
            ref={setNodeRef}
            className={$cl(styles.icon, selected && styles.selected)}
            style={style}
            {...listeners}
            {...attributes}
            onPointerDown={handlePointerDown}
            onDoubleClick={handleDoubleClick}
        >
            <ChromaticAberrationImage
                className={styles.image}
                image={IMG.os.folder}
                noAlt
            />
            <div className={styles.fileName}>{file.name}</div>
        </div>
    );

    function handlePointerDown (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        listeners?.onPointerDown?.(evt);
        onPointerDown?.(evt);
    }

    function handleDoubleClick () {
        const uuid = ctx.openWindow({
            type: 'folder',
            folder: file as Folder,
        });
        ctx.setWindowOnTop(uuid);
    }
}

export default OsIcon;
