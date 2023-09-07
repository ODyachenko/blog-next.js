'use client';
import { FC } from 'react';
import { Comments } from '../Comments/Comments';
import { PostCommentsCreate } from './PostCommentsCreate';
import { useGetCommentsQuery } from '@/redux/api/comments.api';
import { RootState } from '@/redux/store';
import { useAppSelector } from '@/hooks/hooks';

export const PostComments: FC = () => {
  const { isAuth } = useAppSelector((state: RootState) => state.user);
  const { data, isLoading, isError } = useGetCommentsQuery();

  return (
    <div className="post__comments">
      {data && <Comments comments={data} />}
      {isAuth && <PostCommentsCreate />}
    </div>
  );
};
