import { parseIndex, type Album, type Index, type Song } from "api/music";
import { createContext, useContext, useState } from "react";

const INDEX = "/albums/index.txt";

interface InternalState {
  url: string;
  index: Index | null;
  byOrder: Song[];
}

interface ServerValue extends InternalState {
  tryLoadIndex: () => void;
}

const ServerContext = createContext(undefined as ServerValue | undefined);

export const ServerProvider = ({ children }: any) => {
  const [state, setState] = useState<InternalState>(initState);

  async function tryLoadIndex () {
    const params = new URLSearchParams(window.location.search);
    const s = params.get('s');
    const a = params.get('a');

    const songFilter = s?.split(',').map(s => s.replaceAll("\\,", ",")) ?? null;
    const albumFilter = a?.split(',').map(a => a.replaceAll("\\,", ",")) ?? null;

    const resp = await fetch(INDEX, { cache: "no-store" });
    const txt = await resp.text();
    const baseIndex = await parseIndex(txt);

    const index: Index = [];

    for (const a of baseIndex) {
      if (albumFilter && albumFilter.includes(a.name) === false) continue;

      const album: Album = {
        ...a,
        songs: []
      };

      for (const s of a.songs) {
        if (songFilter && songFilter.includes(s.displayName) === false) continue;

        album.songs.push(s);
      }

      if (album.songs.length === 0) continue;

      index.push(album);
    }

    const byId: Song[] = [];

    for (let a = 0; a < index.length; a++) {
      const album = index[a];


      for (let s = 0; s < album.songs.length; s++) {
        const song = album.songs[s];

        song.id = byId.length;
        song.albumId = a;
        song.relativeId = s;
        
        byId.push(song);
      }
    }

    setState(prev => ({
      ...prev,
      index,
      byOrder: byId,
    }));
  }

  return (
    <ServerContext.Provider value={{
      ...state,
      tryLoadIndex,
    }}>
      {children}
    </ServerContext.Provider>
  );
}

export function useServer () : ServerValue {
  const ctx = useContext(ServerContext);

  if (!ctx) {
    throw new Error("<ServerProvider> not found.");
  }

  return ctx;
}

function initState () : InternalState {
  return {
    url: "/music/",
    index: null,
    byOrder: [],
  };
}
