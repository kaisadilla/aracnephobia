import React from 'react';
import styles from './section.module.scss';
import { $cl } from 'utils';
import SiteImage from 'components/SiteImage';
import { IMG } from 'assets/img/img';
import Window from './Window';

export interface AboutMeProps {
    
}

function AboutMe (props: AboutMeProps) {

    return (
        <div className={$cl(styles.section, styles.aboutMe)}>
            <SiteImage
                className={$cl(styles.bg, styles.bgGrid)}
                image={IMG.about.am_3d_grid}
            />
            <div>kek</div>
            <Window title="Hashtag.cloud">
                contenu
            </Window>
        </div>
    );
}

export default AboutMe;
