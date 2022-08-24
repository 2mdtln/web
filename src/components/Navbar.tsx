import Link from 'next/link';
import { useAuth } from '@/hooks';

import { Container } from './Container';
import { Logo } from './Logo';
import { Avatar } from './Avatar/Avatar';
import { Button } from './Button';
import { Menu } from './Menu';

export const NavBar = () => {
  const { user, logout } = useAuth();

  const handleLogOutClick = () => {
    logout();
  };

  return (
    <Container as="nav" className="flex items-center justify-between py-3">
      <Link href="/" passHref>
        <a>
          <Logo className="h-[1.7rem] w-[1.7rem] cursor-pointer" />
        </a>
      </Link>

      {user ? (
        <Menu>
          <Menu.Button>
            <Avatar name={user.displayName} src={user.image} />
          </Menu.Button>

          <Menu.Items>
            <Menu.Item disabled className="flex gap-2">
              <Avatar size="md" name={user.displayName} src={user.image} />
              <div>
                <h5>{user.displayName}</h5>
                <p className="m-0">{user.email}</p>
              </div>
            </Menu.Item>
            <Menu.Item>
              <Link href={`/${user.customId ?? user.id}`}>My page</Link>
            </Menu.Item>
            <Menu.Item disabled>My account</Menu.Item>
            <Menu.Item onClick={handleLogOutClick}>Log out</Menu.Item>
          </Menu.Items>
        </Menu>
      ) : (
        <Link href="/login">
          <Button>Log in</Button>
        </Link>
      )}
    </Container>
  );
};
