import i_err_heart from 'assets/img/music_os/error/heart.png';
import i_err_mask from 'assets/img/music_os/error/mask.png';
import i_err_rage from 'assets/img/music_os/error/rage.png';
import i_err_rope from 'assets/img/music_os/error/rope.png';

export interface BrokenFile {
  type: 'broken';
  name: string;
  image: string | null;
  title: string;
  message: string;
  isLeak: boolean;
  isLast: false;
}

export interface FolderFile {
  type: 'folder';
  name: string;
  songs: Song[];
  isLast: false;
}

export interface OtherFile {
  name: string;
  type: 'witch' | 'coven' | 'wish' | 'contact'
  isLast: true;
}

export type File = BrokenFile
  | FolderFile
  | OtherFile;

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
  image: string | null;
  title: string;
  message: string;
}

export interface InfoWindowContent {
  type: 'info';
  infoType: 'coven' | 'aracne' | 'juanma';
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

function broken (
  name: string,
  image: string | null,
  title: string,
  message: string,
  isLeak: boolean = false
) : BrokenFile {
  return { 
    type: 'broken',
    name,
    image,
    title,
    message,
    isLeak,
    isLast: false,
  };
}

function folder (name: string, songs: Song[]) : FolderFile {
  return {
    type: 'folder',
    name,
    songs,
    isLast: false,
  }
}

function song (folder: string, name: string, internalName: string) {
  return {
    name,
    internalName,
    folder,
  }
}

function other (type: OtherFile['type'], id: string) : OtherFile {
  return {
    type,
    name: id,
    isLast: true,
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
  broken(
    "THE//RAGE",
    i_err_rage,
    "ERROR 02 // PRESSURE LIMIT",
    "Anger is what happens when silence stops working"
  ),
  broken(
    "THE//HEART",
    i_err_heart,
    "ERROR 03 // FOREIGN OBJECT",
    "Attachment detected. Removal may cause structural damage."
  ),
  broken(
    "THE//ROPE",
    i_err_rope,
    "ERROR 04 // EXIT PATH NOT FOUND",
    "Not everything that holds you is keeping you safe."
  ),
  broken(
    "THE//EYES",
    i_err_mask,
    "ERROR 05 // OBSERVER DETECTED",
    "Too many eyes were used to build this version of you."
  ),
  broken(
    "THE//BROKEN",
    i_err_heart,
    "ERROR 06 // RECOVERY FILE LOST",
    "Survival does not restore the original file."
  ),
  broken(
    "THE//SALV///",
    i_err_rage,
    "ERROR 07 // PROCESS INCOMPLETE",
    "Something survived the fire. Access is not yet permitted."
  ),
  broken(
    "THE//LEAK",
    null,
    "ERROR ⛞⛞⛞ // CONTAINMENT FAILURE",
    "Access denied. Not to protect the files, but the structure.",
    true
  ),
  other('witch', "witch"),
  other('coven', "coven"),
  other('wish', "wish"),
  other('contact', "contact"),
]

export function getWindowName (window: OsWindow) {
  if (window.content.type === 'error') return window.content.title;
  if (window.content.type === 'folder') return window.content.folder.name;
  if (window.content.type === 'player') return window.content.song.name;
  if (window.content.type === 'info') {
    if (window.content.infoType === 'aracne') return "Ana Lázaro Estalot";
    if (window.content.infoType === 'juanma') return "Juan Manuel García";

    return "The Coven";
  }

  return "Window";
};

export default FILES;
