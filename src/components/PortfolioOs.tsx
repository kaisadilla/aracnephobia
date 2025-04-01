import React from 'react';
import styles from "./PortfolioOs.module.scss";
import SiteImage from './SiteImage';
import { IMG } from 'img/img';

export interface PortfolioOsProps {
    
}

function PortfolioOs (props: PortfolioOsProps) {

    return (
        <div className={styles.screen}>
            Sample text.
            {/*THIS IS SOME RANDOM TEXT.
            <SiteImage
                className={styles.aracne}
                image={IMG.psychedelic_aracne}
            />*/}
        </div>
    );
}

export default PortfolioOs;
