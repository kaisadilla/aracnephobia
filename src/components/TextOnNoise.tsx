import styles from './TextOnNoise.module.scss';

export interface TextOnNoiseProps {
  message?: string;
}

function TextOnNoise ({
  message = "OFFLINE"
}: TextOnNoiseProps) {

  return (
    <div className={styles.viewport}>
      <div className={styles.v2}>
        <div className={styles.offline}>
          <div>{message}</div>
          <div>{message}</div>
          <div>{message}</div>
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
}

export default TextOnNoise;
