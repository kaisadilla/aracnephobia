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