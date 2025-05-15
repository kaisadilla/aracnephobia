import React from 'react';
import styles from './section.module.scss';
import { ScrollArea } from '@mantine/core';
import { $cl } from 'utils';
import { useMediaQuery } from '@mantine/hooks';
import SVG from 'assets/img/svg';
import { IMG } from 'assets/img/img';
import SiteImage from 'components/SiteImage';
import { EnterByScalingUp, EnterFromAnimation } from './animations';

export interface EducationProps {
    
}

function Education (props: EducationProps) {
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
            <div className={$cl(styles.sectionContent, styles.education)}>

            <EnterByScalingUp className={styles.communication}>
                <div><SVG.about.education.wordCommunication /></div>
                <div><SVG.about.education.wordCommunication /></div>
                <div><SVG.about.education.wordCommunication /></div>
            </EnterByScalingUp>
            <EnterByScalingUp
                className={styles.ganesha}
                style={{backgroundImage: `url(${IMG.about.communication_bg})`}}
            >
                <SiteImage image={IMG.art.aracne_ganesha} />
            </EnterByScalingUp>
            <div className={styles.credTree}>
                <div className={styles.credSection}>
                    <div className={styles.left}>
                        <EnterFromAnimation from='left' className={styles.visuals}>
                            <SiteImage image={IMG.about.visuals} />
                        </EnterFromAnimation>
                        <_Branch
                            className={styles.esdipLogo}
                            side='left'
                            branch={<_Branch0 />}
                        >
                            <SiteImage image={IMG.about.education.esdip} />
                        </_Branch>
                        <_Branch
                            className={styles.escoDesc}
                            contentClassName={styles.desc}
                            side='left'
                            branch={<_Branch2 />}
                        >
                            <div className={styles.date}>2011 - 2015</div>
                            <div className={styles.body}>
                                Triple titulación de Publicidad, RRHH, Periodismo y Comunicación Audiovisual.
                            </div>
                        </_Branch>
                        <_Branch
                            className={styles.colonLogo}
                            contentClassName={styles.desc}
                            side='left'
                            branch={<_Branch4 />}
                        >
                            <SiteImage image={IMG.about.education.colon} />
                        </_Branch>
                    </div>
                    <div className={styles.treeRoot} />
                    <div className={styles.right}>
                        <EnterFromAnimation from='right' className={styles.strategy}>
                            <SiteImage image={IMG.about.strategy} />
                        </EnterFromAnimation>
                        <_Branch
                            className={styles.esdipDesc}
                            contentClassName={styles.desc}
                            side='right'
                            branch={<_Branch1 />}
                        >
                            <div className={styles.date}>2009 - 2011</div>
                            <div className={styles.body}>
                                Creación artística, gráfica y digital.
                            </div>
                        </_Branch>
                        <_Branch
                            className={styles.escoLogo}
                            side='right'
                            branch={<_Branch3 />}
                        >
                            <SiteImage image={IMG.about.education.esco} />
                        </_Branch>
                        <_Branch
                            className={styles.colonDesc}
                            contentClassName={styles.desc}
                            side='right'
                            branch={<_Branch5 />}
                        >
                            <div className={styles.date}>2013</div>
                            <div className={styles.body}>
                                Comunicación en redes y Community Management.
                            </div>
                        </_Branch>
                    </div>
                </div>
                <div className={styles.destroy}>
                </div>
            </div>

            </div>

        </ScrollArea>
    );
}

interface _BranchProps {
    side: 'left' | 'right';
    branch: React.ReactElement;
    className?: string;
    contentClassName?: string;
    children?: React.ReactNode;
}

function _Branch ({
    side,
    branch,
    className,
    contentClassName,
    children,
}: _BranchProps) {
    return (
        <div className={$cl(styles.branch, className)}>
            <div
                className={$cl(styles.content, contentClassName)}
                style={{
                    alignItems: side === 'left' ? 'end' : 'start',
                    textAlign: side === 'left' ? 'end' : 'start',
                }}
            >
                {children}
            </div>
            <div
                className={styles.branchImgContainer}
                style={{
                    justifyContent: side === 'left' ? 'end' : 'start',
                    marginRight: side === 'left' ? "-6px" : undefined,
                    marginLeft: side === 'right' ? "-6px" : undefined,
                }}
            >
                {branch}
            </div>
        </div>
    );
}

function _Branch0 () {
    const Branch = SVG.about.education.branches[0];

    return <Branch className={styles.branch0} />;
}

function _Branch1 () {
    const Branch = SVG.about.education.branches[1];
    
    return <Branch className={styles.branch1} />;
}

function _Branch2 () {
    const Branch = SVG.about.education.branches[2];
    
    return <Branch className={styles.branch2} />;
}

function _Branch3 () {
    const Branch = SVG.about.education.branches[3];
    
    return <Branch className={styles.branch3} />;
}

function _Branch4 () {
    const Branch = SVG.about.education.branches[4];
    
    return <Branch className={styles.branch4} />;
}

function _Branch5 () {
    const Branch = SVG.about.education.branches[5];
    
    return <Branch className={styles.branch5} />;
}


export default Education;
