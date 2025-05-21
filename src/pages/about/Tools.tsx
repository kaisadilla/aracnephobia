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
                <EnterFromAnimation
                    from='left'
                    className={styles.left}
                    style={{backgroundImage: `url(${IMG.about.software_left})`}}
                />
                <div className={styles.center}>
                    <EnterByScalingUp>
                        <Window title="Digital painting" frameClassName={styles.winFrame}>
                            <div className={styles.container}>
                                <_Software
                                    name="Procreate"
                                    desc="Edición de gráficos rasterizados para pintura digital."
                                    icon={IMG.about.software.procreate}
                                    perc={0.9}
                                />
                                <_Software
                                    name="Clip studio paint"
                                    desc="Creación digital de ilustraciones, cómics y animaciones."
                                    icon={IMG.about.software.clip_studio_paint}
                                    perc={0.35}
                                />
                                <_Software
                                    name="Easy tool sai"
                                    desc="Pintura, ilustración, dibujo y retoque gráfico."
                                    icon={IMG.about.software.easy_tool_sai}
                                    perc={0.35}
                                />
                                <_Software
                                    name="Adobe Photoshop"
                                    desc="Software de diseño y fotografía."
                                    icon={IMG.about.software.photoshop}
                                    perc={0.35}
                                />
                            </div>
                        </Window>
                    </EnterByScalingUp>
                    <EnterByScalingUp>
                        <Window title="Graphic design" frameClassName={styles.winFrame}>
                            <div className={styles.container}>
                                <_Software
                                    name="Figma"
                                    desc="The Collaborative Inteface Design Tool"
                                    icon={IMG.about.software.figma}
                                    perc={0.7}
                                />
                                <_Software
                                    name="Adobe Illustrator"
                                    desc="Software de diseño gráfico."
                                    icon={IMG.about.software.illustrator}
                                    perc={0.8}
                                />
                                <_Software
                                    name="Adobe Indesign"
                                    desc="Pintura, ilustración, dibujo y retoque fotográfico."
                                    icon={IMG.about.software.in_design}
                                    perc={0.6}
                                />
                            </div>
                        </Window>
                    </EnterByScalingUp>
                    <EnterByScalingUp>
                        <Window title="Video tools" frameClassName={styles.winFrame}>
                            <div className={styles.container}>
                                <_Software
                                    name="Adobe Premiere"
                                    desc="Edición de video profesional."
                                    icon={IMG.about.software.premiere}
                                    perc={0.8}
                                />
                                <_Software
                                    name="Final Cut Pro X"
                                    desc="Edición de vídeo para MacOS."
                                    icon={IMG.about.software.final_cut_pro}
                                    perc={0.8}
                                />
                                <_Software
                                    name="Adobe After Effects"
                                    desc="Post producción y motion graphics. Compatible con C y C++."
                                    icon={IMG.about.software.after_effects}
                                    perc={0.95}
                                />
                                <_Software
                                    name="Apple Motion"
                                    desc="Post producción y motion graphics."
                                    icon={IMG.about.software.apple_motion}
                                    perc={0.7}
                                />
                                <_Software
                                    name="Toon Boom Harmony"
                                    desc="Suite completa para animación 2D y 3D."
                                    icon={IMG.about.software.toon_boom_harmony}
                                    perc={0.4}
                                />
                            </div>
                        </Window>
                    </EnterByScalingUp>
                    <EnterByScalingUp>
                        <Window title="Online platforms" frameClassName={styles.winFrame}>
                            <div className={styles.container}>
                                <_Software
                                    name="Meta Business Suite"
                                    desc="Consolidación y administración de estadísticas."
                                    icon={IMG.about.software.meta}
                                    perc={0.7}
                                />
                                <_Software
                                    name="Google Adsense"
                                    desc="Consolidación y administración de estadísticas."
                                    icon={IMG.about.software.adsense}
                                    perc={0.7}
                                />
                                <_Software
                                    name="Wordpress"
                                    desc="Sistema de gestión de contenidos para web."
                                    icon={IMG.about.software.wordpress}
                                    perc={0.7}
                                />
                                <_Software
                                    name="Microsoft 365"
                                    desc="Suite de aplicaciones ofimáticas."
                                    icon={IMG.about.software.microsoft_365}
                                    perc={0.97}
                                />
                            </div>
                        </Window>
                    </EnterByScalingUp>
                </div>
                <EnterFromAnimation
                    from='right'
                    className={styles.right}
                    style={{backgroundImage: `url(${IMG.about.software_right})`}}
                />
            </div>

            <div
                className={styles.panicPhoto}
                style={{backgroundImage: `url(${IMG.about.cat_lines})`}}
            >
                <EnterFromAnimation from='left' className={styles.photo}>
                    <SiteImage image={IMG.about.photo2} />
                </EnterFromAnimation>
                <EnterFromAnimation from='right' className={styles.panic}>
                    <SiteImage image={IMG.about.panic} />
                </EnterFromAnimation>
            </div>

            <SiteImage className={styles.footer} image={IMG.about.ornaments3} />

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
