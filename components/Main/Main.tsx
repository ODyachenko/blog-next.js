'use client';
import { FC } from 'react';
import { Post } from '../Post/Post';
import { useGetPostsQuery } from '@/redux/api/posts.api';
import PostSkelleton from '../Post/PostSkelleton';

export const Main: FC = () => {
  const { data, isLoading, isError } = useGetPostsQuery();

  return (
    <main className="main">
      {data
        ? data.map((post: any) => <Post key={post._id} {...post} />)
        : isLoading
        ? Array(3)
            .fill('')
            .map((item, index) => <PostSkelleton key={index} />)
        : console.log('Error')}
    </main>
  );
};
