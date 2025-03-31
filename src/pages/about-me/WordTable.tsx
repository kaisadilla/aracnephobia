import React from 'react';
import styles from "./WordTable.module.scss";
import { $cl } from 'utils';

export interface WordTableProps {
    className?: string;
    children?: React.ReactNode;
}

function WordTable ({
    className,
    children,
}: WordTableProps) {

    return (
        <div className={$cl(styles.wordTable, className)}>
            {children}
        </div>
    );
}

export default WordTable;
