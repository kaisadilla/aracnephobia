import React from 'react';
import styles from "./Navigator.module.scss";
import SiteImage from './SiteImage';
import { ImageSrc, IMG } from 'assets/img/img';
import { Link } from 'react-router-dom';
import SVG from 'assets/img/svg';

export interface NavigatorProps {
    
}

function Navigator (props: NavigatorProps) {

    return (
        <div className={styles.navigatorContainer}>
            <div className={styles.navigator}>
                <Link className={styles.left} to="/portfolio">
                    <_Icon icon={<SVG.sections.portfolio />} label="Portfolio" />
                </Link>
                <Link className={styles.center} to="/home">
                    <_Icon icon={<SVG.sections.home />} label="Home" />
                </Link>
                <Link className={styles.right} to="/about">
                    <_Icon icon={<SVG.sections.about />} label="About" />
                </Link>
            </div>
        </div>
    );
}

export default Navigator;

interface _IconProps {
    icon: React.ReactNode;
    label: string;
}

function _Icon ({
    icon,
    label,
}: _IconProps) {

    return (
        <div className={styles.icon}>
            {icon}
            <div className={styles.label}>
                {label}
            </div>
        </div>
    );
}