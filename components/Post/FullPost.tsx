import { FC } from 'react';
import Image from '@/node_modules/next/image';
import { AiOutlineEye } from 'react-icons/ai';
import { LuMessageSquare } from 'react-icons/lu';
import { PostTags } from './PostTags';
import { convertDate } from '@/utils/convertDate';
import ReactMarkdown from '@/node_modules/react-markdown/index';
import { iPost } from '@/types';
import './styles.scss';

export const FullPost: FC<iPost> = ({
  imageUrl,
  user,
  createdAt,
  title,
  text,
  tags,
  viewsCount,
}) => {
  return (
    <div className="post fullpost">
      <Image
        className="post__cover"
        src={imageUrl}
        alt="Post cover"
        width={1148}
        height={300}
        priority
      />
      <div className="post__footer">
        <Image
          className="post__avatar"
          src={user.avatarUrl}
          alt="Post avatar"
          width={50}
          height={50}
        />
        <div className="post__content">
          <span className="post__author">{user.fullName}</span>
          <span className="post__date">{convertDate(createdAt)}</span>
          <h2 className="post__title">{title}</h2>
          <ReactMarkdown className="post__text" children={text} />
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
