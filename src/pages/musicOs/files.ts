import i_err_heart from 'assets/img/music_os/error/heart.png';
import i_err_mask from 'assets/img/music_os/error/mask.png';
import i_err_rage from 'assets/img/music_os/error/rage.png';
import i_err_rope from 'assets/img/music_os/error/rope.png';

import i_mask_p0 from 'assets/img/music_os/gallery/the_mask/photos/test1.jpg';
import i_mask_p1 from 'assets/img/music_os/gallery/the_mask/photos/test2.jpg';
import i_mask_p2 from 'assets/img/music_os/gallery/the_mask/photos/test3.jpg';
import i_mask_p3 from 'assets/img/music_os/gallery/the_mask/photos/test4.gif';

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
  photos: Picture[];
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

export interface GalleryWindowContent {
  type: 'gallery';
  name: string;
  pictures: Picture[];
}

export type WindowContent = PlayerWindowContent
  | FolderWindowContent
  | ErrorWindowContent
  | InfoWindowContent
  | GalleryWindowContent;

export type Song = {
  name: string;
  internalName: string;
  folder: string;
}

export type Picture = {
  name: string;
  image: string;
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

function folder (
  name: string, songs: Song[], photos: Picture[], drawings: Picture[]
) : FolderFile {
  return {
    type: 'folder',
    name,
    songs,
    isLast: false,
    photos,
  }
}

function song (folder: string, name: string, internalName: string) {
  return {
    name,
    internalName,
    folder,
  }
}

function picture (name: string, image: string) : Picture {
  return {
    name,
    image,
  };
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
    [
      picture("Test 1.png", i_mask_p0),
      picture("This is an incredibly long title for a picture.JPG", i_mask_p1),
      picture("EW.pdf", i_mask_p2),
      picture("Watching.gif", i_mask_p3),
    ],
    [

    ]
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
  if (window.content.type === 'gallery') return window.content.name;

  return "Window";
};

export default FILES;
