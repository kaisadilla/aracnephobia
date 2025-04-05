import useIndices from "hooks/useIndices";
import { Context, createContext, useContext, useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export interface OsWindow {
    file: OsFile;
    id: string;
    position: { top: number, left: number };
    isMinimized: boolean;
    isMaximized: boolean;
}

interface OsContextState {
    activeWindowId: string | null;
    desktopFiles: OsFile[];
    openWindows: {[uuid: string]: OsWindow};
    windowIndices: Record<string, number>;
    focusedWindow: string | null;
    openWindow: (file: OsFile) => string;
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
        function openWindow (file: OsFile) : string {
            const uuid = uuidv4();
            setState(prev => ({
                ...prev,
                openWindows: {
                    ...prev.openWindows,
                    [uuid]: {
                        id: uuid,
                        file: file,
                        position: {
                            top: Math.floor(Math.random() * 300),
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
    console.log("E");

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
    content: OsFile[];
}

export type OsFile = Folder
    ;

function getBrandingFolder () : Folder {
    const folder: Folder = {
        type: 'folder',
        name: "Branding",
        parentFolder: null,
        content: [
            {
                type: 'folder',
                name: "Concept art",
                content: [

                ]
            },
            {
                type: 'folder',
                name: "Digital art",
                content: [

                ]
            },
            {
                type: 'folder',
                name: "Editorial art",
                content: [

                ]
            },
            {
                type: 'folder',
                name: "Tattoo art",
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
        parentFolder: null,
        content: [
            {
                type: 'folder',
                name: "Book of Mistery",
                content: [

                ]
            },
            {
                type: 'folder',
                name: "Doll's chest",
                content: [

                ]
            },
            {
                type: 'folder',
                name: "Delugram",
                content: [

                ]
            },
            {
                type: 'folder',
                name: "Aracne Phobia",
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