'use client';
import { ComponentState, FC } from 'react';
import { Post } from '../Post/Post';
import { useGetPostsQuery } from '@/redux/api/posts.api';
import PostSkelleton from '../Post/PostSkelleton';
import { useAppSelector } from '@/hooks/hooks';
import { RootState } from '@/redux/store';
import { iPost } from '@/types';

export const Main: FC = () => {
  const { sortingRule, filterRules }: ComponentState = useAppSelector(
    (state: RootState) => state.posts
  );
  const { data, isLoading }: any = useGetPostsQuery({
    sortingRule: !!sortingRule ? 'viewsCount' : 'createdAt',
    filterRules,
  });

  return (
    <main className="main">
      {!!data ? (
        data.map((post: iPost) => <Post key={post._id} {...post} />)
      ) : isLoading ? (
        Array(3)
          .fill('')
          .map((_, index) => <PostSkelleton key={index} />)
      ) : (
        <h1 className="main__empty">Unfortunately, there are no articles</h1>
      )}
    </main>
  );
};
