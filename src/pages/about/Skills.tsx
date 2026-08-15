import { ScrollArea } from '@mantine/core';
import { IMG } from 'assets/img/img';
import SVG from 'assets/img/svg';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';
import SiteImage from 'components/SiteImage';
import React, { useState } from 'react';
import { $cl } from 'utils';
import styles from './section.module.scss';
import Window from './Window';

import { useMediaQuery } from '@mantine/hooks';
import video_morgue from "assets/portfolio2/Reel/La Morgue de Aracne.mp4";
import video_rastreadores from "assets/video/rastreadores.mp4";
import UfoGame from 'components/UfoGame';
import en_US from 'localization/en_US';
import { EnterByScalingDown, EnterByScalingUp, EnterFromAnimation } from './animations';
import PlanetGame from './PlanetGame';
import VideoWindow from './VideoWindow';

export interface SkillsProps {
  
}

function Skills (props: SkillsProps) {
  const isPhone = useMediaQuery('(min-width: 50rem)') === false;
  
  const [loc, setLoc] = useState(en_US);

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

    <div className={$cl(styles.sectionContent, styles.skills)}>
      
    <div className={styles.header}>
      <SiteImage
        className={styles.tablet} image={IMG.about.skills_digital_artist}
      />
      <SiteImage
        className={styles.phone} image={IMG.about.skills_digital_artist_phone}
      />
    </div>

    <div className={$cl(styles.g2, styles.skillsText)}>
      <EnterFromAnimation from='left' className={styles.left}>
        <Window className={styles.win} title="skills.exe">
          <loc.about.skills.skills className={styles.txtContainer} />
        </Window>
        <SiteImage image={IMG.about.mental_toxicity} />
      </EnterFromAnimation>
      <EnterFromAnimation from='right' className={styles.right} style={{
        backgroundImage: `url(${IMG.about.anim_bg3})`
      }}>
        <SiteImage image={IMG.about.guapisima} />
      </EnterFromAnimation>
    </div>
    
    <EnterFromAnimation from='left'>
      <Window
        className={$cl(styles.skillWindow, styles.artSkills)}
        title='art.skills'
      >
        <div className={styles.artContainer}>
          <_ArtSkill
            title="Concept art"
            icon={<SVG.about.skills.conceptArt />}
          />
          <_ArtSkill
            title="Digital painting"
            icon={<SVG.about.skills.digitalPainting />}
          />
          <_ArtSkill
            className={styles.comicArtist}
            title="Comic artist"
            icon={<SVG.about.skills.comicArtist />}
          />
          <_ArtSkill
            className={styles.tattooDesign}
            title="Tattoo design"
            icon={<SVG.about.skills.tattooDesign />}
          />
        </div>
      </Window>
    </EnterFromAnimation>

    <div className={$cl(styles.g2, styles.videos)}>
      <EnterFromAnimation from='left' className={styles.left}>
        <VideoWindow
          className={styles.vid}
          title="move.on"
          src={video_morgue}
        />
      </EnterFromAnimation>
      <EnterFromAnimation from='right' className={styles.right}>
        <div className={styles.tripleWord}>
          <EnterByScalingDown
            className={styles.word1}
            style={{animationDelay: '0.4s'}}
          >
            <SVG.about.wordVideo />
          </EnterByScalingDown>
          <EnterByScalingDown
            className={styles.word2}
            style={{animationDelay: '0.7s'}}
          >
            <SVG.about.wordVideo />
          </EnterByScalingDown>
          <EnterByScalingDown
            className={styles.word3}
            style={{animationDelay: '1s'}}
          >
            <SVG.about.wordVideo />
          </EnterByScalingDown>
        </div>
        <VideoWindow
          className={styles.vid}
          title="move.on"
          src={video_rastreadores}
          nodisc
        />
        <div className={styles.sector07}>
          <SiteImage image={IMG.about.sector_07} />
        </div>
      </EnterFromAnimation>
    </div>

    <EnterFromAnimation from='right'>
      <Window
        className={$cl(styles.skillWindow, styles.videoSkills)}
        title='video.skills'
      >
        <div className={styles.artContainer}>
          <_ArtSkill
            title="Video creator"
            className={styles.videoCreator}
            icon={<SVG.about.skills.videoCreator />}
          />
          <_ArtSkill
            title="Video editor"
            className={styles.videoEditor}
            icon={<SVG.about.skills.videoEditor />}
          />
          <_ArtSkill
            title="Motion graphics"
            icon={<SVG.about.skills.motionGraphics />}
          />
          <_ArtSkill
            title="2D animation"
            className={styles._2dAnimation}
            icon={<SVG.about.skills._2dAnimation />}
          />
        </div>
      </Window>
    </EnterFromAnimation>

    <EnterByScalingUp className={styles.minigame}>
      <div className={styles.gameWin}>
        <div className={styles.gameWinHeader} style={{
          backgroundImage: `url(${IMG.about.game_win_header})`,
        }}>
          <div className={styles.title}>Play me</div>
          <div className={styles.help}>Use [Space] to continue</div>
        </div>
        <div className={styles.gameWinContent}>
          <div className={styles.gameContainer}>
            <UfoGame className={styles.game} />
          </div>
        </div>
      </div>
      {false && <PlanetGame />}
    </EnterByScalingUp>

    <EnterFromAnimation from='left'>
      <Window
        className={$cl(styles.skillWindow, styles.devSkills)}
        title='dev.skills'
      >
        <div className={styles.artContainer}>
          <_ArtSkill
            title="Videogame dev"
            className={styles.dash5000}
            icon={<SVG.about.skills.videogameDev />}
          />
          <_ArtSkill
            title="Web design"
            className={styles.dash3000}
            icon={<SVG.about.skills.webDesign />}
          />
          <_ArtSkill
            title="UX / UI"
            className={styles.dash5000}
            icon={<SVG.about.skills.ux_ui />}
          />
          <_ArtSkill
            title="Scrum & agile"
            icon={<SVG.about.skills.conceptArt />}
          />
        </div>
      </Window>
    </EnterFromAnimation>

    <div className={styles.logos}>
      <EnterByScalingDown
        className={styles.logo}
        threshold={1}
      >
        <SiteImage image={IMG.aracnephobia_logo}  />
      </EnterByScalingDown>
      <EnterByScalingDown
        className={styles.logo}
        threshold={1}
        style={{animationDelay: "0.35s"}}
      >
        <SiteImage image={IMG.about.logo_morgue} />
      </EnterByScalingDown>
      <EnterByScalingDown
        className={styles.logo}
        threshold={1}
        style={{animationDelay: "0.7s"}}
      >
        <SiteImage image={IMG.about.logo_doppie} />
      </EnterByScalingDown>
    </div>

    <EnterFromAnimation from='right'>
      <Window
        className={$cl(styles.skillWindow, styles.designSkills)}
        title='design.skills'
      >
        <div className={styles.artContainer}>
          <_ArtSkill
            title="Graphic design"
            className={styles.dash3000}
            icon={<SVG.about.skills.graphicDesign />}
          />
          <_ArtSkill
            title="Logo & Branding"
            className={styles.dash3000}
            icon={<SVG.about.skills.logoBranding />}
          />
          <_ArtSkill
            title="Photography"
            className={styles.dash5000}
            icon={<SVG.about.skills.photography />}
          />
        </div>
      </Window>
    </EnterFromAnimation>

    <div className={$cl(styles.g2, styles.photo1)}>
      <EnterFromAnimation from='right' className={styles.left}>
        <SiteImage image={IMG.about.photo1} />
      </EnterFromAnimation>
      <EnterFromAnimation from='right' className={styles.right}>
        <ChromaticAberrationImage
          image={IMG.about.design_design_design_design}
          horizFlicker={12}
          duration={10}
          opacity={0.3}
        />
      </EnterFromAnimation>
    </div>

    <EnterByScalingUp>
      <Window
        className={$cl(styles.skillWindow, styles.adSkills)}
        title='advertising.skills'
      >
        <div className={styles.artContainer}>
          <_ArtSkill
            title="Marketing"
            className={styles.dash3000}
            icon={<SVG.about.skills.marketing />}
          />
          <_ArtSkill
            title="Influencer Marketing"
            icon={<SVG.about.skills.influencerMarketing />}
          />
          <_ArtSkill
            title="Ads analytics"
            className={styles.dash3000}
            icon={<SVG.about.skills.adsAnalytics />}
          />
        </div>
      </Window>
    </EnterByScalingUp>

    <EnterByScalingUp className={styles.family}>
      <SiteImage image={IMG.art.aracne_family} />
    </EnterByScalingUp>

    <EnterByScalingDown>
      <Window
        className={$cl(styles.skillWindow, styles.readMeSkills)}
        title='read.me'
      >
        <div className={styles.artContainer}>
          <_ArtSkill
            title="Storytelling"
            className={styles.dash3000}
            icon={<SVG.about.skills.storytelling />}
          />
          <_ArtSkill
            title="Copy writer"
            className={styles.dash5000}
            icon={<SVG.about.skills.copyWriter />}
          />
          <_ArtSkill
            title="Script writer"
            className={styles.dash3000}
            icon={<SVG.about.skills.scriptwriter />}
          />
        </div>
      </Window>
    </EnterByScalingDown>

    <div className={$cl(styles.g2, styles.footer)}>
      <div className={styles.left}>
        <SiteImage image={IMG.about.ornaments3} />
      </div>
      <div className={styles.right}>
        <SiteImage image={IMG.about.skills_pic1} />
      </div>
    </div>
    
    </div>

    </ScrollArea>
  );
}

interface _ArtSkillProps {
  title: string;
  icon: React.ReactElement;
  className?: string;
}

function _ArtSkill ({
  title,
  icon,
  className,
}: _ArtSkillProps) {

  return (
    <div className={$cl(styles.artSkill, className)}>
      <div className={styles.nameContainer}>
        <span>{title}</span>
      </div>
      <div className={styles.iconContainer}>
        {icon}
      </div>
    </div>
  );
}


export default Skills;
