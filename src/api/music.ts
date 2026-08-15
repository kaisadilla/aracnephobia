export type Index = Album[];

export interface Album {
  id: number;
  name: string;
  songs: Song[];
}

export interface Song {
  id: number;
  /**
   * The id of the album this song belongs to.
   */
  albumId: number;
  /**
   * The index of the song within its album.
   */
  relativeId: number;
  internalName: string;
  displayName: string;
  hasVideo: boolean;
}

export async function parseIndex (txt: string) : Promise<Index> {
  const entries = txt.split("\n");
  
  const albums: Album[] = [];

  let albumId = 0;
  for (const e of entries) {
    if (e === "") continue;

    let content: string;

    try {
      const url = `/albums/${e}.txt`;
      console.info("Fetching album.", url);

      const resp = await fetch(url, { cache: "no-store" });
      content = await resp.text();
    }
    catch (err) {
      console.error(`Couldn't find album '${e}'.`, err);
      continue;
    }

    albums.push(parseAlbum(content, albumId++));
  }

  console.info("index", albums);

  return albums;
}

export function parseAlbum (txt: string, albumId: number) : Album {
  const entries = txt.split("---");
  if (entries.length < 2) throw "Album has no songs.";

  const songs: Song[] = [];

  for (let i = 1; i < entries.length; i++) {
    songs.push(parseSong(entries[i].trim(), albumId, i - 1));
  }

  return {
    id: albumId,
    name: entries[0],
    songs,
  }
}

export function parseSong (str: string, albumId: number, relId: number) : Song {
  const entries = str.split("\n");
  const keys: Record<string, string> = {};
  const flags: string[] = [];

  for (const e of entries) {
    const parts = e.split(":");
    if (parts.length === 0) continue;
    if (parts[0].length === 0) continue;
    if (parts.length === 1) {
      flags.push(e);
      continue;
    }

    keys[parts[0].trim()] = e.substring(parts[0].length + 1).trim();
  }

  if (!keys['song']) throw "No 'song' key.";
  if (!keys['name']) throw "No 'name' key.";

  return {
    id: -1,
    albumId,
    relativeId: relId,
    internalName: keys['song'],
    displayName: keys['name'],
    hasVideo: flags.includes('has_video'),
  }
}
