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

export type File = BrokenFile;

function broken (name: string) : BrokenFile {
  return { 
    type: 'broken',
    name,
  };
}

export interface OsWindow {
  content: WindowContent;
  id: string;
  position: { top: number, left: number, };
  isMinimized: boolean;
  isMaximized: boolean;
}

export interface PlayerWindowContent {
  type: 'player';
}

export interface FolderWindowContent {
  type: 'folder';
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

const FILES = [
  broken("THE//MASK"),
  broken("THE//RAGE"),
  broken("THE//HEART"),
  broken("THE//ROPE"),
]

export default FILES;
