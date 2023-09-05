import { FC, ReactNode } from 'react';

type SidebarItemProps = {
  title: string;
  children: ReactNode;
};

export const SidebarItem: FC<SidebarItemProps> = ({ title, children }) => {
  return (
    <div className="sidebar__item">
      <h2 className="sidebar__title">{title}</h2>
      {children}
    </div>
  );
};
