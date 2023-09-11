import { FC } from 'react';
import Link from '@/node_modules/next/link';
import Image from '@/node_modules/next/image';
import { AiOutlineEye } from 'react-icons/ai';
import { LuMessageSquare } from 'react-icons/lu';
import { PostTags } from './PostTags';
import { PostActions } from './PostActions';
import { convertDate } from '@/utils/convertDate';
import './styles.scss';
import { useGetAuthUserQuery } from '@/redux/api/user.api';

export const Post: FC = ({
  _id,
  imageUrl,
  user,
  createdAt,
  title,
  tags,
  viewsCount,
}: any) => {
  const { data } = useGetAuthUserQuery();

  return (
    <div className="post">
      <Link href={`/posts/${_id}`}>
        <Image
          className="post__cover"
          src={imageUrl}
          alt={title}
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
      </Link>
      {data && user._id === data._id && <PostActions id={_id} />}
    </div>
  );
};
