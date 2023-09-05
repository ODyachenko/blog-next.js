import Image from '@/node_modules/next/image';
import { iComments } from '@/types';
import { FC } from 'react';

export const CommentsItem: FC<iComments> = ({ avatar, author, text }) => {
  return (
    <li className="comments__item">
      <Image
        className="comments__avatar"
        src={avatar}
        alt={author}
        width={40}
        height={40}
      />
      <div className="comments__content">
        <h2 className="comments__author">{author}</h2>
        <p className="comments__text">{text}</p>
      </div>
    </li>
  );
};
