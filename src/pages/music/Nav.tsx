import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import { useServer } from 'context/useServer';
import { useSong } from 'context/useSong';
import type { DivProps } from 'types';
import { $cl } from 'utils';
import styles from './Nav.module.scss';

export interface NavProps extends DivProps {
  
}

function Nav ({
  className,
  ...divProps
}: NavProps) {
  const srv = useServer();
  const song = useSong();

  if (!srv.index) return null;
  if (!song.song) return null;

  return (
    <div className={$cl(styles.nav, className)} {...divProps}>
      <button onClick={handlePrevious}>
        {song.song.id > 0 && <CaretLeftIcon
          size={24}
          weight='bold'
        />}
      </button>

      <div className={styles.info}>
        <div className={styles.album}>
          {srv.index[song.song.albumId].name}
        </div>

        <div className={styles.song}>
          <div className={styles.number}>
            {song.song.relativeId + 1}
          </div>
          <div className={styles.name}>
            {song.song.displayName}
          </div>
        </div>
      </div>

      <button onClick={handleNext}>
        {song.song.id < srv.byOrder.length - 1 && <CaretRightIcon
          size={24}
          weight='bold'
        />}
      </button>
    </div>
  );

  function handlePrevious () {
    song.previous();
  }

  function handleNext () {
    song.next();
  }
}

export default Nav;
