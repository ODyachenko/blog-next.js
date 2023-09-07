'use client';
import { FC, useEffect } from 'react';
import Link from 'next/link';
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setIsAuth } from '@/redux/slices/userSlice';

export const HeaderActions: FC = () => {
  const { isAuth } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const onClickLogout = () => {
    localStorage.removeItem('token');
    dispatch(setIsAuth(false));
  };

  useEffect(() => {
    localStorage.getItem('token') && dispatch(setIsAuth(true));
  }, []);

  return (
    <>
      {!isAuth ? (
        <>
          <Link className="header__actions-item secondary-btn" href="/login">
            Sign in
          </Link>
          <Link className="header__actions-item primary-btn" href="/register">
            Create account
          </Link>
        </>
      ) : (
        <>
          {' '}
          <Link
            className="header__actions-item secondary-btn"
            href="/posts/create"
          >
            Write the article
          </Link>
          <button
            className="header__actions-item danger-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </>
      )}
    </>
  );
};
