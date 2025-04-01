import SiteImage from 'components/SiteImage';
import { IMG } from 'img/img';
import React from 'react';
import styles from "./page.module.scss";
import PortfolioOs from 'components/PortfolioOs';

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
                    <PortfolioOs />
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;
