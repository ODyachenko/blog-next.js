import Image from '@/node_modules/next/image';
import { iComments } from '@/types';
import { FC } from 'react';

export const CommentsItem: FC<iComments> = ({ user, text }) => {
  return (
    <li className="comments__item">
      <Image
        className="comments__avatar"
        src={user.avatarUrl}
        alt={user.fullName}
        width={40}
        height={40}
      />
      <div className="comments__content">
        <h2 className="comments__author">{user.fullName}</h2>
        <p className="comments__text">{text}</p>
      </div>
    </li>
  );
};
