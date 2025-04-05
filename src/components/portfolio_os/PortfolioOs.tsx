import React, { useRef, useState } from 'react';
import styles from "./PortfolioOs.module.scss";
import SiteImage from '../SiteImage';
import { IMG } from 'img/img';
import IconGrid from './IconGrid';
import WindowArea from './WindowArea';
import TaskbarTabs from './TaskbarTabs';
import Clock from './Clock';
import { OsFile } from 'context/usePortfolioContext';
import CustomCursor from 'components/CustomCursor';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';

export interface PortfolioOsProps {
    
}

function PortfolioOs (props: PortfolioOsProps) {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div ref={ref} className={styles.screen}>
            {false && <CustomCursor
                className={styles.cursor}
                target={ref}
            >
                <ChromaticAberrationImage
                    image={IMG.os.cursor}
                    alt="o"
                />
            </CustomCursor>}
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
