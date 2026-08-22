import useIndices from "hooks/useIndices";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import FILES, { File, OsWindow, WindowContent } from "./files";

interface InternalState {
  isLeakMode: boolean;
  files: File[];
  isStartMenuOpen: boolean;
  openWindows: { [uuid: string]: OsWindow };
  windowIndices: Record<string, number>;
  focusedWindow: string | null;
  volume: number; // from 0 to 3.
}

interface MusicOsValue extends InternalState {
  setLeakMode: (value: boolean) => void;
  setStartMenuOpen: (open: boolean) => void;
  openWindow: (
    content: WindowContent, latestWindow?: { width: number, height: number, }
  ) => string;
  updateWindow: (id: string, window: OsWindow) => void;
  closeWindow: (id: string) => void;
  setWindowOnTop: (key: string) => void;
  setVolume: (value: number) => void;
}

const MusicOsContext = createContext(undefined as MusicOsValue | undefined);

export const MusicOsProvider = ({ children }: any) => {
  const [state, setState] = useState<InternalState>({
    isLeakMode: false,
    files: FILES,
    isStartMenuOpen: false,
    openWindows: {},
    volume: 2,
  }); // TODO: FIX TYPING.

  const [latestWindow, setLatestWindow] = useState<string | null>(null);

  useEffect(() => {
    if (latestWindow === null) return;

    setWindowOnTop(latestWindow)
  }, [latestWindow]);

  const {
    indices: windowIndices,
    focused: focusedWindow,
    setOnTop: setWindowOnTop,
  } = useIndices(Object.keys({}));

  function setLeakMode (value: boolean) {
    setState(prev => ({
      ...prev,
      isLeakMode: value,
    }));
  }

  function setStartMenuOpen (open: boolean) {
    setState(prev => ({
      ...prev,
      isStartMenuOpen: open,
    }));
  }

  function openWindow (
    content: WindowContent,
    initialSize = { width: 700, height: 450 }
  ) : string {
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
          initialSize,
          isMinimized: false,
          isMaximized: false,
        },
      },
    }));
    
    setLatestWindow(uuid);

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

  function setVolume (value: number) {
    setState(prev => ({
      ...prev,
      volume: value,
    }));
  }

  return (
    <MusicOsContext.Provider value={{
      ...state,
      windowIndices,
      focusedWindow,
      setLeakMode,
      setStartMenuOpen,
      openWindow,
      updateWindow,
      closeWindow,
      setWindowOnTop,
      setVolume,
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
