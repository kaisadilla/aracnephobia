import TintedImg from 'components/TintedImg';
import { ErrorWindowContent } from '../files';
import styles from './Error.module.scss';

export interface ErrorContentProps {
  content: ErrorWindowContent,
}

function ErrorContent ({
  content,
}: ErrorContentProps) {

  return (
    <div className={styles.content}>
      {content.image && <TintedImg
        className={styles.img}
        src={content.image}
      />}

      <div className={styles.message}>
        {content.message}
      </div>
    </div>
  );
}

export default ErrorContent;
