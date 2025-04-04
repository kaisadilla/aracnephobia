import React from 'react';
import styles from "./PortfolioOs.module.scss";
import SiteImage from '../SiteImage';
import { IMG } from 'img/img';
import IconGrid from './IconGrid';
import WindowArea from './WindowArea';
import TaskbarTabs from './TaskbarTabs';
import Clock from './Clock';

export interface PortfolioOsProps {
    
}

function PortfolioOs (props: PortfolioOsProps) {

    return (
        <div className={styles.screen}>
            <div className={styles.desktop}>
                <IconGrid />
                <WindowArea />
            </div>
            <div className={styles.taskbar}>
                <div className={styles.startContainer}>
                    <div className={styles.start}>
                        START
                    </div>
                </div>
                <div className={styles.taskbarContainer}>
                    <TaskbarTabs />
                </div>
                <div className={styles.clockContainer}>
                    <Clock />
                </div>
            </div>
        </div>
    );
}

export default PortfolioOs;
