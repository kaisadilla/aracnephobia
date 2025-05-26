import React, { useState } from 'react';
import styles from './styles.module.scss';
import { $cl } from 'utils';

export interface SpoilerProps {
    children: React.ReactNode;
}

function Spoiler ({
    children,
}: SpoilerProps) {
    const [isRevealed, setRevealed] = useState(false);

    return (
        <span
            className={$cl(styles.spoiler, isRevealed && styles.revealed)}
            onPointerDown={() => setRevealed(true)}
        >
            {children}
        </span>
    );
}

export default Spoiler;
