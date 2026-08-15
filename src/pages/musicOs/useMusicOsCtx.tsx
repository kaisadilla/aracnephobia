import useIndices from "hooks/useIndices";
import { createContext, useContext, useState } from "react";
import FILES, { File } from "./files";

interface InternalState {
  files: File[];
}

interface MusicOsValue extends InternalState {

}

const MusicOsContext = createContext(undefined as MusicOsValue | undefined);

export const MusicOsProvider = ({ children }: any) => {
  const [state, setState] = useState<InternalState>(initState);

  const {
    indices: windowIndices,
    focused: focusedWindow,
    setOnTop: setWindowOnTop,
  } = useIndices(Object.keys({}));

  return (
    <MusicOsContext.Provider value={{
      ...state,
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

function initState () : InternalState {
  return {
    files: FILES,
  };
}
