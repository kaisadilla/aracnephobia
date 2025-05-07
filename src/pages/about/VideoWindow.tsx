import React, { useRef, useState } from 'react';
import styles from './Window.module.scss';
import Window, { WindowProps } from './Window';
import { $cl } from 'utils';
import ReactPlayer from 'react-player';
import SVG from 'assets/img/svg';

export interface VideoWindowProps extends WindowProps {
    src: string;
    nodisc?: boolean;
}

function VideoWindow ({
    src,
    className,
    nodisc = false,
    ...windowProps
}: VideoWindowProps) {
    const [isLoaded, setLoaded] = useState(false);
    const [playing, setPlaying] = useState(false);
    const ref = useRef<ReactPlayer>(null);

    return (
        <Window className={$cl(styles.vid, className)} {...windowProps}>
            <div className={styles.vidContainer}>
                <ReactPlayer
                    ref={ref}
                    url={src}
                    playing={playing}
                    width="100%"
                    height="auto"
                    onClick={() => setPlaying(prev => !prev)}
                    onReady={() => setLoaded(true)}
                    onEnded={() => setPlaying(false)}
                />
                {isLoaded && playing === false && <div
                    className={styles.playButton}
                    onClick={() => setPlaying(true)}
                />}
            </div>
            <div className={styles.controlsContainer}>
                <div className={styles.ribbon}>
                    <SVG.about.videoPlayer.previous
                        onClick={() => offset(-50000000)}
                    />
                    <SVG.about.videoPlayer.backwards
                        onClick={() => offset(-5)}
                    />
                    {playing && <SVG.about.videoPlayer.pause
                        className={styles.play}
                        onClick={() => setPlaying(prev => !prev)}
                    />}
                    {playing === false && <SVG.about.videoPlayer.play
                        className={styles.play}
                        onClick={() => setPlaying(prev => !prev)}
                    />}
                    <SVG.about.videoPlayer.backwards
                        className={styles.flip}
                        onClick={() => offset(5)}
                    />
                    <SVG.about.videoPlayer.previous className={styles.flip} />
                </div>
                {nodisc === false && <SVG.about.videoPlayer.compactDisc />}
            </div>
        </Window>
    );

    function offset (amount: number) {
        if (ref.current === null) return;
        const player = ref.current.getInternalPlayer();
        if (player === null) return;
        player.currentTime += amount;
    }
}

export default VideoWindow;
