import React from 'react';
import { DivProps } from 'types';
import styles from './Window.module.scss';
import { $cl } from 'utils';
import SVG from 'assets/img/svg';

export interface WindowProps extends DivProps {
    title: string;
    children?: React.ReactNode;
    contentClassName?: string;
    frameClassName?: string;
}

function Window ({
    title,
    children,
    className,
    contentClassName,
    frameClassName,
    ...divProps
}: WindowProps) {

    return (
        <div className={$cl(styles.window, className)} {...divProps}>
            <div className={styles.header}>
                <div
                    className={styles.title}
                    style={{animationDelay: `${(Math.random() * 12) - 6}s`}}
                >
                    {title}
                </div>
                <div className={styles.ribbon}>
                    <div><SVG.about.window.minimize /></div>
                    <div><SVG.about.window.heart /></div>
                    <div><SVG.about.window.close /></div>
                </div>
            </div>
            <div className={$cl(styles.content, contentClassName)}>
                <div className={$cl(styles.contentFrame, frameClassName)}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Window;
