'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { ComponentState, FC } from 'react';
import { RootState } from '@/redux/store';
import './styles.scss';
import { setSortingRule } from '@/redux/slices/postsSlice';

const tabsList: string[] = ['New', 'Popular'];

export const Tabs: FC = () => {
  const { sortingRule }: ComponentState = useAppSelector(
    (state: RootState) => state.posts
  );
  const dispatch = useAppDispatch();

  return (
    <ul className="homepage__tabs tabs">
      {tabsList.map((tab, index) => {
        return (
          <li
            key={tab}
            className={`tabs__item ${sortingRule === index ? 'active' : ''}`}
            onClick={() => dispatch(setSortingRule(index))}
          >
            {tab}
          </li>
        );
      })}
    </ul>
  );
};
