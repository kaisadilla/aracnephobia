import { Context, createContext, useContext, useEffect, useMemo, useState } from "react";

interface OsContextState {
    activeWindowId: string | null;
    brandingFolder: Folder;
    drawingFolder: Folder;
    reelsFolder: Folder;
}

const OsContext = createContext<OsContextState>({} as OsContextState);
const useOsContext = () => useContext(OsContext);

const OsContextProvider = ({ children }: any) => {
    const [state, setState] = useState<OsContextState>({
        activeWindowId: null,
        brandingFolder: getBrandingFolder(),
        drawingFolder: getDrawingFolder(),
        reelsFolder: getReelsFolder(),
    } as OsContextState);

    const value = useMemo(() => {
        return {
            ...state,
        }
    }, [state]);

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