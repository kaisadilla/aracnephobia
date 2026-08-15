import type { Song } from "api/music";
import { createContext, useContext, useRef, useState } from "react";
import type { StateSetter } from "../types";
import { useServer } from "./useServer";

interface SongValue {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  song: Song | null;
  isPlaying: boolean;
  /** In ms. */
  time: number;
  shuffle: boolean;
  setSong: StateSetter<Song | null>;
  setPlaying: StateSetter<boolean>;
  setTime: StateSetter<number>;
  setShuffle: StateSetter<boolean>;
  previous: () => void;
  next: () => void;
}

export interface SongLocation {
  album: number;
  song: number;
}

const SongContext = createContext(undefined as SongValue | undefined);

export const SongProvider = ({ children }: any) => {
  const srv = useServer();
  const audioRef = useRef<HTMLAudioElement>(null);

  const [song, setSong] = useState<Song | null>(null);
  const [isPlaying, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [shuffle, setShuffle] = useState(false);

  function previous () {
    if (!song) return;
    if (!srv.index) return;
    if (song.id <= 0) return;

    setSong(srv.byOrder[song.id]);
  }

  function next () {
    if (!song) return;
    if (!srv.index) return;

    if (shuffle) {
      setSong(srv.byOrder[Math.floor(Math.random() * srv.byOrder.length)]);
    }
    else {
      if (song.id >= srv.byOrder.length - 1) return;

      setSong(srv.byOrder[song.id + 1]);
    }
  }

  return (
    <SongContext.Provider value={{
      audioRef,
      song,
      isPlaying,
      time,
      shuffle,
      setSong,
      setPlaying,
      setTime,
      setShuffle,
      previous,
      next,
    }}>
      {children}
    </SongContext.Provider>
  );
}

export function useSong () : SongValue {
  const ctx = useContext(SongContext);

  if (!ctx) {
    throw new Error("<SongProvider> not found.");
  }

  return ctx;
}
