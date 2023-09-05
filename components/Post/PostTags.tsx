import { FC } from 'react';

type PostTagsProps = {
  tags: string[];
};

export const PostTags: FC<PostTagsProps> = ({ tags }) => {
  return (
    <ul className="post__tags">
      {tags.map((tag) => (
        <li key={tag} className="post__tags-item">
          {tag}
        </li>
      ))}
    </ul>
  );
};
