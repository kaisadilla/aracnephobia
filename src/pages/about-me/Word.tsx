import React, { useEffect, useRef, useState } from 'react';
import styles from "./Word.module.scss";
import { Rect } from '../../types';
import { $cl } from '../../utils';
import { usePlaySound } from '../../hooks/usePlaySound';

const WRITE_SPEED = 200;
const FINAL_DELAY = 1000;

export type WordFont = 'invisible' | 'illusion-magic';

type FontInfo = {
    fontFamily: string;
    multiplier: number;
    marginTop: number;
}

type RevealState = 'hidden' | 'revealing' | 'complete';

export interface WordProps {
    font: WordFont;
    pos: Rect;
    word: string;
    writeSpeed?: number;
    finalDelay?: number;
}

const FONT_INFO: {[key in WordFont]: FontInfo} = {
    'illusion-magic': {
        fontFamily: "var(--font-illusion-magic)",
        multiplier: 1.5,
        marginTop: -0.43,
    },
    'invisible': {
        fontFamily: "var(--font-invisible)",
        multiplier: 1.1,
        marginTop: -0.25,
    },
};

function Word ({
    font,
    pos,
    word,
    writeSpeed = WRITE_SPEED,
    finalDelay = FINAL_DELAY,
}: WordProps) {
    const ref = useRef<HTMLDivElement>(null);

    const [height, setHeight] = useState(16);
    const [displayText, setDisplayText] = useState("?");
    const [revealState, setRevealState] = useState<RevealState>('hidden');

    const { playRepeated } = usePlaySound("/sfx/typewriter0.ogg");

    const fontInfo = FONT_INFO[font as 'invisible'];

    useEffect(() => {
        const handleResize = () => {
            if (!ref.current) return;
            setHeight(ref.current.clientHeight * fontInfo.multiplier);
        }

        if (ref.current) {
            setHeight(ref.current.clientHeight * fontInfo.multiplier);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [ref.current]);

    const handleHover = () => {
        if (revealState !== 'hidden') return;
        setRevealState('revealing');

        for (let i = 0; i < word.length; i++) {
            setTimeout(
                () => setDisplayText(word.substring(0, i + 1)),
                writeSpeed * i
            );
        }

        playRepeated(word.length, writeSpeed);

        setTimeout(
            () => setRevealState('complete'),
            (writeSpeed * word.length + finalDelay)
        );
    }

    const style: React.CSSProperties = {
        left: pos.left * 100 + "%",
        top: pos.top * 100 + "%",
        width: pos.width * 100 + "%",
        height: pos.height * 100 + "%",
        fontFamily: fontInfo.fontFamily,
        fontSize: height + "px",
    }

    return (
        <div ref={ref} className={styles.word} style={style}>
            <div
                className={styles.textContainer}
                style={{marginTop: fontInfo.marginTop + "em"}}
            >
                <span
                    className={$cl(styles.text, styles[revealState])}
                    onMouseEnter={handleHover}
                >
                    {displayText}
                </span>
            </div>
        </div>
    );
}

export default Word;
