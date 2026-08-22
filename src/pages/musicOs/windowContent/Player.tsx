import { PlayerWindowContent } from '../files';
import MusicPlayer from '../MusicPlayer';

export interface PlayerContentProps {
  content: PlayerWindowContent;
}

function PlayerContent ({
  content,
}: PlayerContentProps) {
  return <MusicPlayer song={content.song} />
}

export default PlayerContent;
