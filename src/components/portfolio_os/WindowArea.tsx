import React, { useEffect, useRef, useState } from 'react';
import styles from './WindowArea.module.scss';
import Window from './Window';
import { Folder, useOsContext } from 'context/usePortfolioContext';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import useDynamicHook from 'hooks/useDynamicSize';
import { clampNumber } from 'utils';
import useIndices from 'hooks/useIndices';

export interface WindowAreaProps {
}

function WindowArea ({
}: WindowAreaProps) {
    const ref = useRef<HTMLDivElement>(null);

    const ctx = useOsContext();
    const desktopSize = useDynamicHook(ref);

    return (
        <div ref={ref} className={styles.windowArea}>
            <DndContext onDragEnd={handleDragEnd}>
                {Object.keys(ctx.openWindows)
                    .map(k => ctx.openWindows[k])
                    .filter(w => w.isMinimized === false)
                    .map(w => (
                        <Window
                            key={w.id}
                            parentWidth={desktopSize.width}
                            parentHeight={desktopSize.height}
                            window={w}
                            index={ctx.windowIndices[w.id]}
                            onPointerDown={() => ctx.setWindowOnTop(w.id)}
                        />
                    )
                )}
            </DndContext>
        </div>
    );

    function handleDragEnd (evt: DragEndEvent) {
        const window = ctx.openWindows[evt.active.id];
        let newPos = ctx.openWindows[evt.active.id].position;
        newPos.top += evt.delta.y;
        newPos.left += evt.delta.x;

        newPos.top = clampNumber(newPos.top, 0, desktopSize.height - 64);
        newPos.left = clampNumber(newPos.left, 0, desktopSize.width - 160);

        ctx.updateWindow(evt.active.id as string, {
            ...window,
            position: newPos,
        });
    }
}

export default WindowArea;
