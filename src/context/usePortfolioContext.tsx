import useIndices from "hooks/useIndices";
import { createContext, useContext, useMemo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';













import { getBrandingFolder, getDrawingFolder, getReelsFolder } from "./portfolio_files";

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

export interface PdfWindow {
  type: 'pdf';
  pdf: PdfFile;
}

export type WindowContent = FolderWindow
  | ImageWindow
  | VideoWindow
  | PdfWindow
  ;

interface OsContextState {
  activeWindowId: string | null;
  desktopFiles: OsFile[];
  openWindows: {[uuid: string]: OsWindow};
  windowIndices: Record<string, number>;
  focusedWindow: string | null;
  openWindow: (content: WindowContent, isPhone: boolean) => string;
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
      linkParents(getBrandingFolder()),
      linkParents(getDrawingFolder()),
      linkParents(getReelsFolder()),
    ],
    openWindows: {} as {[uuid: string]: OsWindow},
  } as OsContextState);
  
  const {
    indices: windowIndices,
    focused: focusedWindow,
    setOnTop: setWindowOnTop
  } = useIndices(Object.keys(state.openWindows));

  const value: OsContextState = useMemo(() => {
    function openWindow (content: WindowContent, isPhone: boolean) : string {
      const uuid = uuidv4();
      setState(prev => ({
        ...prev,
        openWindows: {
          ...prev.openWindows,
          [uuid]: {
            id: uuid,
            content,
            position: {
              top: isPhone ? 10 : Math.floor(Math.random() * 100),
              left: isPhone ? 10 : Math.floor(Math.random() * 300),
            },
            isMinimized: false,
            isMaximized: isPhone,
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
    OsContextProvider, useOsContext
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
  host?: 'youtube';
  content: string;
  thumbnail: string;
}

export interface PdfFile extends BaseFile {
  type: 'pdf';
  content: string;
}

export type OsFile = Folder
  | ImageFile
  | VideoFile
  | PdfFile
  ;

function linkParents (folder: Folder) {
  for (let i = 0; i < folder.content.length; i++) {
    const f = folder.content[i];
    f.parentFolder = folder;

    if (f.type === 'folder') {
      linkParents(f);
    }
  }

  return folder;
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
  else if (content.type === 'pdf') {
    return content.pdf.name;
  }
}
