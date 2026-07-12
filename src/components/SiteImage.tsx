import { ImageSrc } from 'assets/img/img';
import { forwardRef } from 'react';
import { Except, ImgProps } from 'types';

export interface SiteImageProps extends Except<ImgProps, 'src'> {
  image: ImageSrc;
}

const SiteImage = forwardRef<HTMLImageElement, SiteImageProps>(function SiteImage ({
  image,
  alt,
  draggable = false,
  ...imgProps
}, ref) {
  const src = typeof image === 'string' ? image : image.src;
  const srcSet = typeof image === 'string' ? undefined : image.srcSet;
  //alt ??= noAlt ? undefined : (typeof image === 'string' ? image : image.alt);

  return (
    <img
      ref={ref}
      src={src}
      srcSet={srcSet}
      alt={alt}
      draggable={draggable}
      {...imgProps}
    />
  );
});

export default SiteImage;
