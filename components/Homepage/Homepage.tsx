import { FC } from 'react';
import { Tabs } from '../Tabs/Tabs';
import { Main } from '../Main/Main';
import { Sidebar } from '../Sidebar/Sidebar';

export const Homepage: FC = () => {
  return (
    <div className="homepage">
      <Tabs />
      <div className="homepage__wrapper">
        <Main />
        <Sidebar />
      </div>
    </div>
  );
};
