import React from 'react';
import styles from './section.module.scss';
import SVG from 'assets/img/svg';
import { $cl } from 'utils';

export interface FeatureCellProps {
    icon: React.ReactElement;
    name: string;
    href?: string;
    bloody?: boolean;
    className?: string;
}

function FeatureCell ({
    icon,
    name,
    href,
    bloody = false,
    className,
}: FeatureCellProps) {
    return (
        <a
            className={$cl(styles.featureCell, className)}
            target='_blank'
            href={href}
        >
            {bloody && <SVG.about.blood_border className={styles.bloodyBorder} />}
            <div className={styles.iconContainer}>
                {icon}
            </div>
            <div className={styles.name}>
                <SVG.heart />
                <span>{name}</span>
            </div>
        </a>
    );
}

export default FeatureCell;
