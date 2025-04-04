import React, { useEffect, useRef, useState } from 'react';
import styles from './WindowArea.module.scss';
import Window from './Window';
import { Folder, useOsContext } from 'context/usePortfolioContext';
import MovableWindow from './MovableWindow';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import useDynamicHook from 'hooks/useDynamicSize';
import { clampNumber } from 'utils';

export interface WindowAreaProps {
}

function WindowArea ({
}: WindowAreaProps) {
    const ref = useRef<HTMLDivElement>(null);

    const ctx = useOsContext();
    const desktopSize = useDynamicHook(ref);

    const [windowPos, setWindowPos] = useState<Record<string, [number, number]>>({
        'Drawing': [200, 100],
    });

    const tmp = windowPos['Drawing'];

    return (
        <div ref={ref} className={styles.windowArea}>
            <DndContext onDragEnd={handleDragEnd}>
                <MovableWindow folder={ctx.drawingFolder} position={{top: tmp[0], left: tmp[1]}} />
            </DndContext>
        </div>
    );

    function handleDragEnd (evt: DragEndEvent) {
        let newPos = windowPos[evt.active.id] ?? [0, 0];
        newPos[0] += evt.delta.y;
        newPos[1] += evt.delta.x;

        newPos[0] = clampNumber(newPos[0], 0, desktopSize.height);
        newPos[1] = clampNumber(newPos[1], 0, desktopSize.width);

        console.log(windowPos);

        setWindowPos(prev => ({
            ...prev,
            [evt.active.id]: newPos,
        }));
    }
}

export default WindowArea;
