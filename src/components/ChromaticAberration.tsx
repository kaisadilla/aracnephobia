import React from 'react';
import styles from './ChromaticAberrationImage.module.scss';
import SiteImage, { SiteImageProps } from './SiteImage';
import { $cl } from 'utils';

export interface ChromaticAberrationProps {
    containerClassName?: string;
    children: React.ReactElement<{ className?: string }>;
}

function ChromaticAberration ({
    containerClassName,
    children,
}: ChromaticAberrationProps) {
    const sentinel = React.cloneElement(children, {
        className: [children.props.className, styles.sentinel]
            .filter(Boolean)
            .join(' '),
    });
    const base = React.cloneElement(children, {
        className: [children.props.className, styles.base]
            .filter(Boolean)
            .join(' '),
    });
    const aber1 = React.cloneElement(children, {
        className: [children.props.className, styles.aber1]
            .filter(Boolean)
            .join(' '),
    });
    const aber2 = React.cloneElement(children, {
        className: [children.props.className, styles.aber2]
            .filter(Boolean)
            .join(' '),
    });
    const top = React.cloneElement(children, {
        className: [children.props.className, styles.top]
            .filter(Boolean)
            .join(' '),
    });

    return (
        <div
            className={$cl(styles.chromaticAberration, containerClassName)}
        >
            {sentinel}
            {base}
            {aber1}
            {aber2}
            {top}
        </div>
    );
}

export default ChromaticAberration;
