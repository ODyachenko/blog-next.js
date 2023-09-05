import { FC } from 'react';
import { Comments } from '../Comments/Comments';
import { PostCommentsCreate } from './PostCommentsCreate';

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
  return (
    <div className="post__comments">
      <Comments comments={comments} />
      <PostCommentsCreate />
    </div>
  );
};
