import { FC } from 'react';
import Link from '@/node_modules/next/link';
import { Button, Container } from '@/node_modules/@mui/material/index';
import './styles.scss';

export const Header: FC = () => {
  return (
    <header className="header">
      <Container maxWidth="lg">
        <div className="header__inner">
          <Link className="header__logo" href="/">
            Blog
          </Link>
          <div className="header__actions">
            <Link className="header__actions-item" href="/login">
              <Button variant="outlined">Sign in</Button>
            </Link>
            <Link className="header__actions-item" href="/register">
              <Button variant="contained">Create account</Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
