export type FileType = 'broken'
  | 'folder'
  | 'playlist'
  | 'bug'
  | 'witch'
  | 'coven'
  | 'wish'
  | 'contact';

export interface BrokenFile {
  type: 'broken';
  name: string;
}

export interface FolderFile {
  type: 'folder';
  name: string;
  songs: Song[];
}

export type File = BrokenFile
  | FolderFile;

export interface OsWindow {
  content: WindowContent;
  id: string;
  position: { top: number, left: number, };
  initialSize: { width: number, height: number };
  isMinimized: boolean;
  isMaximized: boolean;
}

export interface PlayerWindowContent {
  type: 'player';
  song: Song;
}

export interface FolderWindowContent {
  type: 'folder';
  folder: FolderFile;
}

export interface ErrorWindowContent {
  type: 'error';
}

export interface InfoWindowContent {
  type: 'info';
}

export type WindowContent = PlayerWindowContent
  | FolderWindowContent
  | ErrorWindowContent
  | InfoWindowContent;

export type Song = {
  name: string;
  internalName: string;
  folder: string;
}

function broken (name: string) : BrokenFile {
  return { 
    type: 'broken',
    name,
  };
}

function folder (name: string, songs: Song[]) : FolderFile {
  return {
    type: 'folder',
    name,
    songs,
  }
}

function song (folder: string, name: string, internalName: string) {
  return {
    name,
    internalName,
    folder,
  }
}

const FILES = [
  folder(
    "THE//MASK",
    [
      song("the_mask", "Happy Happy Happy.mp3", "happy_happy_happy"),
      song("the_mask", "Tomorrow.mp3", "tomorrow"),
      song("the_mask", "Too many days.mp3", "too_many_days"),
      song("the_mask", "Clean Clean Clean.mp3", "clean_clean_clean"),
    ],
  ),
  broken("THE//RAGE"),
  broken("THE//HEART"),
  broken("THE//ROPE"),
]

export default FILES;
