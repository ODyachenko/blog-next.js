'use client';
import { FC } from 'react';
import { Post } from '../Post/Post';
import { useGetPostsQuery } from '@/redux/api/posts.api';
import PostSkelleton from '../Post/PostSkelleton';

export const Main: FC = () => {
  const { data, isLoading, isError } = useGetPostsQuery();

  return (
    <main className="main">
      {data ? (
        data.length ? (
          data.map((post: any) => <Post key={post._id} {...post} />)
        ) : (
          <h1 className="main__empty">Unfortunately, there are no articles</h1>
        )
      ) : isLoading ? (
        Array(3)
          .fill('')
          .map((_, index) => <PostSkelleton key={index} />)
      ) : (
        console.log('Error')
      )}
    </main>
  );
};
