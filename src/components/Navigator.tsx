import React from 'react';
import styles from "./Navigator.module.scss";
import SiteImage from './SiteImage';
import { ImageSrc, IMG } from 'img/img';

export interface NavigatorProps {
    
}

function Navigator (props: NavigatorProps) {

    return (
        <div className={styles.navigatorContainer}>
            <div className={styles.navigator}>
                <div className={styles.left}>
                    <_Icon image={IMG.navigator.portfolio} label="Portfolio" />
                </div>
                <div className={styles.center}>
                    <_Icon image={IMG.navigator.blog} label="Inicio" />
                </div>
                <div className={styles.right}>
                    <_Icon image={IMG.navigator.me} label="Yo" />
                </div>
            </div>
        </div>
    );
}

export default Navigator;

interface _IconProps {
    image: ImageSrc;
    label: string;
}

function _Icon ({
    image,
    label,
}: _IconProps) {

    return (
        <div className={styles.icon}>
            <SiteImage
                image={image}
            />
            <div className={styles.label}>
                {label}
            </div>
        </div>
    );
}
