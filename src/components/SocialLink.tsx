import type { FC } from 'react';
import { AppleMusicIcon, SpotifyIcon, DiscordIcon } from './Icons';

type Props = {
  path?: string;
};

export const SpotifyLink: FC<Props> = ({ path }) => {
  return (
    <a
      href={`https://open.spotify.com${path}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <SpotifyIcon className="size-7 !fill-icon transition-colors hover:!fill-[#1DB954]" />
    </a>
  );
};

export const DiscordLink: FC<Props> = ({ path }) => {
  return (
    <a
      href={`https://discord.com${path}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <DiscordIcon className="size-7 !fill-icon transition-colors hover:!fill-[#5468ff]" />
    </a>
  );
};

export const AppleMusicLink: FC<Props> = ({ path }) => {
  return (
    <a
      href={`https://music.apple.com${path}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <AppleMusicIcon
        className="size-7 !fill-icon transition-colors hover:!fill-applemusic"
        hover={false}
      />
    </a>
  );
};
