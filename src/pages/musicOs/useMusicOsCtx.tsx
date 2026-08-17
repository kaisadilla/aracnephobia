import useIndices from "hooks/useIndices";
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import FILES, { File, OsWindow, WindowContent } from "./files";

interface InternalState {
  files: File[];
  isStartMenuOpen: boolean;
  openWindows: { [uuid: string]: OsWindow };
  windowIndices: Record<string, number>;
  focusedWindow: string | null;
}

interface MusicOsValue extends InternalState {
  setStartMenuOpen: (open: boolean) => void;
  openWindow: (content: WindowContent) => string;
  updateWindow: (id: string, window: OsWindow) => void;
  closeWindow: (id: string) => void;
  setWindowOnTop: (key: string) => void;
}

const MusicOsContext = createContext(undefined as MusicOsValue | undefined);

export const MusicOsProvider = ({ children }: any) => {
  const [state, setState] = useState<InternalState>({
    files: FILES,
    isStartMenuOpen: false,
    openWindows: {},
  }); // TODO: FIX TYPING.

  const {
    indices: windowIndices,
    focused: focusedWindow,
    setOnTop: setWindowOnTop,
  } = useIndices(Object.keys({}));

  function setStartMenuOpen (open: boolean) {
    setState(prev => ({
      ...prev,
      isStartMenuOpen: open,
    }));
  }

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
      },
    }));

    return uuid;
  }

  function updateWindow (id: string, window: OsWindow) {
    setState(prev => ({
      ...prev,
      openWindows: {
        ...prev.openWindows,
        [id]: window,
      },
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
    });
  }

  return (
    <MusicOsContext.Provider value={{
      ...state,
      windowIndices,
      focusedWindow,
      setStartMenuOpen,
      openWindow,
      updateWindow,
      closeWindow,
      setWindowOnTop,
    }}>
      {children}
    </MusicOsContext.Provider>
  );
}

export function useMusicOs () : MusicOsValue {
  const ctx = useContext(MusicOsContext);

  if (!ctx) {
    throw new Error("<MusicOsProvider> not found.");
  }

  return ctx;
}
