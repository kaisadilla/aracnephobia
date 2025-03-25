import React from 'react';
import styles from "./WebHeader.module.scss";
import planet from "@src/img/planet.webp";
import logo from "@src/img/logo-lettering.webp";

export interface WebHeaderProps {
    
}

function WebHeader (props: WebHeaderProps) {

    return (
        <header className={styles.header}>
            <img className={styles.planet} src={planet} alt="" />
            <img className={styles.lettering} src={logo} alt="" />
        </header>
    );
}

export default WebHeader;
