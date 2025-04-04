import SiteImage from 'components/SiteImage';
import { IMG } from 'img/img';
import React from 'react';
import styles from "./page.module.scss";
import PortfolioOs from 'components/portfolio_os/PortfolioOs';
import { OsContextProvider } from 'context/usePortfolioContext';

export interface PortfolioPageProps {
    
}

function PortfolioPage (props: PortfolioPageProps) {

    return (
        <div className={styles.page}>
            <SiteImage
                className={styles.rightCurtain}
                image={IMG.twp_vert}
                noAlt
            />
            <SiteImage
                className={styles.aracne}
                image={IMG.psychedelic_aracne}
                noAlt
            />
            <div className={styles.content}>
                <div className={styles.screen}>
                    <OsContextProvider>
                        <PortfolioOs />
                    </OsContextProvider>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;
