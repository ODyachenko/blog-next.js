import { FC } from 'react';
import Image from '@/node_modules/next/image';
import { AiOutlineEye } from 'react-icons/ai';
import { LuMessageSquare } from 'react-icons/lu';
import { PostTags } from './PostTags';
import { convertDate } from '@/utils/convertDate';
import './styles.scss';

export const FullPost: FC = ({
  cover,
  user,
  createdAt,
  title,
  text,
  tags,
  viewsCount,
}: any) => {
  return (
    <div className="post fullpost">
      <Image
        className="post__cover"
        src={cover}
        alt="Post cover"
        width={690}
        height={300}
        priority
      />
      <div className="post__footer">
        <Image
          className="post__avatar"
          src={user.avatarUrl}
          alt="Post avatar"
          width={30}
          height={30}
        />
        <div className="post__content">
          <span className="post__author">{user.fullName}</span>
          <span className="post__date">{convertDate(createdAt)}</span>
          <h2 className="post__title">{title}</h2>
          <p className="post__text">{text}</p>
          <PostTags tags={tags} />
          <div className="post__stats">
            <div className="post__stats-item">
              <AiOutlineEye size={20} /> {viewsCount}
            </div>
            <div className="post__stats-item">
              <LuMessageSquare size={20} /> {0}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
