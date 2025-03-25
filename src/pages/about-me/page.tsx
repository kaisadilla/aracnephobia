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
                        fontSize={1.15}
                        pos={makeRect(0, 0, 0.23, 0.42)}
                    />
                    <Word
                        word="UI/UX"
                        font='illusion-magic'
                        fontSize={1.45}
                        pos={makeRect(0.21, 0, 0.42, 0.37)}
                    />
                    <Word
                        word="CONTENT CREATOR"
                        font='gotile'
                        fontSize={0.5}
                        pos={makeRect(0.63, 0, 0.37, 0.25)}
                    />
                    <Word
                        word="MARKETING"
                        font='invisible'
                        fontSize={1.2}
                        pos={makeRect(0.58, 0.25, 0.42, .75)}
                    />
                    <Word
                        word="WEB&#x2009; DESIGN"
                        font='gotile'
                        align='end'
                        fontSize={0.55}
                        pos={makeRect(0.03, 0.76, 0.48, 0.235)}
                    />
                    <Word
                        word="ILLUSTRATION"
                        font='grandstander'
                        align='end'
                        fontSize={1.2}
                        pos={makeRect(0.47, 0.67, 0.14, 0.325)}
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
