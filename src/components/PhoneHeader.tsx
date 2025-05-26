import React from 'react';
import styles from './PhoneHeader.module.scss';
import SiteImage from './SiteImage';
import { IMG } from 'assets/img/img';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import ChromaticAberrationImage from './ChromaticAberrationImage';

export interface PhoneHeaderProps {
    
}

function PhoneHeader (props: PhoneHeaderProps) {
    const [opened, { open, close }] = useDisclosure(false);

    return (<>
        <div className={styles.header}>
            <ChromaticAberrationImage
                className={styles.logo}
                image={IMG.lettering_sq_pink}
                horizFlicker={6}
                vertFlicker={0}
                duration={0.65}
                opacity={0.6}
            />
            <button className={styles.menuButton} onClick={open}>
                <div />
                <div />
                <div />
            </button>
        </div>

        <Modal
            classNames={{
                root: styles.menu,
                inner: styles.modalInner,
                content: styles.modalContent,
                header: styles.modalHeader,
                body: styles.modalBody,
            }}
            opened={opened}
            onClose={close}
            title={<div>
                <div className={styles.logo}>
                    <SiteImage image={IMG.lettering_sq_black} />
                </div>
                <span
                    className='material-symbols-rounded'
                    onClick={close}
                >
                    close
                </span>
            </div>}
            withCloseButton={false}
        >
            <div
                className={styles.noise}
                style={{background: `url(${IMG.crt_noise})`}}
            />
            <div className={styles.content}>
                <div className={styles.divider}>
                    <img src={IMG.menu_section_social} />
                    <img src={IMG.menu_divider} />
                </div>
                <div className={styles.sectionList}>
                    <a
                        className={styles.entry}
                        target='_blank'
                        href="https://www.youtube.com/@LaMorguedeAracnePhobia"
                    >
                        <SiteImage image={IMG.social.youtube} />
                        <div className={styles.label}>YouTube</div>
                    </a>
                    <a
                        className={styles.entry}
                        target='_blank'
                        href="https://www.twitch.tv/aracnephobia"
                    >
                        <SiteImage image={IMG.social.twitch} />
                        <div className={styles.label}>Twitch</div>
                    </a>
                    <a
                        className={styles.entry}
                        target='_blank'
                        href="https://www.tiktok.com/@aracne_phobia"
                    >
                        <SiteImage image={IMG.social.tiktok} />
                        <div className={styles.label}>TikTok</div>
                    </a>
                    <a
                        className={styles.entry}
                        target='_blank'
                        href="https://x.com/Aracnephobia"
                    >
                        <SiteImage image={IMG.social.twitter} />
                        <div className={styles.label}>Formerly Twitter</div>
                    </a>
                    <a
                        className={styles.entry}
                        target='_blank'
                        href="https://bsky.app/profile/aracnephobia.com"
                    >
                        <SiteImage image={IMG.social.bsky} />
                        <div className={styles.label}>Bluesky</div>
                    </a>
                    <a
                        className={styles.entry}
                        target='_blank'
                        href="https://www.linkedin.com/in/ana-l%C3%A1zaro-estalot-52a860104/"
                    >
                        <SiteImage image={IMG.social.linkedin} />
                        <div className={styles.label}>Linkedin</div>
                    </a>
                    <a
                        className={styles.entry}
                        target='_blank'
                        href="https://www.instagram.com/aracnephobia/"
                    >
                        <SiteImage image={IMG.social.instagram} />
                        <div className={styles.label}>Instagram</div>
                    </a>
                </div>
                <div className={styles.divider}>
                    <img src={IMG.menu_section_sections} />
                    <img src={IMG.menu_divider} />
                </div>
                <div className={styles.sectionList}>
                    <div className={styles.entry}>
                        <SiteImage image={IMG.navigator.cv} />
                        <div className={styles.label}>CV</div>
                    </div>
                    <div className={styles.entry}>
                        <SiteImage image={IMG.navigator.portfolio} />
                        <div className={styles.label}>Portfolio</div>
                    </div>
                    <div className={styles.entry}>
                        <SiteImage image={IMG.navigator.me} />
                        <div className={styles.label}>About me</div>
                    </div>
                    <div className={styles.entry}>
                        <SiteImage image={IMG.navigator.blog} />
                        <div className={styles.label}>Blog</div>
                    </div>
                </div>
            </div>
        </Modal>
    </>);
}

export default PhoneHeader;
