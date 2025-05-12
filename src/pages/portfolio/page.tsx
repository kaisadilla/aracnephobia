import SiteImage from 'components/SiteImage';
import { IMG } from 'assets/img/img';
import React from 'react';
import styles from "./page.module.scss";
import PortfolioOs from 'components/portfolio_os/PortfolioOs';
import { OsContextProvider } from 'context/usePortfolioContext';
import { useMediaQuery } from '@mantine/hooks';

export interface PortfolioPageProps {
    
}

function PortfolioPage (props: PortfolioPageProps) {
    const isPhone = useMediaQuery('(min-width: 50rem)') === false;

    return (
        <div className={styles.page}>
            {isPhone === false && <>
                <SiteImage
                    className={styles.rightCurtain}
                    image={IMG.twp_vert}
                />
                <SiteImage
                    className={styles.aracne}
                    image={IMG.psychedelic_aracne}
                />
                <div className={styles.content}>
                    <div className={styles.screen}>
                        <OsContextProvider>
                            <PortfolioOs />
                        </OsContextProvider>
                    </div>
                </div>
            </>}
            {isPhone && <span>This section is not yet available on phone devices.</span>}
        </div>
    );
}

export default PortfolioPage;
