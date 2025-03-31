export interface Rect {
    top: number,
    left: number,
    height: number,
    width: number,
}

export function makeRect (
    top: number, left: number, height: number, width: number
) : Rect {
    return { top, left, height, width }
}

export type DivProps = React.HTMLAttributes<HTMLDivElement>;
export type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

export type Except<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
