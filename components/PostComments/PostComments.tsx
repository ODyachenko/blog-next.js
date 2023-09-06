'use client';
import { useAppSelector } from '@/hooks/hooks';
import { FC } from 'react';
import { Comments } from '../Comments/Comments';
import { PostCommentsCreate } from './PostCommentsCreate';
import { RootState } from '@/redux/store';

const comments = [
  {
    id: '1',
    avatar: 'https://mui.com/static/images/avatar/1.jpg',
    author: 'Admin1',
    text: 'text for coment',
  },
  {
    id: '2',
    avatar: 'https://mui.com/static/images/avatar/1.jpg',
    author: 'Admin2',
    text: 'text for coment',
  },
];

export const PostComments: FC = () => {
  const { isAuth } = useAppSelector((state: RootState) => state.user);

  return (
    <div className="post__comments">
      <Comments comments={comments} />
      {isAuth && <PostCommentsCreate />}
    </div>
  );
};
