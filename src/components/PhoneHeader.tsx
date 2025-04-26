import React from 'react';
import styles from './PhoneHeader.module.scss';
import SiteImage from './SiteImage';
import { IMG } from 'img/img';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

export interface PhoneHeaderProps {
    
}

function PhoneHeader (props: PhoneHeaderProps) {
    const [opened, { open, close }] = useDisclosure(false);

    return (<>
        <div className={styles.header}>
            <div className={styles.aracnePlanet}>
                <SiteImage className={styles.planet} image={IMG.planet_1} />
                <SiteImage className={styles.aracne} image={IMG.aracne} />
            </div>
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
                    <div className={styles.entry}>
                        <SiteImage image={IMG.social.youtube} />
                        <div className={styles.label}>YouTube</div>
                    </div>
                    <div className={styles.entry}>
                        <SiteImage image={IMG.social.twitch} />
                        <div className={styles.label}>Twitch</div>
                    </div>
                    <div className={styles.entry}>
                        <SiteImage image={IMG.social.tiktok} />
                        <div className={styles.label}>TikTok</div>
                    </div>
                    <div className={styles.entry}>
                        <SiteImage image={IMG.social.twitter} />
                        <div className={styles.label}>Formerly Twitter</div>
                    </div>
                    <div className={styles.entry}>
                        <SiteImage image={IMG.social.bsky} />
                        <div className={styles.label}>Bluesky</div>
                    </div>
                    <div className={styles.entry}>
                        <SiteImage image={IMG.social.linkedin} />
                        <div className={styles.label}>Linkedin</div>
                    </div>
                    <div className={styles.entry}>
                        <SiteImage image={IMG.social.instagram} />
                        <div className={styles.label}>Instagram</div>
                    </div>
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
