import { Rect } from '@dnd-kit/core/dist/utilities';
import SiteImage, { SiteImageProps } from 'components/SiteImage';
import React from 'react';

export interface WordTableImageProps extends SiteImageProps {
    pos: Rect;
}

function WordTableImage ({
    pos,
    ...siteImageProps
}: WordTableImageProps) {

    const style: React.CSSProperties = {
        left: pos.left * 100 + "%",
        top: pos.top * 100 + "%",
        width: pos.width * 100 + "%",
        height: pos.height * 100 + "%",
    }

    return (
        <SiteImage
            style={style}
            {...siteImageProps}
        />
    );
}

export default WordTableImage;
