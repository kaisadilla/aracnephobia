import React from 'react';
import styles from './section.module.scss';
import { ScrollArea } from '@mantine/core';
import { $cl } from 'utils';
import { useMediaQuery } from '@mantine/hooks';
import SVG from 'assets/img/svg';
import { IMG } from 'assets/img/img';
import SiteImage from 'components/SiteImage';
import { AppearFromAnimation, EnterByScalingUp, EnterFromAnimation } from './animations';

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

            <div className={styles.content}>

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
                        <_Branch
                            className={styles.trazosDesc}
                            contentClassName={styles.desc}
                            side='left'
                            branch={<_Branch6 />}
                        >
                            <div className={styles.date}>2015 - 2016</div>
                            <div className={styles.body}>
                                Concept Art e Ilustración Digital.
                            </div>
                            <div className={styles.date}>2016 - 2017</div>
                            <div className={styles.body}>
                                Márketing Digital.
                            </div>
                            <div className={styles.date}>2017 - 2018</div>
                            <div className={styles.body}>
                                Motion Graphics.
                            </div>
                            <div className={styles.date}>2018 - 2019</div>
                            <div className={styles.body}>
                                Diseño Gráfico.
                            </div>
                        </_Branch>
                        <_Branch
                            className={styles.valleyLogo}
                            contentClassName={styles.desc}
                            side='left'
                            branch={<_Branch8 />}
                        >
                            <SiteImage image={IMG.about.education.valley} />
                        </_Branch>
                        <_Branch
                            className={styles.euroinnovaDesc}
                            contentClassName={styles.desc}
                            side='left'
                            branch={<_Branch10 />}
                        >
                            <div className={styles.date}>2022 - 2023</div>
                            <div className={styles.body}>
                                Higiénico Sanitario, Micropigmentación y Tatuaje.
                            </div>
                        </_Branch>
                        <_Branch
                            className={styles.domestikaLogo}
                            contentClassName={styles.desc}
                            side='left'
                            branch={<_Branch12 />}
                        >
                            <SiteImage image={IMG.about.education.domestika} />
                        </_Branch>
                        <_Branch
                            className={styles.nuclioDesc}
                            contentClassName={styles.desc}
                            side='left'
                            branch={<_Branch14 />}
                        >
                            <div className={styles.date}>2024 - 2025</div>
                            <div className={styles.body}>
                                Máster en UX / UI y Creación de Páginas Web.
                            </div>
                        </_Branch>
                        <_Branch
                            className={styles._35mmLogo}
                            contentClassName={styles.desc}
                            side='left'
                            branch={<></>}
                        >
                            <SiteImage image={IMG.about.education._35mm} />
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
                        <_Branch
                            className={styles.trazosLogo}
                            side='right'
                            branch={<_Branch7 />}
                        >
                            <SiteImage image={IMG.about.education.trazos} />
                        </_Branch>
                        <_Branch
                            className={styles.valleyDesc}
                            contentClassName={styles.desc}
                            side='right'
                            branch={<_Branch9 />}
                        >
                            <div className={styles.date}>2019 - 2020</div>
                            <div className={styles.body}>
                                Máster en Márketing Digital Estratégico.
                            </div>
                        </_Branch>
                        <_Branch
                            className={styles.euroinnovaLogo}
                            side='right'
                            branch={<_Branch11 />}
                        >
                            <SiteImage image={IMG.about.education.euroinnova} />
                        </_Branch>
                        <_Branch
                            className={styles.domestikaDesc}
                            contentClassName={styles.desc}
                            side='right'
                            branch={<_Branch13 />}
                        >
                            <div className={styles.date}>2020 - 2025</div>
                            <div className={styles.body}>
                                Diseño Gráfico y Comunicación Visual.
                                <br />
                                Tatuaje para Principiantes.
                                <br />
                                Técnicas de Tatuaje Blackwork.
                                <br />
                                Pepper Shading.
                                <br />
                                Técnica de Color para Tatuajes.
                                <br />
                                Introducción a Procreate.
                                <br />
                                Retrato de Personajes Femeninos.
                                <br />
                                Principios de Iluminación para Pintura Digital.
                                <br />
                                Ilustraciones Animadas Frame a Frame.
                                <br />
                                Introducción a Adobe Photoshop.
                                <br />
                                Pintura e Ilustración Realista en Procreate.
                                <br />
                                Ilustración Digital con Procreate.
                                <br />
                                Fotografía Profesional para Instagram.
                                <br />
                                Estrategia de Contenidos.
                                <br />
                                After Effects para Profesionales.
                                <br />
                                Figma de la A a la Z.
                                <br />
                                Videojuegos con Métodos UX.
                            </div>
                        </_Branch>
                        <_Branch
                            className={styles.nuclioLogo}
                            side='right'
                            branch={<_Branch15 />}
                        >
                            <SiteImage image={IMG.about.education.nuclio} />
                        </_Branch>
                        <_Branch
                            className={styles._35mmDesc}
                            contentClassName={styles.desc}
                            side='right'
                            branch={<></>}
                        >
                            <div className={styles.date}>2025 - 2027</div>
                            <div className={styles.body}>
                                Máster en Animación 2D y Narrativa (en curso).
                            </div>
                        </_Branch>
                    </div>
                </div>
                <div className={styles.destroy}>
                    <SiteImage className={styles.word} image={IMG.about.destroy} />
                    <SiteImage
                        className={styles.web}
                        image={IMG.about.destroy_web}
                        //style={{maskImage: `url(${IMG.about.destroy_web_perlin})`}}
                    />
                    {false && <SiteImage className={styles.perlin} image={IMG.about.destroy_web_perlin} />}
                </div>
            </div>

            <SiteImage className={styles.footer} image={IMG.about.footer_education} />

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
        <AppearFromAnimation from={side} className={$cl(styles.branch, className)}>
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
        </AppearFromAnimation>
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

function _Branch6 () {
    const Branch = SVG.about.education.branches[6];
    
    return <Branch className={styles.branch6} />;
}

function _Branch7 () {
    const Branch = SVG.about.education.branches[7];
    
    return <Branch className={styles.branch7} />;
}

function _Branch8 () {
    const Branch = SVG.about.education.branches[8];
    
    return <Branch className={styles.branch8} />;
}

function _Branch9 () {
    const Branch = SVG.about.education.branches[9];
    
    return <Branch className={styles.branch9} />;
}

function _Branch10 () {
    const Branch = SVG.about.education.branches[10];
    
    return <Branch className={styles.branch10} />;
}

function _Branch11 () {
    const Branch = SVG.about.education.branches[11];
    
    return <Branch className={styles.branch11} />;
}

function _Branch12 () {
    const Branch = SVG.about.education.branches[12];
    
    return <Branch className={styles.branch12} />;
}

function _Branch13 () {
    const Branch = SVG.about.education.branches[13];
    
    return <Branch className={styles.branch13} />;
}

function _Branch14 () {
    const Branch = SVG.about.education.branches[14];
    
    return <Branch className={styles.branch14} />;
}

function _Branch15 () {
    const Branch = SVG.about.education.branches[15];
    
    return <Branch className={styles.branch15} />;
}


export default Education;
