import i_err_heart from 'assets/img/music_os/error/heart.png';
import i_err_mask from 'assets/img/music_os/error/mask.png';
import i_err_rage from 'assets/img/music_os/error/rage.png';
import i_err_rope from 'assets/img/music_os/error/rope.png';

import i_mask_p0 from 'assets/img/music_os/gallery/the_mask/photos/0.jpg';
import i_mask_p1 from 'assets/img/music_os/gallery/the_mask/photos/1.jpg';
import i_mask_p2 from 'assets/img/music_os/gallery/the_mask/photos/2.jpg';
import i_mask_p3 from 'assets/img/music_os/gallery/the_mask/photos/3.jpg';
import i_mask_p4 from 'assets/img/music_os/gallery/the_mask/photos/4.jpg';
import i_mask_p5 from 'assets/img/music_os/gallery/the_mask/photos/5.jpg';
import i_mask_p6 from 'assets/img/music_os/gallery/the_mask/photos/6.jpg';

import i_mask_d0 from 'assets/img/music_os/gallery/the_mask/drawings/0.jpg';
import i_mask_d1 from 'assets/img/music_os/gallery/the_mask/drawings/1.jpg';
import i_mask_d2 from 'assets/img/music_os/gallery/the_mask/drawings/2.jpg';
import i_mask_d3 from 'assets/img/music_os/gallery/the_mask/drawings/3.jpg';
import i_mask_d4 from 'assets/img/music_os/gallery/the_mask/drawings/4.jpg';
import i_mask_d5 from 'assets/img/music_os/gallery/the_mask/drawings/5.jpg';
import i_mask_d6 from 'assets/img/music_os/gallery/the_mask/drawings/6.jpg';
import i_mask_d7 from 'assets/img/music_os/gallery/the_mask/drawings/7.jpg';
import i_mask_d8 from 'assets/img/music_os/gallery/the_mask/drawings/8.jpg';

import i_leak_p0 from 'assets/img/music_os/gallery/the_leak/photos/0.jpg';
import i_leak_p1 from 'assets/img/music_os/gallery/the_leak/photos/1.jpg';
import i_leak_p2 from 'assets/img/music_os/gallery/the_leak/photos/2.jpg';
import i_leak_p3 from 'assets/img/music_os/gallery/the_leak/photos/3.jpg';
import i_leak_p4 from 'assets/img/music_os/gallery/the_leak/photos/4.jpg';
import i_leak_p5 from 'assets/img/music_os/gallery/the_leak/photos/5.jpg';

import i_leak_d0 from 'assets/img/music_os/gallery/the_leak/drawings/0.jpg';
import i_leak_d1 from 'assets/img/music_os/gallery/the_leak/drawings/1.jpg';
import i_leak_d2 from 'assets/img/music_os/gallery/the_leak/drawings/2.jpg';
import i_leak_d3 from 'assets/img/music_os/gallery/the_leak/drawings/3.jpg';
import i_leak_d4 from 'assets/img/music_os/gallery/the_leak/drawings/4.jpg';
import i_leak_d5 from 'assets/img/music_os/gallery/the_leak/drawings/5.jpg';
import i_leak_d6 from 'assets/img/music_os/gallery/the_leak/drawings/6.jpg';

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
  drawings: Picture[];
  links: LinkFile[];
  isLeak: boolean;
}

export interface OtherFile {
  name: string;
  type: 'playlist' | 'witch' | 'coven' | 'wish' | 'contact'
  isLast: boolean;
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
  isLeak: boolean;
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

export interface PlaylistWindowContent {
  type: 'playlist';
}

export type WindowContent = PlayerWindowContent
  | FolderWindowContent
  | ErrorWindowContent
  | InfoWindowContent
  | GalleryWindowContent
  | PlaylistWindowContent;

export type Song = {
  name: string;
  internalName: string;
  folder: string;
  hasVideo: boolean;
}

export type Picture = {
  name: string;
  image: string;
}

export type LinkFile = {
  name: string;
  site: 'youtube';
  url: string;
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
  name: string,
  songs: Song[],
  photos: Picture[],
  drawings: Picture[],
  links: LinkFile[],
  isLeak: boolean = false
) : FolderFile {
  return {
    type: 'folder',
    name,
    songs,
    isLast: false,
    photos,
    drawings,
    links,
    isLeak,
  }
}

function song (
  folder: string,
  name: string,
  internalName: string,
  hasVideo: boolean = true,
) {
  return {
    name,
    internalName,
    folder,
    hasVideo,
  }
}

function picture (name: string, image: string) : Picture {
  return {
    name,
    image,
  };
}

function link (name: string, site: LinkFile['site'], url: string) {
  return {
    name,
    site,
    url,
  };
}

function other (
  type: OtherFile['type'], id: string, isLast: boolean = false
) : OtherFile {
  return {
    type,
    name: id,
    isLast,
  }
}

export const THE_LEAK = folder(
  "THE//LEAK",
  [
    song("the_leak", "Purple Rabbit (Extended).mp3", "purple_rabbit_ext"),
    song("the_leak", "She's Lovely.mp3", "shes_lovely"),
    song("the_leak", "I Survived Wrong (Extended).mp3", "i_survived_wrong_ext", false),
    song("the_leak", "Restless.mp3", "restless"),
  ],
  [
    picture("Burned.jpg", i_leak_p0),
    picture("The morning before.jpg", i_leak_p1),
    picture("Something underneath.jpg", i_leak_p2),
    picture("Not saved.jpg", i_leak_p3),
    picture("Not pure.jpg", i_leak_p4),
    picture("I was bright once.jpg", i_leak_p5),
  ],
  [
    picture("Lost.png", i_leak_d0),
    picture("Not the right place.png", i_leak_d1),
    picture("You can still breathe.png", i_leak_d2),
    picture("I need to see the real world.png", i_leak_d3),
    picture("Not chosen to rise.png", i_leak_d4),
    picture("I survived everything.png", i_leak_d5),
    picture("Gnorw.png", i_leak_d6),
  ],
  [
    link(
      "Carta de Mary a James (en Español)",
      'youtube',
      "https://youtu.be/UrAuAzh0Qyc"
    ),
  ],
  true
);

export const THE_MASK = folder(
  "THE//MASK",
  [
    song("the_mask", "Happy Happy Happy.mp3", "happy_happy_happy"),
    song("the_mask", "Tomorrow.mp3", "tomorrow"),
    song("the_mask", "Too many days.mp3", "too_many_days"),
    song("the_mask", "Clean Clean Clean.mp3", "clean_clean_clean"),
  ],
  [
    picture("Dopamine disaster!.jpg", i_mask_p0),
    picture("Everyday is Halloween.jpg", i_mask_p1),
    picture("Sunshine.jpg", i_mask_p2),
    picture("Me with friends.jpg", i_mask_p3),
    picture("Easy to love.jpg", i_mask_p4),
    picture("Lonely.jpg", i_mask_p5),
    picture("Camoff.jpg", i_mask_p6),
  ],
  [
    picture("Dreaming of.png", i_mask_d0),
    picture("Starting glowing.png", i_mask_d1),
    picture("How's starting.png", i_mask_d2),
    picture("Jump.png", i_mask_d3),
    picture("Sugar wired electricity.png", i_mask_d4),
    picture("Nothing.png", i_mask_d5),
    picture("Inside.png", i_mask_d6),
    picture("My real friends.png", i_mask_d7),
    picture("The Beginning.png", i_mask_d8),
  ],
  []
);

const FILES = [
  THE_MASK,
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
  THE_LEAK,
  other('playlist', "Playlist"),
  other('witch', "The Witch", true),
  other('coven', "The Coven", true),
  other('wish', "Make a Wish", true),
  other('contact', "Contact", true),
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
  if (window.content.type === 'playlist') return "Playlist";

  return "Window";
};

export default FILES;
