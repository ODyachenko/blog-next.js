'use client';
import { useGetCommentsQuery } from '@/redux/api/comments.api';
import { FC } from 'react';
import { Comments } from '../Comments/Comments';
import { SidebarItem } from './SidebarItem';
import { SidebarTags } from './SidebarTags';
import './styles.scss';

const tags: string[] = ['react', 'typescript', 'node'];

export const Sidebar: FC = () => {
  const { data }: any = useGetCommentsQuery('');

  return (
    <aside className="sidebar">
      <SidebarItem title="Tags">
        <SidebarTags tags={tags} />
      </SidebarItem>
      {data && (
        <SidebarItem title="Comments">
          <Comments comments={data} />
        </SidebarItem>
      )}
    </aside>
  );
};
