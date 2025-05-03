import React from 'react';
import { DivProps } from 'types';
import styles from './Window.module.scss';
import { $cl } from 'utils';
import SVG from 'assets/img/svg';

export interface WindowProps extends DivProps {
    title: string;
    children?: React.ReactNode;
    contentClassName?: string;
}

function Window ({
    title,
    children,
    className,
    contentClassName,
    ...divProps
}: WindowProps) {

    return (
        <div className={$cl(styles.window, className)} {...divProps}>
            <div className={styles.header}>
                <div className={styles.title}>{title}</div>
                <div className={styles.ribbon}>
                    <div><SVG.about.window.minimize /></div>
                    <div><SVG.about.window.heart /></div>
                    <div><SVG.about.window.close /></div>
                </div>
            </div>
            <div className={$cl(styles.content, contentClassName)}>
                {children}
            </div>
        </div>
    );
}

export default Window;
