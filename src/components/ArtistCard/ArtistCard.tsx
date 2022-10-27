import type * as statsfm from '@statsfm/statsfm.js';

// components
import Link from 'next/link';
import formatter from '@/utils/formatter';
import { Avatar } from '../Avatar';

interface Props extends statsfm.TopArtist {}

export const ArtistCard = ({ playedMs, streams, artist, position }: Props) => {
  const subtitle = [
    playedMs && `${formatter.formatMinutes(playedMs)} minutes`,
    streams && `${streams} streams`,
  ]
    .filter(Boolean)
    .join(' • ');

  return (
    <Link href={`/artist/${artist.id}`} passHref>
      <a className="flex w-40 flex-col items-center transition-transform duration-300 ease-in-out active:scale-95">
        <Avatar src={artist.image} name={artist.name} size="3xl" />

        <div className="mt-2 text-center">
          <h4 className="line-clamp-2">
            {position && `${position}.`} {artist.name}
          </h4>
          <p className="m-0 leading-tight line-clamp-2" title={subtitle}>
            {subtitle}
          </p>
        </div>
      </a>
    </Link>
  );
};
