import type * as statsfm from '@statsfm/statsfm.js';

// components
import Link from 'next/link';
import formatter from '@/utils/formatter';
import { Avatar } from '../Avatar';

interface Props extends statsfm.TopArtist {}

export const ArtistCard = ({ playedMs, streams, artist, position }: Props) => {
  const minutes = formatter.formatMinutes(playedMs!);

  return (
    <Link href={`/artist/${artist.id}`} passHref>
      <a className="flex w-40 flex-col items-center">
        <Avatar src={artist.image} name={artist.name} size="3xl" />

        <div className="mt-2 text-center">
          <h4 className="line-clamp-2">
            {position && `${position}.`} {artist.name}
          </h4>
          <p className="m-0 leading-tight line-clamp-2">
            <span>
              {playedMs && <span>{minutes} minutes • </span>}
              <span>{streams} streams</span>
            </span>
          </p>
        </div>
      </a>
    </Link>
  );
};
