'use client';
import { FC } from 'react';
import { Post } from '../Post/Post';
import { useGetPostsQuery } from '@/redux/api/posts.api';

export const Main: FC = () => {
  const { data, isLoading, error } = useGetPostsQuery();

  return (
    <main className="main">
      {data && data.map((post: any) => <Post key={post._id} {...post} />)}
    </main>
  );
};
