import { iComments } from '@/types';
import { FC } from 'react';
import { CommentsItem } from './CommentsItem';
import './styles.scss';

type CommentsProps = {
  comments: iComments[];
};

export const Comments: FC<CommentsProps> = ({ comments }) => {
  return (
    <ul className="comments__list comments">
      {comments.map((comment) => {
        return <CommentsItem key={comment._id} {...comment} />;
      })}
    </ul>
  );
};
