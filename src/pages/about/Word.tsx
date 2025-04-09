import React, { useEffect, useRef, useState } from 'react';
import styles from "./Word.module.scss";
import { Rect } from 'types';
import { usePlaySound } from 'hooks/usePlaySound';
import { Typewriter } from 'react-simple-typewriter';
import { $cl } from 'utils';
import SiteImage from 'components/SiteImage';
import { ImageSrc, IMG } from 'img/img';
import useDynamicHook from 'hooks/useDynamicSize';

const DURATION = 1500;
const FINAL_DELAY = 1000;

export type WordFont = 'amatic-sc'
    | 'gotile'
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
    image: ImageSrc;
    imagePos: Rect;
    font: WordFont;
    wordPos: Rect;
    word: string;
    fontSize: number;
    startsRevealed?: boolean;
    align?: string;
    duration?: number;
    finalDelay?: number;
    debug?: boolean;
}

const FONT_INFO: {[key in WordFont]: FontInfo} = {
    'amatic-sc': {
        fontFamily: "var(--font-amatic-sc)",
        marginTop: 0.1,
        lineHeight: 0.9,
    },
    'gotile': {
        fontFamily: "var(--font-gotile)",
        marginTop: 0.1,
        lineHeight: 0.9,
    },
    'grandstander': {
        fontFamily: "var(--font-grandstander)",
        marginTop: 0,
        lineHeight: 0.76,
    },
    'illusion-magic': {
        fontFamily: "var(--font-illusion-magic)",
        marginTop: -0.15,
        lineHeight: 0.53,
    },
    'invisible': {
        fontFamily: "var(--font-invisible)",
        marginTop: 0.04,
        lineHeight: 0.8,
    },
};

function Word ({
    image,
    imagePos,
    font,
    wordPos,
    word,
    fontSize = 1,
    startsRevealed = false,
    align = 'center',
    duration = DURATION,
    finalDelay = FINAL_DELAY,
    debug = false,
}: WordProps) {
    imagePos ??= wordPos;
    const ref = useRef<HTMLDivElement>(null);

    const wordSize = useDynamicHook(ref);

    const [height, setHeight] = useState(16);
    const [revealState, setRevealState] = useState<RevealState>('hidden');

    const { playRepeated } = usePlaySound("/sfx/typewriter0.ogg");

    const fontInfo = FONT_INFO[font as 'invisible'];

    // Resize the text to fit the container.
    useEffect(() => {
        setHeight(wordSize.height * fontSize);
    }, [wordSize, fontSize]);

    const handleHover = () => {
        if (revealState !== 'hidden') return;
        setRevealState('revealing');

        playRepeated(word.length, duration / word.length, true);

        setTimeout(
            () => setRevealState('complete'),
            (duration + finalDelay)
        );
    }

    const hiddenStyle: React.CSSProperties = {
        left: imagePos.left * 100 + "%",
        top: imagePos.top * 100 + "%",
        width: imagePos.width * 100 + "%",
        height: imagePos.height * 100 + "%",
        //zIndex: 100,
    }

    const revealedStyle: React.CSSProperties = {
        left: wordPos.left * 100 + "%",
        top: wordPos.top * 100 + "%",
        width: wordPos.width * 100 + "%",
        height: wordPos.height * 100 + "%",
        fontFamily: fontInfo.fontFamily,
        fontSize: height + "px",
        lineHeight: fontInfo.lineHeight + "em",
        textAlign: align as unknown as any,
    }

    if (startsRevealed) handleHover();

    return (
        <div
            ref={ref}
            className={$cl(styles.word, debug && styles.debug)}
            style={revealState === 'hidden' ? hiddenStyle : revealedStyle}
        >
            {revealState === 'hidden' && <SiteImage
                className={styles.image}
                image={image}
                onMouseEnter={handleHover}
                onTouchStart={handleHover}
                style={{

                }}
            />}
            {revealState !== 'hidden' && <div
                className={styles.textContainer}
                style={{marginTop: fontInfo.marginTop + "em"}}
            >
                <span
                    className={$cl(styles.text, styles[revealState])}
                >
                    <Typewriter
                        words={[word]}
                        cursor
                        cursorStyle="|"
                        cursorColor={
                            revealState === 'revealing'
                                ? "var(--color-primary)"
                                : "transparent"
                        }
                        typeSpeed={duration / word.length}
                    />
                </span>
            </div>}
        </div>
    );
}

interface MultiWordProps {
    image: ImageSrc;
    imagePos: Rect;
    words: {
        word: string;
        wordPos: Rect;
        font: WordFont;
        fontSize: number;
    }[];
}

export function MultiWord ({
    image,
    imagePos,
    words,
}: MultiWordProps) {
    const [isHidden, setHidden] = useState(true);

    const { playRepeated } = usePlaySound("/sfx/typewriter0.ogg");

    const handleHover = () => {
        setHidden(false);

        for (const w of words) {
            playRepeated(w.word.length, DURATION / w.word.length, true);
        }
    };

    const style: React.CSSProperties = {
        left: imagePos.left * 100 + "%",
        top: imagePos.top * 100 + "%",
        width: imagePos.width * 100 + "%",
        height: imagePos.height * 100 + "%",
    }

    if (isHidden) {
        return (
            <div
                className={styles.word}
                style={style}
            >
                <SiteImage
                    className={styles.image}
                    image={image}
                    onMouseEnter={handleHover}
                    onTouchStart={handleHover}
                />
            </div>
        );
    }

    return (<>
        {words.map((w, i) => <Word
            key={i}
            image={image}
            imagePos={{ top: 0, left: 0, height: 0, width: 0 }}
            word={w.word}
            wordPos={w.wordPos}
            font={w.font}
            fontSize={w.fontSize}
            startsRevealed
        />)}
    </>);

}


export default Word;
