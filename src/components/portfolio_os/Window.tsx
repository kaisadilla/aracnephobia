import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';
import { Folder, OsFile, OsWindow, useOsContext } from 'context/usePortfolioContext';
import { IMG } from 'img/img';
import React, { useState } from 'react';
import styles from './window.module.scss';
import { Rnd } from 'react-rnd';
import { NumberSize } from 're-resizable';
import { Direction } from 're-resizable/lib/resizer';
import { $cl } from 'utils';

export interface WindowProps {
    parentWidth: number;
    parentHeight: number;
    window: OsWindow;
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
    const ctx = useOsContext();

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: window.id,
    });

    const [size, setSize] = useState({width: 500, height: 300});
    
    const rndStyle: React.CSSProperties = {
        top: window.isMaximized ? 0 : window.position.top + "px",
        left: window.isMaximized ? 0 : window.position.left + "px",
        zIndex: index,
        pointerEvents: 'auto',
    }

    const windowStyle: React.CSSProperties = {
        transform: window.isMaximized ? "" : CSS.Translate.toString(transform),
    }

    const windowSize = window.isMaximized ? { width: parentWidth, height: parentHeight } : size;

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
            onResizeStop={handleResizeStop}
            size={windowSize}
            onPointerDown={onPointerDown}
        >
            <div className={styles.window} style={windowStyle}>
                <div className={styles.titlebar}>
                    <div className={
                        $cl(styles.back, window.file.parentFolder && styles.enabled)
                    }
                        onPointerDown={handleBack}
                    >
                        &lt;
                    </div>
                    <div
                        className={styles.title}
                        {...attributes}
                        {...listeners} 
                        onPointerMove={handleTitleDrag}
                    >
                        {window.file.name}
                    </div>
                    <div className={styles.minimize} onPointerDown={handleMinimize}>
                        _
                    </div>
                    <div className={styles.maximize} onPointerDown={handleMaximize}>
                        O
                    </div>
                    <div className={styles.close} onPointerDown={handleClose}>
                        X
                    </div>
                </div>
                <div className={styles.content}>
                    {window.file.type === 'folder' && <_ListView
                        folders={window.file}
                        onOpen={file => handleOpen(file)}
                    />}
                </div>
            </div>
        </Rnd>
    );

    function handleBack () {
        if (window.file.parentFolder) {
            ctx.updateWindow(window.id, {
                ...window,
                file: window.file.parentFolder,
            });
        }
    }

    function handleTitleDrag (evt: React.PointerEvent<HTMLDivElement>) {
        if (evt.pressure > 0) {
            ctx.updateWindow(window.id, {
                ...window,
                isMaximized: false,
            });
        }
    }

    function handleResizeStop (
        evt: MouseEvent | TouchEvent,
        direction: Direction,
        elementRef: HTMLElement,
        delta: NumberSize
    ) {
        console.log(size);
        setSize({
            width: elementRef.offsetWidth,
            height: elementRef.offsetHeight,
        });
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

    function handleOpen (file: OsFile) {
        if (file.type === 'folder') {
            ctx.updateWindow(window.id, {
                ...window,
                file: file,
            });
        }
    }
}

interface _ListViewProps {
    folders: Folder;
    onOpen: (file: OsFile) => void;
}

function _ListView ({
    folders,
    onOpen,
}: _ListViewProps) {

    return (
        <div className={styles.listView}>
            {folders.content.map(f => <div
                key={f.name}
                className={styles.folder}
                onPointerDown={() => onOpen(f)}
            >
                <ChromaticAberrationImage className={styles.icon} image={IMG.os.folder} />
                <span>{f.name}</span>
            </div>)}
        </div>
    );
}


export default Window;
