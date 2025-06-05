import React, { useRef, useState } from 'react';
import styles from "./PortfolioOs.module.scss";
import SiteImage from '../SiteImage';
import { IMG } from 'assets/img/img';
import IconGrid from './IconGrid';
import WindowArea from './WindowArea';
import TaskbarTabs from './TaskbarTabs';
import Clock from './Clock';
import { OsFile } from 'context/usePortfolioContext';
import CustomCursor from 'components/CustomCursor';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';
import { useMediaQuery } from '@mantine/hooks';

export interface PortfolioOsProps {
    
}

function PortfolioOs (props: PortfolioOsProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isPhone = useMediaQuery('(min-width: 50rem)') === false;

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
                {isPhone && <SiteImage
                    className={styles.curtain}
                    image={IMG.about.curtain_left}
                />}
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
