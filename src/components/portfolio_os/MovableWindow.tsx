import { useDraggable } from '@dnd-kit/core';
import { Folder } from 'context/usePortfolioContext';
import React, { useRef, useState } from 'react';
import { CSS } from '@dnd-kit/utilities';
import Window, { WindowProps } from './Window';

export interface MovableWindowProps extends WindowProps {
    position: { top: number, left: number };
    index?: number;
    onPointerDown?: (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function MovableWindow ({
    folder,
    position,
    index = 0,
    onPointerDown,
    ...windowProps
}: MovableWindowProps) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: folder.name,
    });

    const [size, setSize] = useState({ width: 400, height: 300 });

    const style: React.CSSProperties = {
        top: position.top + "px",
        left: position.left + "px",
        transform: CSS.Translate.toString(transform),
        zIndex: index,
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            onPointerDown={handlePointerDown}
        >
            <Window folder={folder} {...windowProps} />
        </div>
    );

    function handlePointerDown (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        listeners?.onPointerDown?.(evt);
        onPointerDown?.(evt);
    }
}

export default MovableWindow;
