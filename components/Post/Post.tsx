import Image from '@/node_modules/next/image';
import { FC } from 'react';
import './styles.scss';
import { PostTags } from './PostTags';
import { AiOutlineEye } from 'react-icons/ai';
import { LuMessageSquare } from 'react-icons/lu';
import Link from '@/node_modules/next/link';
import { iPost } from '@/types';

export const Post: FC<iPost> = ({
  id,
  cover,
  avatar,
  author,
  date,
  title,
  tags,
  views,
  commentsCount,
}) => {
  return (
    <Link href={`/post/${id}`} className="post">
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
          src={avatar}
          alt="Post avatar"
          width={30}
          height={30}
        />
        <div className="post__content">
          <span className="post__author">{author}</span>
          <span className="post__date">{date}</span>
          <h2 className="post__title">{title}</h2>
          <PostTags tags={tags} />
          <div className="post__stats">
            <div className="post__stats-item">
              <AiOutlineEye size={20} /> {views}
            </div>
            <div className="post__stats-item">
              <LuMessageSquare size={20} /> {commentsCount}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
