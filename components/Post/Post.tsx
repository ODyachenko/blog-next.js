import { FC } from 'react';
import Link from '@/node_modules/next/link';
import Image from '@/node_modules/next/image';
import { AiOutlineEye } from 'react-icons/ai';
import { LuMessageSquare } from 'react-icons/lu';
import { PostTags } from './PostTags';
import { PostActions } from './PostActions';
import './styles.scss';
import { convertDate } from '@/utils/convertDate';
import { useAppSelector } from '@/hooks/hooks';
import { RootState } from '@/redux/store';

export const Post: FC = ({
  _id,
  cover,
  user,
  createdAt,
  title,
  tags,
  viewsCount,
}: any) => {
  const { isAuth } = useAppSelector((state: RootState) => state.user);

  return (
    <Link href={`/posts/${_id}`} className="post">
      <Image
        className="post__cover"
        src={cover}
        alt={title}
        width={690}
        height={300}
        priority
      />

      {isAuth && <PostActions id={_id} />}
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
  );
};
