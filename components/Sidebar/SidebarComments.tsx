import { FC } from 'react';
import { SidebarCommentsItem } from './SidebarCommentsItem';

const comments = [
  {
    id: '1',
    avatar:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
    author: 'Admin',
    text: 'comment text',
  },
  {
    id: '2',
    avatar:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
    author: 'Admin',
    text: 'comment text',
  },
  {
    id: '3',
    avatar:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
    author: 'Admin',
    text: 'comment text',
  },
];

export const SidebarComments: FC = () => {
  return (
    <ul className="sidebar__comments">
      {comments.map((comment) => {
        return <SidebarCommentsItem key={comment.id} {...comment} />;
      })}
    </ul>
  );
};
