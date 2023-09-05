import { FC } from 'react';
import { PiHashStraightBold } from '@/node_modules/react-icons/pi';

type SidebarTagsProps = {
  tags: string[];
};

export const SidebarTags: FC<SidebarTagsProps> = ({ tags }) => {
  return (
    <ul className="sidebar__tags">
      {tags.map((tag) => (
        <li key={tag} className="sidebar__tags-item">
          <PiHashStraightBold size={20} /> {tag}
        </li>
      ))}
    </ul>
  );
};
