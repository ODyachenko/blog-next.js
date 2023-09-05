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
            <Link
              className="header__actions-item header__actions--sign"
              href="/login"
            >
              Sign in
            </Link>
            <Link className="header__actions-item primary-btn" href="/register">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
