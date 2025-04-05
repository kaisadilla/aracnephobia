//import { useDraggable } from '@dnd-kit/core';
//import { Folder } from 'context/usePortfolioContext';
//import React, { useRef, useState } from 'react';
//import { CSS } from '@dnd-kit/utilities';
//import Window, { WindowProps } from './Window';
//import styles from './MovableWindow.module.scss';
//
//export interface MovableWindowProps extends WindowProps {
//    index?: number;
//    onPointerDown?: (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
//}
//
//function MovableWindow ({
//    window,
//    index = 0,
//    onPointerDown,
//    ...windowProps
//}: MovableWindowProps) {
//    const { attributes, listeners, setNodeRef, transform } = useDraggable({
//        id: window.id,
//    });
//
//    const [size, setSize] = useState({ width: 400, height: 300 });
//
//    const style: React.CSSProperties = {
//        top: window.position.top + "px",
//        left: window.position.left + "px",
//        transform: CSS.Translate.toString(transform),
//        zIndex: index,
//    }
//
//    return (
//        <div
//            className={styles.movableWindow}
//            ref={setNodeRef}
//            style={style}
//            {...attributes}
//            onPointerDown={handlePointerDown}
//        >
//            <Window window={window} dragListeners={listeners} {...windowProps} />
//        </div>
//    );
//
//    function handlePointerDown (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//        listeners?.onPointerDown?.(evt);
//        onPointerDown?.(evt);
//    }
//}
//
//export default MovableWindow;
//