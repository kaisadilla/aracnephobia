import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';
import { Folder, FolderWindow, getWindowTitle, ImageFile, OsFile, OsWindow, PdfFile, useOsContext, WindowContent } from 'context/usePortfolioContext';
import { IMG } from 'img/img';
import React, { useEffect, useRef, useState } from 'react';
import styles from './window.module.scss';
import { Rnd } from 'react-rnd';
import { NumberSize } from 're-resizable';
import { Direction } from 're-resizable/lib/resizer';
import { $cl } from 'utils';
import ReactPlayer from 'react-player';
import SVG from 'img/svg';
import { Tooltip } from '@mantine/core';
import SiteImage from 'components/SiteImage';
import ChromaticAberration from 'components/ChromaticAberration';
import { Document, Outline, Page, pdfjs } from 'react-pdf';
import pdfWorker from 'pdfjs-dist/build/pdf.worker?worker&url';
import myPdfFile from 'assets/portfolio/branding/aracne_phobia/brand_bible.pdf';
import useDynamicHook from 'hooks/useDynamicSize';
import { createPortal } from 'react-dom';

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

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
            onResize={handleResize}
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
                        <ChromaticAberration containerClassName={styles.icon}>
                            <SVG.os.window.minimize />
                        </ChromaticAberration>
                    </div>
                    <div className={styles.maximize} onPointerDown={handleMaximize}>
                        <ChromaticAberration containerClassName={styles.icon}>
                            <SVG.os.window.maximize />
                        </ChromaticAberration>
                    </div>
                    <div className={styles.close} onPointerDown={handleClose}>
                        <ChromaticAberration containerClassName={styles.icon}>
                            <SVG.os.window.close />
                        </ChromaticAberration>
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
                    {window.content.type === 'pdf' && <_PdfView
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

    function handleResize(
        evt: MouseEvent | TouchEvent,
        direction: Direction,
        elementRef: HTMLElement,
        delta: NumberSize
    ) {
        const newPos = {...window.position}

        if (direction.toLowerCase().includes("left")) {
            newPos.left += size.width - elementRef.offsetWidth;
        }
        if (direction.toLowerCase().includes("top")) {
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
    const pdfs = folder.content.filter(f => f.type === 'pdf');

    return (
        <div className={styles.galleryView}>
            {images.length !== 0 && <div className={styles.section}>
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
            </div>}
            {videos.length !== 0 && <div className={styles.section}>
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
            </div>}
            {pdfs.length !== 0 && <div className={styles.section}>
                <h2 className={styles.title}>Documents</h2>
                <div className={styles.galleryContent}>
                    {pdfs.map((pdf, i) => <div
                        key={pdf.name}
                        className={styles.imageFile}
                        onPointerDown={() => handleOpenPdf(pdf)}
                    >
                        <SiteImage
                            image={IMG.os.pdf_logo}
                            draggable={false}
                        />
                        <div className={styles.fileName}>{pdf.name}</div>
                    </div>)}
                </div>
            </div>}
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

    function handleOpenPdf (pdf: PdfFile) {
        const uuid = ctx.openWindow({
            type: 'pdf',
            pdf,
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

    const videoRef = useRef<ReactPlayer>(null);

    const [isLoaded, setLoaded] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [progress, setProgress] = useState(0); // 0 to 1.
    const [isFullscreen, setFullscreen] = useState(false);

    useEffect(() => {
        handleLoadedMetadata();
    }, [videoRef.current]);

    useEffect(() => {
        function handleFullScreenChange () {
            setFullscreen(
                document.fullscreenElement === videoRef.current?.getInternalPlayer()
            );
        }

        document.addEventListener('fullscreenchange', handleFullScreenChange);

        return () => document.removeEventListener('fullscreenchange', handleFullScreenChange);
    }, []);

    useEffect(() => {
        setLoaded(false);
        setPlaying(false);
    }, [window.content.type === 'video' && window.content.selectedIndex]);

    if (window.content.type !== 'video') return <div>Incorrect file.</div>

    const videoFile = window.content.videos[window.content.selectedIndex];
    const amount = window.content.videos.length;
    const index = window.content.selectedIndex;

    return (
        <div
            className={styles.videoView}
        >

        <div className={styles.fileNavigator}>
            {window.content.videos.map((v, i) => <button 
                key={i}
                className={$cl(styles.button, i === index && styles.selected)}
                onClick={() => i !== index && selectVideo(i)}
            >
                {v.name}
            </button>)}
        </div>
        <div className={styles.videoContainer}>
            {isLoaded === false && <div className={styles.loading}>
                Loading video...
            </div>}
            <ReactPlayer
                key={videoFile.name}
                ref={videoRef}
                className={styles.video}
                url={videoFile.content}
                onReady={() => setLoaded(true)}
                onEnded={() => setPlaying(false)}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                playing={playing}
                onClick={() => setPlaying(prev => !prev)}
                volume={volume}
                playIcon={<div>play</div>}
                controls={isFullscreen}
                config={{
                    youtube: {
                        playerVars: {
                            controls: 1,
                            modestbranding: 1,
                            rel: 0,
                        }
                    }
                }}
            />
            {isLoaded && playing === false && <div
                className={styles.playButton}
                onClick={() => setPlaying(true)}
            />}
        </div>
        {!videoFile.host && <div className={styles.controls}>
            <div className={styles.seekBar}>
                <input
                    className={styles.slider}
                    type='range'
                    min={0}
                    max={1}
                    step={0.001}
                    value={progress}
                    onChange={handleSeek}
                />
            </div>
            <div className={styles.buttonRibbon}>
                <button title="Full screen" onPointerDown={handleFullScreen}>
                    <span className="material-symbols-sharp">fullscreen</span>
                </button>
            </div>
            <div className={styles.audioControl}>
                <SVG.os.videoPlayer.volume className={styles.icon} />
                <div className={styles.clickable}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div
                        key={i}
                        className={styles.bar}
                        onPointerDown={() => setVolume(i / 8)}
                    >
                        <div
                            className={$cl(
                                styles.visible,
                                volume >= i / 8 && styles.selected
                            )}
                            style={{height: (i * 100 / 8) + "%"}}
                        />
                    </div>)}
                </div>
            </div>
        </div>}

        </div>
    );

    function selectVideo (i: number) {
        if (window.content.type !== 'video') return;

        ctx.updateWindow(window.id, {
            ...window,
            content: {
                ...window.content,
                selectedIndex: i,
            }
        })
    }

    function handleLoadedMetadata () {
        // we don't actually do anything yet.

        if (videoRef.current === null) return;
        const player = videoRef.current.getInternalPlayer();
        if (player === null) return;
    }

    function handleSeek (evt: React.ChangeEvent<HTMLInputElement>) {
        if (videoRef.current === null) return;
        const player = videoRef.current.getInternalPlayer();
        if (player === null) return;

        const prog = parseFloat(evt.target.value);

        if (isNaN(prog)) return;
        
        setProgress(prog);
        player.currentTime = prog * player.duration;
    }

    function handleTimeUpdate (evt: React.SyntheticEvent<HTMLVideoElement>) {
        if (videoRef.current === null) return;
        const player = videoRef.current.getInternalPlayer();
        if (player === null) return;

        setProgress(player.currentTime / player.duration);
    }

    function handleFullScreen () {
        if (videoRef.current === null) return;
        const player = videoRef.current.getInternalPlayer();
        if (player === null) return;

        if (player.requestFullscreen) {
            player.requestFullscreen();
        } else if (player.webkitRequestFullscreen) {
            player.webkitRequestFullscreen(); // Safari
        } else if (player.mozRequestFullScreen) {
            player.mozRequestFullScreen(); // Firefox
        } else if (player.msRequestFullscreen) {
            player.msRequestFullscreen(); // IE/Edge
        }
    }
}

function _PdfView ({
    window,
}: _ImageOrVideoViewProps) {
    const ctx = useOsContext();
    const ref = useRef<HTMLDivElement>(null);
    const containerSize = useDynamicHook(ref);
    
    const [width, setWidth] = useState(100);
    const [numPages, setNumPages] = useState(0);
    const [isFullScreen, setFullScreen] = useState(false);

    useEffect(() => {
        setWidth(containerSize.width);
    }, [containerSize]);

    if (window.content.type !== 'pdf') return <div>Incorrect file.</div>

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    const view = (
        <div ref={ref} className={$cl(styles.pdfView, isFullScreen && styles.fullscreen)}>
            <Document
                className={styles.pdf}
                file={window.content.pdf.content}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div className={styles.loading}>Loading document...</div>}
            >
                {Array.from({ length: numPages }).map((_, i) => <Page
                    key={i}
                    className={styles.page}
                    pageNumber={i + 1}
                    width={width}
                    loading={<div className={styles.loading}>Loading page...</div>}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                />)}
            </Document>
            <div className={styles.buttonRibbon}>
                <button title="Full screen" onClick={handleFullScreen}>
                    <span className="material-symbols-sharp">fullscreen</span>
                </button>
            </div>
        </div>
    );

    if (isFullScreen) {
        return createPortal(view, document.body);
    }
    else {
        return view;
    }

    function handleFullScreen () {
        setFullScreen(prev => !prev);
    }
}

export default Window;
