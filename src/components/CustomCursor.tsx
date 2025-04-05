import React, { useEffect, useState } from 'react';
import styles from './CustomCursor.module.scss';
import { DivProps } from 'types';
import { $cl } from 'utils';

export interface CustomCursorProps extends DivProps {
    target: React.RefObject<HTMLDivElement | null>;
    children?: React.ReactNode;
}

function CustomCursor ({
    target,
    children,
    className,
    ...divProps
}: CustomCursorProps) {
    const [isVisible, setVisible] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (target.current === null) return;
        const t = target.current;

        const handleMouseEnter = (evt: PointerEvent) => {
            setVisible(evt.pointerType === 'mouse');
        }
        const handleMouseLeave = () => setVisible(false);
        const handleMouseMove = (evt: MouseEvent) => {
            setPos({ x: evt.clientX, y: evt.clientY });
        };

        t.addEventListener('pointerenter', handleMouseEnter);
        t.addEventListener('pointerleave', handleMouseLeave);
        t.addEventListener('pointermove', handleMouseMove);

        return () => {
            t.removeEventListener('pointerenter', handleMouseEnter);
            t.removeEventListener('pointerleave', handleMouseLeave);
            t.removeEventListener('pointermove', handleMouseMove);
        }
    }, [target]);

    console.log(className);
    if (isVisible === false) return null;

    return (
        <div
            className={$cl(styles.customCursor, className)}
            style={{ top: pos.y, left: pos.x }}
            {...divProps}
        >
            {children}
        </div>
    );
}

export default CustomCursor;
