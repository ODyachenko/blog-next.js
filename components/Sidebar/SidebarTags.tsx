import { FC } from 'react';
import { PiHashStraightBold } from '@/node_modules/react-icons/pi';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { RootState } from '@/redux/store';
import { setFilterRules } from '@/redux/slices/postsSlice';

type SidebarTagsProps = {
  tags: string[];
};

export const SidebarTags: FC<SidebarTagsProps> = ({ tags }) => {
  const { filterRules } = useAppSelector((state: RootState) => state.posts);
  const dispatch = useAppDispatch();

  return (
    <ul className="sidebar__tags">
      {tags.map((tag) => (
        <li
          key={tag}
          className={`sidebar__tags-item ${
            filterRules.includes(tag) ? 'active' : ''
          }`}
          onClick={() => dispatch(setFilterRules(tag))}
        >
          <PiHashStraightBold size={20} /> {tag}
        </li>
      ))}
    </ul>
  );
};
