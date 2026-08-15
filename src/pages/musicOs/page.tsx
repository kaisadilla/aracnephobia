import i_bg from 'assets/img/music_os/bg.png';
import IconGrid from './IconGrid';
import styles from './page.module.scss';
import Taskbar from './Taskbar';

export interface MusicOsPageProps {
  
}

function MusicOsPage (props: MusicOsPageProps) {

  return (
    <div className={styles.page}>
      <div className={styles.desktop}>
        <div
          className={styles.bg}
          //src={i_bg}
          style={{
            maskImage: `url('${i_bg}')`,
            WebkitMaskBoxImage: `url('${i_bg}')`,
          }}
        />
        <IconGrid />
      </div>
      <div className={styles.taskbar}>
        <Taskbar />
      </div>
    </div>
  );
}

export default MusicOsPage;
