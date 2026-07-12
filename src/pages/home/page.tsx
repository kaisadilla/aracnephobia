import fm from 'front-matter';
import { useEffect, useState } from 'react';
import { BlogEntryAttributes } from './blog-entry';
import styles from './page.module.scss';

import { Portal, Select, Tooltip } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IMG } from 'assets/img/img';
import SVG from 'assets/img/svg';
import SiteImage from 'components/SiteImage';
import { DivProps } from 'types';
import BlogEntry, { BlogEntryData } from './BlogEntry';

type Section = 'all'
  | 'marketing'
  | 'art'
  | 'lifestyle'
  | 'branding'
  | 'storytelling'
  | 'video'
  | 'review'
  ;

const SECTION_NAMES: {[key in Section]: string} = {
  'all': "Todos",
  'marketing': "Marketing",
  'art': "Arte",
  'lifestyle': "Lifestyle",
  'branding': "Branding",
  'storytelling': "Storytelling",
  'video': "Video",
  'review': "Review"
};

export interface HomePageProps {
  
}

function HomePage (props: HomePageProps) {
  const isNotDesktop = useMediaQuery('(min-width: 75rem)') === false;

  const [doc, setDoc] = useState<BlogEntryData | null>(null);
  const [section, setSection] = useState<Section>('all');

  useEffect(() => {
    (async () => {
      const entry = await fetchFile("/blog/enemy.md");
      setDoc(entry);
    })();
  }, []);

  if (doc === null) return <>Loading...</>;

  return (
    <div className={styles.home}>
      {isNotDesktop === false && <>
        <Portal>
          <SiteImage
            className={styles.leftCurtain}
            image={IMG.twp_vert}
          />
        </Portal>
        <SiteImage
          className={styles.aracne}
          image={IMG.art.mirror}
        />
      </>}
      <div className="screenPresentation">
        <_Ribbon className={styles.sections} />
        <div className="screenContainer">
          <_SocialMedia className="socialMedia" />
          <div className="screen">
            <Select
              classNames={{
                root: styles.sectionSelect,
                input: styles.sectionInput,
                dropdown: styles.phoneSectionDropdown,
                options: styles.sectionOptions,
                option: styles.sectionOption,
              }}
              value={section}
              data={Object.keys(SECTION_NAMES).map(s => ({
                value: s,
                label: SECTION_NAMES[s as Section],
              }))}
              onChange={s => setSection(s as Section ?? 'marketing')}
              checkIconPosition="right"
              allowDeselect={false}
              maxDropdownHeight={400}
            />
            <div className={styles.screenContent}>
              <div className={styles.screenFrame}>
                <_SocialMedia className={styles.socialMedia} />
                <BlogEntry entry={doc} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function _SocialMedia ({
  ...divProps
}: DivProps) {
  return (
    <div {...divProps}>
      <Tooltip.Floating
        position='top'
        label="YouTube"
        zIndex={50000}
      >
        <a
          target='_blank'
          href="https://www.youtube.com/@LaMorguedeAracnePhobia"
        >
          <SVG.socialMedia.youtube />
        </a>
      </Tooltip.Floating>
      <Tooltip.Floating
        position='top'
        label="Twitch"
        zIndex={50000}
      >
        <a
          target='_blank'
          href="https://www.twitch.tv/aracnephobia"
        >
          <SVG.socialMedia.twitch />
        </a>
      </Tooltip.Floating>
      <Tooltip.Floating
        position='top'
        label="Instagram"
        zIndex={50000}
      >
        <a
          target='_blank'
          href="https://www.instagram.com/aracnephobia/"
        >
          <SVG.socialMedia.instagram />
        </a>
      </Tooltip.Floating>
      <Tooltip.Floating
        position='top'
        label="TikTok"
        zIndex={50000}
      >
        <a
          target='_blank'
          href="https://www.tiktok.com/@aracne_phobia"
        >
          <SVG.socialMedia.tiktok />
        </a>
      </Tooltip.Floating>
      <Tooltip.Floating
        position='top'
        label="X (formerly known as Twitter)"
        zIndex={50000}
      >
        <a
          target='_blank'
          href="https://x.com/Aracnephobia"
        >
          <SVG.socialMedia.twitter />
        </a>
      </Tooltip.Floating>
      <Tooltip.Floating
        position='top'
        label="Bluesky"
        zIndex={50000}
      >
        <a
          target='_blank'
          href="https://bsky.app/profile/aracnephobia.com"
        >
          <SVG.socialMedia.bsky />
        </a>
      </Tooltip.Floating>
      <Tooltip.Floating
        position='top'
        label="LinkedIn"
        zIndex={50000}
      >
        <a
          target='_blank'
          href="https://www.linkedin.com/in/ana-l%C3%A1zaro-estalot-52a860104/"
        >
          <SVG.socialMedia.linkedin />
        </a>
      </Tooltip.Floating>
    </div>
  );
}

function _Ribbon ({
  ...divProps
}: DivProps) {

  return (
    <div {...divProps}>
      <button>Marketing</button>
      <button>Arte</button>
      <button>Lifestyle</button>
      <button>Branding</button>
      <button>Storytelling</button>
      <button>Vídeo</button>
      <button>Review</button>
    </div>
  );
}



async function fetchFile (id: string) : Promise<BlogEntryData> {
  const res = await fetch(id);
  const txt = await res.text();

  return fm<BlogEntryAttributes>(txt);
}

export default HomePage;
