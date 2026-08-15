import i_start from 'assets/img/music_os/start.png';
import styles from './Taskbar.module.scss';

export interface TaskbarProps {
  
}

function Taskbar (props: TaskbarProps) {

  return (
    <div className={styles.taskbar}>
      <button className={styles.startBtn}>
        <img src={i_start} />
        <span>START</span>
      </button>
    </div>
  );
}

export default Taskbar;
