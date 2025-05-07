import React from 'react';
import { ImageSrc } from 'assets/img/img';
import { Except, ImgProps } from 'types';
import { $cl } from 'utils';

export interface SiteImageProps extends Except<ImgProps, 'src'> {
    image: ImageSrc;
}

function SiteImage ({
    image,
    alt,
    draggable = false,
    ...imgProps
}: SiteImageProps) {
    const src = typeof image === 'string' ? image : image.src;
    const srcSet = typeof image === 'string' ? undefined : image.srcSet;
    //alt ??= noAlt ? undefined : (typeof image === 'string' ? image : image.alt);

    return (
        <img
            src={src}
            srcSet={srcSet}
            alt={alt}
            draggable={draggable}
            {...imgProps}
        />
    );
}

export default SiteImage;
