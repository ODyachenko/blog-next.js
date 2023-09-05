import { FC } from 'react';
import { Post } from '../Post/Post';

export const Main: FC = () => {
  return (
    <main className="main">
      <Post />
      <Post />
      <Post />
    </main>
  );
};
