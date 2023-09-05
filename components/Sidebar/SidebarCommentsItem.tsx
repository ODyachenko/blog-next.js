import Image from '@/node_modules/next/image';
import { FC } from 'react';

type SidebarCommentsItemProps = {
  avatar: string;
  author: string;
  text: string;
};

export const SidebarCommentsItem: FC<SidebarCommentsItemProps> = ({
  avatar,
  author,
  text,
}) => {
  return (
    <li className="sidebar__comments-item">
      <Image
        className="sidebar__comments-avatar"
        src={avatar}
        alt={author}
        width={40}
        height={40}
      />
      <div className="sidebar__comments-content">
        <h2 className="sidebar__comments-author">{author}</h2>
        <p className="sidebar__comments-text">{text}</p>
      </div>
    </li>
  );
};
