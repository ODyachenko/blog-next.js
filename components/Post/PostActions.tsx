import Link from '@/node_modules/next/link';
import { useDeletePostMutation } from '@/redux/api/posts.api';
import { FC } from 'react';

type PostActionsProps = {
  id: string;
};

export const PostActions: FC<PostActionsProps> = ({ id }) => {
  const [deletePost] = useDeletePostMutation();

  const onClickDeleteHandler = () => {
    if (confirm('Do you want to delete the post?')) {
      deletePost(id);
    }
  };

  return (
    <div className="post__actions">
      <Link href={`/posts/${id}/edit`} className="post__actions-item">
        <svg
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="EditIcon"
        >
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
        </svg>
      </Link>
      <span className="post__actions-item" onClick={onClickDeleteHandler}>
        <svg
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ClearIcon"
        >
          <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      </span>
    </div>
  );
};
