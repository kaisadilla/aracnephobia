import SiteImage from 'components/SiteImage';
import { IMG } from 'assets/img/img';
import React from 'react';
import styles from "./page.module.scss";
import PortfolioOs from 'components/portfolio_os/PortfolioOs';
import { OsContextProvider } from 'context/usePortfolioContext';
import { useMediaQuery } from '@mantine/hooks';
import { Portal } from '@mantine/core';

export interface PortfolioPageProps {
    
}

function PortfolioPage (props: PortfolioPageProps) {
    const isPhone = useMediaQuery('(min-width: 50rem)') === false;

    return (
        <div className={styles.page}>
            {isPhone === false && <>
                <Portal>
                    <SiteImage
                        className={styles.rightCurtain}
                        image={IMG.twp_vert}
                    />
                </Portal>
                <SiteImage
                    className={styles.aracne}
                    image={IMG.psychedelic_aracne}
                />
                <div className="screenPresentation">
                    <div className="screen">
                        <OsContextProvider>
                            <PortfolioOs />
                        </OsContextProvider>
                    </div>
                </div>
            </>}
            {isPhone && <>
                <OsContextProvider>
                    <PortfolioOs />
                </OsContextProvider>
            </>}
        </div>
    );
}

export default PortfolioPage;
