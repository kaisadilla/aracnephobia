import i_bg from 'assets/img/music_os/bg.png';
import IconGrid from './IconGrid';
import styles from './page.module.scss';
import Taskbar from './Taskbar';
import { useMusicOs } from './useMusicOsCtx';
import WindowArea from './WindowArea';

export interface MusicOsPageProps {
  
}

function MusicOsPage (props: MusicOsPageProps) {
  const ctx = useMusicOs();

  return (
    <div
      className={styles.page}
      data-leak-mode={ctx.isLeakMode}
    >
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
        <WindowArea />
      </div>
      <div className={styles.taskbar}>
        <Taskbar />
      </div>
    </div>
  );
}

export default MusicOsPage;
