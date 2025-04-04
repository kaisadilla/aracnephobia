import React from 'react';
import { ImageSrc } from 'img/img';
import { Except, ImgProps } from 'types';
import { $cl } from 'utils';

export interface SiteImageProps extends Except<ImgProps, 'src'> {
    image: ImageSrc;
    noAlt?: boolean;
}

function SiteImage ({
    image,
    alt,
    noAlt,
    ...imgProps
}: SiteImageProps) {
    const src = typeof image === 'string' ? image : image.src;
    const srcSet = typeof image === 'string' ? undefined : image.srcSet;
    alt ??= noAlt ? undefined : (typeof image === 'string' ? image : image.alt);

    return (
        <img
            src={src}
            srcSet={srcSet}
            alt={alt}
            {...imgProps}
        />
    );
}

export default SiteImage;
