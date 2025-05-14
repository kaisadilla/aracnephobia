import React from 'react';
import styles from './section.module.scss';
import { ScrollArea } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { EnterByScalingUp, EnterFromAnimation } from './animations';
import SiteImage from 'components/SiteImage';
import { IMG } from 'assets/img/img';
import Window from './Window';
import { $cl } from 'utils';

export interface ToolsProps {
    
}

function Tools (props: ToolsProps) {
    const isPhone = useMediaQuery('(min-width: 50rem)') === false;

    return (
        <ScrollArea
            classNames={{
                root: styles.section,
                scrollbar: styles.scrollbar,
                thumb: styles.thumb
            }}
            scrollbars='y'
            offsetScrollbars='y'
            type='auto'
            scrollbarSize={isPhone ? "1em" : "4em"}
        >
            <div className={$cl(styles.sectionContent, styles.tools)}>

            <div className={styles.hardware}>
                <EnterFromAnimation from='left' className={styles.left}>
                    <SiteImage image={IMG.about.creative_left} />
                </EnterFromAnimation>
                <EnterByScalingUp className={styles.center}>
                    <Window className={styles.win} title="hardware">
                        <div className={styles.content}>
                            <_Hardware
                                pic={IMG.about.hardware_cintiq}
                                name="Cintiq 22HD"
                            />
                            <_Hardware
                                pic={IMG.about.hardware_ipad}
                                name="iPad Pro 12.9 (6)"
                            />
                            <_Hardware
                                pic={IMG.about.hardware_camera}
                                name="Sony Alpha Evil 7"
                            />
                        </div>
                    </Window>
                </EnterByScalingUp>
                <EnterFromAnimation from='right' className={styles.right}>
                    <SiteImage image={IMG.about.creative_right_3} />
                    <SiteImage image={IMG.about.creative_right_2} />
                    <SiteImage image={IMG.about.creative_right_1} />
                </EnterFromAnimation>
            </div>

            <div className={styles.softwareContainer}>
                <EnterFromAnimation from='left' className={styles.left}>
                    <SiteImage image={IMG.about.software_left} />
                </EnterFromAnimation>
                <EnterByScalingUp className={styles.center}>
                    <Window title="software">
                        <div className={styles.container}>
                            <_Software
                                name="Figma"
                                desc="The Collaborative Inteface Design Tool"
                                icon={IMG.about.hardware.figma}
                                perc={0.7}
                            />
                        </div>
                    </Window>
                </EnterByScalingUp>
                <EnterFromAnimation from='right' className={styles.right}>
                    <SiteImage image={IMG.about.software_right} />
                </EnterFromAnimation>
            </div>

            </div>
        </ScrollArea>
    );
}

interface _HardwareProps {
    pic: string;
    name: string;
}

function _Hardware ({
    pic,
    name,
}: _HardwareProps) {

    return (
        <div className={styles.hardware}>
            <div className={styles.image}>
                <SiteImage className={styles.bg} image={IMG.about.hardware_bg} />
                <SiteImage className={styles.pic} image={pic} />
            </div>
            <div className={styles.name}>
                {name}
            </div>
        </div>
    );
}

interface _SoftwareProps {
    name: string;
    desc: string;
    icon: string;
    perc: number;
}

function _Software ({
    name,
    desc,
    icon,
    perc,
}: _SoftwareProps) {
    // 24px + perc % of (100% - 24px).
    const fillWidth = `calc(24px + calc(${perc * 100}% - ${24 * perc}px))` ;
    const thumbLeft = `calc(${perc * 100}% - ${24 * perc}px)`;

    return (
        <div className={styles.software}>
            <div className={styles.pic}>
                <SiteImage image={icon} />
            </div>
            <div className={styles.info}>
                <div className={styles.txt}>
                    <div className={styles.title}>{name}</div>
                    <div className={styles.desc}>{desc}</div>
                </div>
            </div>
            <div className={styles.lowerSection}>
                <div className={styles.fakeControls}>
                    <SiteImage image={IMG.about.fake_controls} />
                </div>
                <div className={styles.xp}>
                    <div className={styles.fill} style={{width: fillWidth}} />
                    <div className={styles.thumb} style={{left: thumbLeft}} />
                </div>
            </div>
        </div>
    );
}



export default Tools;
