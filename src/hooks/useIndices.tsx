import { useState } from "react";
import { clampNumber } from "utils";

export default function useIndices (ids: string[]) {
    const [indices, setIndices] = useState<Record<string, number>>((() => {
        const ind: Record<string, number> = {};
        for (const str of ids) {
            ind[str] = 0;
        }
        return ind;
    })());

    function setOnTop (key: string) {
        const newIndices = {...indices};
        const maxIndex = Object.keys(newIndices).length;

        for (const k of Object.keys(newIndices)) {
            newIndices[k] = clampNumber(newIndices[k] - 1, 0, maxIndex - 1);
        }
        newIndices[key] = maxIndex;

        setIndices(newIndices);
    }

    return {
        indices,
        setOnTop,
    };
}