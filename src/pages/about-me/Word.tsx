import React, { useEffect, useRef, useState } from 'react';
import styles from "./Word.module.scss";
import { Rect } from '../../types';
import { $cl } from '../../utils';
import { usePlaySound } from '../../hooks/usePlaySound';
import { Typewriter } from 'react-simple-typewriter';

const DURATION = 1500;
const FINAL_DELAY = 1000;

export type WordFont = 'gotile'
    | 'grandstander'
    | 'invisible'
    | 'illusion-magic';

type FontInfo = {
    fontFamily: string;
    marginTop: number;
    lineHeight: number;
}

type RevealState = 'hidden' | 'revealing' | 'complete';

export interface WordProps {
    font: WordFont;
    pos: Rect;
    word: string;
    fontSize: number;
    align?: string;
    duration?: number;
    finalDelay?: number;
}

const FONT_INFO: {[key in WordFont]: FontInfo} = {
    'gotile': {
        fontFamily: "var(--font-gotile)",
        marginTop: 0.1,
        lineHeight: 0.8,
    },
    'grandstander': {
        fontFamily: "var(--font-grandstander)",
        marginTop: 0,
        lineHeight: 1,
    },
    'illusion-magic': {
        fontFamily: "var(--font-illusion-magic)",
        marginTop: -0.15,
        lineHeight: 1,
    },
    'invisible': {
        fontFamily: "var(--font-invisible)",
        marginTop: 0.04,
        lineHeight: 1,
    },
};

function Word ({
    font,
    pos,
    word,
    fontSize = 1,
    align = 'center',
    duration = DURATION,
    finalDelay = FINAL_DELAY,
}: WordProps) {
    const ref = useRef<HTMLDivElement>(null);

    const [height, setHeight] = useState(16);
    const [revealState, setRevealState] = useState<RevealState>('hidden');

    const { playRepeated } = usePlaySound("/sfx/typewriter0.ogg");

    const fontInfo = FONT_INFO[font as 'invisible'];

    // Resize the text to fit the container.
    useEffect(() => {
        const handleResize = () => {
            if (!ref.current) return;
            setHeight(ref.current.clientHeight * fontSize);
        }

        if (ref.current) {
            setHeight(ref.current.clientHeight * fontSize);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [ref.current?.clientHeight, fontSize]);

    const handleHover = () => {
        if (revealState !== 'hidden') return;
        setRevealState('revealing');

        playRepeated(word.length, duration / word.length);

        setTimeout(
            () => setRevealState('complete'),
            (duration + finalDelay)
        );
    }

    const style: React.CSSProperties = {
        left: pos.left * 100 + "%",
        top: pos.top * 100 + "%",
        width: pos.width * 100 + "%",
        height: pos.height * 100 + "%",
        fontFamily: fontInfo.fontFamily,
        fontSize: height + "px",
        lineHeight: fontInfo.lineHeight + "em",
        textAlign: (revealState === 'hidden' ? 'center' : align) as unknown as any,
    }

    return (
        <div ref={ref} className={styles.word} style={style}>
            <div
                className={styles.textContainer}
                style={{marginTop: fontInfo.marginTop + "em"}}
            >
                <span
                    className={$cl(styles.text)}
                    onMouseEnter={handleHover}
                >
                    {revealState === 'hidden' && "?"}
                    {revealState !== 'hidden' && <Typewriter
                        words={[word]}
                        cursor
                        cursorStyle="|"
                        cursorColor={
                            revealState === 'revealing'
                                ? "var(--color-primary)"
                                : "transparent"
                        }
                        typeSpeed={duration / word.length}
                    />}
                </span>
            </div>
        </div>
    );
}

export default Word;
