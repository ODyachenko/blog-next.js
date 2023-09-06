import { FC } from 'react';
import Link from '@/node_modules/next/link';
import './styles.scss';

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo" href="/">
            Blog
          </Link>
          <div className="header__actions">
            <Link className="header__actions-item secondary-btn" href="/login">
              Sign in
            </Link>
            <Link className="header__actions-item primary-btn" href="/register">
              Create account
            </Link>
            <Link
              className="header__actions-item secondary-btn"
              href="/post/create"
            >
              Write the article
            </Link>
            <Link className="header__actions-item danger-btn" href="/">
              Log out
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
