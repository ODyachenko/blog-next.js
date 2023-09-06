import { FC } from 'react';
import Link from '@/node_modules/next/link';
import './styles.scss';
import { HeaderActions } from './HeaderActions';

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo" href="/">
            Blog
          </Link>
          <div className="header__actions">
            <HeaderActions />
          </div>
        </div>
      </div>
    </header>
  );
};
