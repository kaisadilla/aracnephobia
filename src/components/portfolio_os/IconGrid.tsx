import React, { useEffect, useRef, useState } from 'react';
import styles from './IconGrid.module.scss';
import { useOsContext } from 'context/usePortfolioContext';
import OsIcon, { ICON_HEIGHT, ICON_WIDTH } from './OsIcon';
import PORTFOLIO_OS from './portfolio';
import useDynamicHook from 'hooks/useDynamicSize';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import useIndices from 'hooks/useIndices';
import { clampNumber } from 'utils';

const ICON_GAP = 20;

export interface IconGridProps {
    
}

function IconGrid (props: IconGridProps) {
    const ref = useRef<HTMLDivElement>(null);

    const ctx = useOsContext();
    const desktopSize = useDynamicHook(ref);
    const { indices, setOnTop } = useIndices(PORTFOLIO_OS.map(f => f.name));

    const [rows, setRows] = useState(1);
    const [cols, setCols] = useState(1);

    const [selected, setSelected] = useState<string | null>(null);

    const [iconPos, setIconPos] = useState<Record<string, [number, number]>>({});

    useEffect(() => {
        setRows(Math.floor(desktopSize.width / (ICON_WIDTH + ICON_GAP)));
        setCols(Math.floor(desktopSize.height / (ICON_HEIGHT + ICON_GAP)));
    }, [desktopSize]);

    useEffect(() => {
        let currentRow = 0;
        let currentCol = 0;

        for (const f of PORTFOLIO_OS) {
            const top = currentCol * (ICON_HEIGHT + ICON_GAP)
            const left = currentRow * (ICON_WIDTH + ICON_GAP)

            currentCol++;
            if (currentCol >= cols) {
                currentRow++;
                currentCol = 0;
            }

            setIconPos(prev => ({
                ...prev,
                [f.name]: [top, left],
            }))
        }
    }, [rows, cols])

    return (
        <div
            ref={ref}
            className={styles.iconGrid}
            onClick={() => setSelected(null)}
        >
            <DndContext onDragEnd={handleDragEnd}>
                {PORTFOLIO_OS.map(f => {
                    const pos = iconPos[f.name] ?? [0, 0];
                    const index = indices[f.name] ?? 0;

                    return <OsIcon
                        key={f.name}
                        file={f}
                        position={{top: pos[0], left: pos[1]}}
                        index={index}
                        selected={selected === f.name}
                        onPointerDown={() => {
                            setOnTop(f.name);
                            setSelected(f.name);
                        }}
                    />
                })}
            </DndContext>
        </div>
    );

    function handleDragEnd (evt: DragEndEvent) {
        let newPos = iconPos[evt.active.id] ?? [0, 0]; 
        newPos[0] += evt.delta.y;
        newPos[1] += evt.delta.x;

        newPos[0] = clampNumber(newPos[0], 0, (cols - 0.6) * (ICON_HEIGHT + ICON_GAP));
        newPos[1] = clampNumber(newPos[1], 0, (rows - 0.6) * (ICON_WIDTH + ICON_GAP));

        setIconPos(prev => ({
            ...prev,
            [evt.active.id]: newPos,
        }))
    }
}

export default IconGrid;
