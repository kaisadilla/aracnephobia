import useIndices from "hooks/useIndices";
import { Context, createContext, useContext, useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import branding_jlazz_logo from "assets/portfolio/branding/jlazz/logo.png";
import branding_jlazz_logo_bg from "assets/portfolio/branding/jlazz/logo-bg.png";
import branding_jlazz_logo_mp4 from "assets/portfolio/branding/jlazz/logo-006.mp4";
import branding_jlazz_logo_mp4_thumbnail from "assets/portfolio/branding/jlazz/logo-006.thumbnail.jpg";
import branding_jlazz_portrait from "assets/portfolio/branding/jlazz/portrait.png";
import branding_jlazz_transition from "assets/portfolio/branding/jlazz/transition-sound.mp4";
import branding_jlazz_transition_thumbnail from "assets/portfolio/branding/jlazz/transition-sound.thumbnail.jpg";

export interface OsWindow {
    content: WindowContent;
    id: string;
    position: { top: number, left: number };
    isMinimized: boolean;
    isMaximized: boolean;
}

export interface FolderWindow {
    type: 'folder';
    folder: Folder;
}

export interface ImageWindow {
    type: 'image';
    images: ImageFile[];
    selectedIndex: number;
}

export interface VideoWindow {
    type: 'video';
    videos: VideoFile[];
    selectedIndex: number;
}

export type WindowContent = FolderWindow | ImageWindow | VideoWindow;

interface OsContextState {
    activeWindowId: string | null;
    desktopFiles: OsFile[];
    openWindows: {[uuid: string]: OsWindow};
    windowIndices: Record<string, number>;
    focusedWindow: string | null;
    openWindow: (content: WindowContent) => string;
    updateWindow: (id: string, window: OsWindow) => void;
    closeWindow: (id: string) => void;
    setWindowOnTop: (key: string) => void;
}

const OsContext = createContext<OsContextState>({} as OsContextState);
const useOsContext = () => useContext(OsContext);

const OsContextProvider = ({ children }: any) => {
    const [state, setState] = useState<OsContextState>({
        activeWindowId: null,
        desktopFiles: [
            getBrandingFolder(),
            getDrawingFolder(),
            getReelsFolder(),
        ],
        openWindows: {} as {[uuid: string]: OsWindow},
    } as OsContextState);
    
    const {
        indices: windowIndices,
        focused: focusedWindow,
        setOnTop: setWindowOnTop
    } = useIndices(Object.keys(state.openWindows));

    const value: OsContextState = useMemo(() => {
        function openWindow (content: WindowContent) : string {
            const uuid = uuidv4();
            setState(prev => ({
                ...prev,
                openWindows: {
                    ...prev.openWindows,
                    [uuid]: {
                        id: uuid,
                        content,
                        position: {
                            top: Math.floor(Math.random() * 100),
                            left: Math.floor(Math.random() * 300),
                        },
                        isMinimized: false,
                        isMaximized: false,
                    },
                }
            }));
            return uuid;
        }

        function updateWindow (id: string, window: OsWindow) {
            setState(prev => ({
                ...prev,
                openWindows: {
                    ...prev.openWindows,
                    [id]: window,
                }
            }));
        }

        function closeWindow (id: string) {
            setState(prev => {
                const openWindows = { ...prev.openWindows };
                delete openWindows[id];

                return {
                    ...prev,
                    openWindows,
                };
            })
        }
        return {
            ...state,
            windowIndices,
            focusedWindow,
            openWindow,
            updateWindow,
            closeWindow,
            setWindowOnTop,
        }
    }, [state, windowIndices, setWindowOnTop]);

    return (
        <OsContext.Provider value={value}>
            {children}
        </OsContext.Provider>
    );
}

export {
    useOsContext,
    OsContextProvider,
};

export interface BaseFile {
    type: string;
    name: string;
    parentFolder?: Folder | null;
}

export interface Folder extends BaseFile {
    type: 'folder';
    display: 'list' | 'gallery';
    content: OsFile[];
}

export interface ImageFile extends BaseFile {
    type: 'image';
    content: string;
}

export interface VideoFile extends BaseFile {
    type: 'video';
    content: string;
    thumbnail: string;
}

export type OsFile = Folder
    | ImageFile
    | VideoFile
    ;

function getBrandingFolder () : Folder {
    const folder: Folder = {
        type: 'folder',
        name: "Branding",
        display: 'list',
        parentFolder: null,
        content: [
            {
                type: 'folder',
                name: "jlazz",
                display: 'gallery',
                content: [
                    {
                        type: 'image',
                        name: "logo",
                        content: branding_jlazz_logo,
                    },
                    {
                        type: 'image',
                        name: "logo_bg",
                        content: branding_jlazz_logo_bg,
                    },
                    {
                        type: 'video',
                        name: "logo_mp4",
                        content: branding_jlazz_logo_mp4,
                        thumbnail: branding_jlazz_logo_mp4_thumbnail,
                    },
                    {
                        type: 'image',
                        name: "portrait",
                        content: branding_jlazz_portrait,
                    },
                    {
                        type: 'video',
                        name: "transition-sound",
                        content: branding_jlazz_transition,
                        thumbnail: branding_jlazz_transition_thumbnail,
                    },
                ]
            },
            {
                type: 'folder',
                name: "Digital art",
                display: 'list',
                content: [

                ]
            },
            {
                type: 'folder',
                name: "Editorial art",
                display: 'list',
                content: [

                ]
            },
            {
                type: 'folder',
                name: "Tattoo art",
                display: 'list',
                content: [

                ]
            },
        ]
    };

    linkParents(folder);

    return folder;
}
function getDrawingFolder () : Folder {
    const folder: Folder = {
        type: 'folder',
        name: "Drawing",
        display: 'list',
        parentFolder: null,
        content: [
            {
                type: 'folder',
                name: "Book of Mistery",
                display: 'list',
                content: [

                ]
            },
            {
                type: 'folder',
                name: "Doll's chest",
                display: 'list',
                content: [

                ]
            },
            {
                type: 'folder',
                name: "Delugram",
                display: 'list',
                content: [

                ]
            },
            {
                type: 'folder',
                name: "Aracne Phobia",
                display: 'list',
                content: [

                ]
            },
        ]
    };

    linkParents(folder);

    return folder;
}
function getReelsFolder () : Folder {
    const folder: Folder = {
        type: 'folder',
        name: "Reel",
        display: 'list',
        parentFolder: null,
        content: [
        ]
    };

    linkParents(folder);

    return folder;
}

function linkParents (folder: Folder) {
    for (let i = 0; i < folder.content.length; i++) {
        const f = folder.content[i];
        f.parentFolder = folder;

        if (f.type === 'folder') {
            linkParents(f);
        }
    }
}

export function getWindowTitle (content: WindowContent) {
    if (content.type === 'folder') {
        return content.folder.name;
    }
    else if (content.type === 'image') {
        return content.images[content.selectedIndex].name;
    }
    else if (content.type === 'video') {
        return content.videos[content.selectedIndex].name;
    }
}