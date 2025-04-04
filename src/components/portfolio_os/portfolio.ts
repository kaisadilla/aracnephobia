export type FileType = 'folder';

export type FileOrFolder = Folder;

export interface Folder {
    type: 'folder';
    name: string;
    children: FileOrFolder[];
}

const PORTFOLIO_OS: Folder[] = [
    {
        type: 'folder',
        name: "Branding",
        children: [],
    },
    {
        type: 'folder',
        name: "Drawing",
        children: [],
    },
    {
        type: 'folder',
        name: "Reels",
        children: [],
    },
]

export default PORTFOLIO_OS;