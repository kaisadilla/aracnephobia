import React from 'react';
import WebHeader from '@src/components/WebHeader';
import styles from "./page.module.scss";
import twpHorizThin from "@src/img/twp-horiz-thin.webp";
import Word from './Word';
import WordTable from './WordTable';
import { makeRect } from '../../types';
import { Typewriter } from 'react-simple-typewriter';

function AboutMePage () {

    return (
        <div className={styles.page}>
            <div className={styles.headerContainer}>
                <WebHeader />
            </div>
            <div className={styles.content}>
                <img className={styles.curtainTop} src={twpHorizThin} alt="" />
                <WordTable className={styles.wordTable}>
                    <Word
                        word="CARTOON"
                        font='invisible'
                        pos={makeRect(0, 0, 0.23, 0.42)}
                    />
                    <Word
                        word="UI/UX"
                        font='illusion-magic'
                        pos={makeRect(0.18, 0, 0.53, 0.37)}
                    />
                </WordTable>
            </div>
            {false && <div style={{width: 210}}>
                {/*this is a long string*/}
                <Typewriter
                    words={["This is a long string"]}
                    cursor
                    cursorStyle="|"
                    typeSpeed={150}
                />
            </div>}
        </div>
    );
}

export default AboutMePage;
