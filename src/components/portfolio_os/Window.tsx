import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';
import { Folder, FolderWindow, getWindowTitle, ImageFile, OsFile, OsWindow, useOsContext, WindowContent } from 'context/usePortfolioContext';
import { IMG } from 'img/img';
import React, { useEffect, useState } from 'react';
import styles from './window.module.scss';
import { Rnd } from 'react-rnd';
import { NumberSize } from 're-resizable';
import { Direction } from 're-resizable/lib/resizer';
import { $cl } from 'utils';
import ReactPlayer from 'react-player';

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

    const [size, setSize] = useState({width: 700, height: 450});
    
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
                    {window.content.type === 'folder' && <div className={
                        $cl(styles.back, window.content.folder.parentFolder && styles.enabled)
                    }
                        onPointerDown={handleBack}
                    >
                        &lt;
                    </div>}
                    <div
                        className={styles.title}
                        {...attributes}
                        {...listeners} 
                        onPointerMove={handleTitleDrag}
                    >
                        {getWindowTitle(window.content)}
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
                    {window.content.type === 'folder' && window.content.folder.display === 'list' && (
                        <_ListView
                            folder={window.content.folder}
                            onOpen={file => handleOpenInsideWindow(file)}
                        />
                    )}
                    {window.content.type === 'folder' && window.content.folder.display === 'gallery' && (
                        <_GalleryView
                            folder={window.content.folder}
                        />
                    )}
                    {window.content.type === 'image' && <_ImageView
                        window={window}
                    />}
                    {window.content.type === 'video' && <_VideoView
                        window={window}
                    />}
                </div>
            </div>
        </Rnd>
    );

    function handleBack () {
        if (window.content.type !== 'folder') return;

        if (window.content.folder.parentFolder) {
            ctx.updateWindow(window.id, {
                ...window,
                content: {
                    type: 'folder',
                    folder: window.content.folder.parentFolder,
                }
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

    function handleOpenInsideWindow (folder: Folder) {
        ctx.updateWindow(window.id, {
            ...window,
            content: {
                type: 'folder',
                folder: folder,
            }
        });
    }
}

interface _ListViewProps {
    folder: Folder;
    onOpen: (folder: Folder) => void;
}

function _ListView ({
    folder,
    onOpen,
}: _ListViewProps) {

    return (
        <div className={styles.listView}>
            {folder.content.map(f => <div
                key={f.name}
                className={styles.folder}
                onPointerDown={() => {if (f.type === 'folder') onOpen(f)}}
            >
                <ChromaticAberrationImage className={styles.icon} image={IMG.os.folder} />
                <span>{f.name}</span>
            </div>)}
        </div>
    );
}

interface _GalleryViewProps {
    folder: Folder;
}

function _GalleryView ({
    folder,
}: _GalleryViewProps) {
    const ctx = useOsContext();

    const images = folder.content.filter(f => f.type === 'image');
    const videos = folder.content.filter(f => f.type === 'video');

    return (
        <div className={styles.galleryView}>
            <div className={styles.section}>
                <h2 className={styles.title}>Image</h2>
                <div className={styles.galleryContent}>
                    {images.map((img, i) => <div
                        key={img.name}
                        className={styles.imageFile}
                        onPointerDown={() => handleOpenImage(i)}
                    >
                        <img src={img.content} draggable={false} />
                        <div className={styles.fileName}>{img.name}</div>
                    </div>)}
                </div>
            </div>
            <div className={styles.section}>
                <h2 className={styles.title}>Video</h2>
                <div className={styles.galleryContent}>
                    {videos.map((vid, i) => <div
                        key={vid.name}
                        className={styles.imageFile}
                        onPointerDown={() => handleOpenVideo(i)}
                    >
                        <img src={vid.thumbnail} draggable={false} />
                        <div className={styles.fileName}>{vid.name}</div>
                    </div>)}
                </div>
            </div>
        </div>
    );

    function handleOpenImage (index: number) {
        const uuid = ctx.openWindow({
            type: 'image',
            images,
            selectedIndex: index,
        });
        setTimeout(() => ctx.setWindowOnTop(uuid), 10);
    }

    function handleOpenVideo (index: number) {
        const uuid = ctx.openWindow({
            type: 'video',
            videos,
            selectedIndex: index,
        });
        setTimeout(() => ctx.setWindowOnTop(uuid), 10);
    }
}

interface _ImageOrVideoViewProps {
    window: OsWindow;
}

function _ImageView ({
    window,
}: _ImageOrVideoViewProps) {
    const ctx = useOsContext();

    if (window.content.type !== 'image') return <div>Incorrect file.</div>

    const amount = window.content.images.length;
    const index = window.content.selectedIndex;

    return (
        <div className={styles.imageView}>
            <div
                className={$cl(styles.control, styles.previous)}
                onPointerDown={handlePrevious}
            >
                &lt;
            </div>
            <img
                className={styles.image}
                src={window.content.images[window.content.selectedIndex].content}
            />
            <div
                className={$cl(styles.control, styles.next)}
                onPointerDown={handleNext}
            >
                &gt;
            </div>
        </div>
    );

    function handlePrevious () {
        if (window.content.type !== 'image') return;

        ctx.updateWindow(window.id, {
            ...window,
            content: {
                ...window.content,
                selectedIndex: (index + amount - 1) % amount,
            }
        })
    }

    function handleNext () {
        if (window.content.type !== 'image') return;

        ctx.updateWindow(window.id, {
            ...window,
            content: {
                ...window.content,
                selectedIndex: (index + 1) % amount,
            }
        })
    }
}

function _VideoView ({
    window,
}: _ImageOrVideoViewProps) {
    const ctx = useOsContext();

    const [isLoaded, setLoaded] = useState(false);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        setPlaying(false);
    }, [window]);

    if (window.content.type !== 'video') return <div>Incorrect file.</div>

    const videoFile = window.content.videos[window.content.selectedIndex];
    const amount = window.content.videos.length;
    const index = window.content.selectedIndex;

    return (
        <div className={styles.imageView}>
            <div
                className={$cl(styles.control, styles.previous)}
                onPointerDown={handlePrevious}
            >
                &lt;
            </div>
            <div
                className={styles.videoContainer}
            >
                {isLoaded === false && <div className={styles.loading}>
                    Loading video...
                </div>}
                <ReactPlayer
                    className={styles.video}
                    url={videoFile.content}
                    onReady={() => setLoaded(true)}
                    playing={playing}
                />
                {isLoaded && playing === false && <div
                    className={styles.playButton}
                    onPointerDown={() => setPlaying(true)}
                />}
            </div>
            <div
                className={$cl(styles.control, styles.next)}
                onPointerDown={handleNext}
            >
                &gt;
            </div>
        </div>
    );

    function handlePrevious () {
        if (window.content.type !== 'video') return;

        ctx.updateWindow(window.id, {
            ...window,
            content: {
                ...window.content,
                selectedIndex: (index + amount - 1) % amount,
            }
        })
    }

    function handleNext () {
        if (window.content.type !== 'video') return;

        ctx.updateWindow(window.id, {
            ...window,
            content: {
                ...window.content,
                selectedIndex: (index + 1) % amount,
            }
        })
    }
}



export default Window;
