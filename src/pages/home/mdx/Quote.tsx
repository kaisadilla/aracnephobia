import React from 'react';
import styles from './styles.module.scss';

export interface QuoteProps {
    children: React.ReactNode;
}

function Quote ({
    children,
}: QuoteProps) {

    return (
        <div className={styles.quote}>
            {children}
        </div>
    );
}

export default Quote;
