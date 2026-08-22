import { DivProps } from 'types';
import { $cl } from 'utils';
import styles from './TintedImg.module.scss';

export interface TintedImgProps extends DivProps {
  src: string;
}

function TintedImg ({
  src,
  className,
  ...divProps
}: TintedImgProps) {

  return (
    <div
      {...divProps}
      className={$cl(styles.img, className)}
      style={{
        maskImage: `url('${src}')`,
        //WebkitMaskBoxImage: `url('${src}')`,
      }}
    />
  );
}

export default TintedImg;
