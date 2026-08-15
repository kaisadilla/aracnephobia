import { Slider } from '@mantine/core';
import { ArrowBendUpRightIcon, ArrowClockwiseIcon, PauseIcon, PlayIcon, ShuffleIcon } from '@phosphor-icons/react';
import { useServer } from 'context/useServer';
import { useSong } from 'context/useSong';
import Fmt from 'Fmt';
import useAudioTime from 'hooks/useAudioTime';
import { useEffect, useState } from 'react';
import type { DivProps } from 'types';
import { $cl } from 'utils';
import styles from './Player.module.scss';

export interface PlayerProps extends DivProps {
  
}

function Player ({
  className,
  ...divProps
}: PlayerProps) {
  const srv = useServer();
  const song = useSong();
  const audioRef = song.audioRef;

  const [ forward, setForward ] = useState(true);
  const [ reverseTimestamp, setReverseTimestamp ] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    song.setPlaying(true);
  }, [song.song]);

  useAudioTime(
    audioRef,
    a => song.setTime(Math.floor(a.currentTime * 1000))
  );

  const url = song.song ? srv.url + song.song.internalName + ".mp3" : undefined;

  const time = reverseTimestamp
    ? -(audioRef.current?.duration ?? 0) + (song.time / 1000)
    : song.time / 1000;

  return (
    <div className={$cl(styles.player, className)} {...divProps}>
      <audio
        ref={audioRef}
        src={url}
        autoPlay={false}
        onEnded={handlePlayerEnd}
        onPause={handlePlayerPause}
        onPlay={handlePlayerPlay}
      />
      
      <div className={styles.track}>
        <Slider
          classNames={{
            root: styles.sliderRoot,
            track: styles.sliderTrack,
            thumb: styles.sliderThumb,
          }}
          step={0.001}
          min={0}
          max={audioRef.current?.duration ?? 0}
          value={audioRef.current?.currentTime ?? 0}
          onChange={handleChangeTime}
          label={null}
        />
        <div
          className={styles.time}
          onClick={handleTimestampClick}
        >
          {Fmt.timestamp(time, 0, 'm')}
          &nbsp;/ {Fmt.timestamp(audioRef.current?.duration ?? 0, 0, 'm')}
        </div>
      </div>

      <div className={styles.controls}>
        <button
          onClick={handleReset}
        >
          <ArrowClockwiseIcon />
        </button>

        <button
          className={styles.playPauseButton}
          onClick={handlePlay}
        >
          {song.isPlaying && <PauseIcon />}
          {song.isPlaying === false && <PlayIcon />}
        </button>

        <button
          onClick={handleForward}
          data-toggled={forward}
        >
          <ArrowBendUpRightIcon />
        </button>

        <button
          onClick={handleShuffle}
          data-toggled={song.shuffle}
        >
          <ShuffleIcon />
        </button>
      </div>
    </div>
  );

  function handleChangeTime (s: number) {
    if (!audioRef.current) return;

    audioRef.current.currentTime = s;
    song.setTime(Math.floor(s * 1000));
  }

  function handlePlay () {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      song.setPlaying(true);
    }
    else {
      audioRef.current.pause();
      song.setPlaying(false);
    }
  }

  function handleReset () {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }

  function handleForward () {
    setForward(prev => !prev);
  }

  function handleShuffle () {
    song.setShuffle(prev => !prev);
  }

  function handlePlayerEnd () {
    if (!forward) return;
    if ((song.audioRef.current?.duration ?? 0) < 5) return;
    
    song.next();
  }

  function handlePlayerPause () {
    song.setPlaying(false);
  }

  function handlePlayerPlay () {
    song.setPlaying(true);
  }

  function handleTimestampClick () {
    setReverseTimestamp(prev => !prev);
  }
}

export default Player;
