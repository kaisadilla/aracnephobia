import React from 'react';
import styles from './section.module.scss';
import { $cl } from 'utils';

export interface SkillCellProps {
    title: string;
    icon: React.ReactElement;
    className?: string;
}

function SkillCell ({
    title,
    icon,
    className,
}: SkillCellProps) {

    return (
        <div className={$cl(styles.artSkill, className)}>
            <div className={styles.nameContainer}>
                <span>{title}</span>
            </div>
            <div className={styles.iconContainer}>
                {icon}
            </div>
        </div>
    );
}

export default SkillCell;
