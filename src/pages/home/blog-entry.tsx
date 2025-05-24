import { ImageSrc, IMG } from "assets/img/img";

export interface BlogEntryAttributes {
    title: string;
    created: Date;
    id?: string;
    author: BlogAuthorId;
    published: boolean;
}

export type BlogAuthorId = 'aracnephobia'
    ;

export interface BlogAuthor {
    name: string;
    pic: ImageSrc;
}

export const BLOG_AUTHORS: { [key in BlogAuthorId]: BlogAuthor} = {
    'aracnephobia': {
        name: "Aracne Phobia",
        pic: IMG.aracne,
    }
};