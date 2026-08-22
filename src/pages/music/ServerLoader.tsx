import { useServer } from 'context/useServer';
import { useEffect } from 'react';
import styles from './ServerLoader.module.scss';

export interface ServerLoaderProps {
  
}

function ServerLoader (props: ServerLoaderProps) {
  const srv = useServer();

  useEffect(() => {
    srv.tryLoadIndex();
  }, []);

  return (
    <div className={styles.serverLoader}>
      Loading...
    </div>
  );
}

export default ServerLoader;
