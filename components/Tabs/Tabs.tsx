'use client';
import { FC, useState } from 'react';
import './styles.scss';

const tabsList: string[] = ['New', 'Popular'];

export const Tabs: FC = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <ul className="home__tabs tabs">
      {tabsList.map((tab, index) => {
        return (
          <li
            key={tab}
            className={`tabs__item ${isActive === index ? 'active' : ''}`}
            onClick={() => setIsActive(index)}
          >
            {tab}
          </li>
        );
      })}
    </ul>
  );
};
