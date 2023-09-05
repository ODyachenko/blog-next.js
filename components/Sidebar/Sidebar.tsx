import { FC } from 'react';
import { SidebarComments } from './SidebarComments';
import { SidebarItem } from './SidebarItem';
import { SidebarTags } from './SidebarTags';
import './styles.scss';

const tags: string[] = ['react', 'typescript', 'node'];

export const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <SidebarItem title="Tags">
        <SidebarTags tags={tags} />
      </SidebarItem>
      <SidebarItem title="Comments">
        <SidebarComments />
      </SidebarItem>
    </aside>
  );
};
