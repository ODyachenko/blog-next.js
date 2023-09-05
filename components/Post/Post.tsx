import Image from '@/node_modules/next/image';
import { FC } from 'react';
import cover from '@/public/post_cover.webp';
import avatar from '@/public/avatar.webp';
import './styles.scss';
import { PostTags } from './PostTags';
import { AiOutlineEye } from 'react-icons/ai';
import { LuMessageSquare } from 'react-icons/lu';

const tags: string[] = ['#react', '#fun', '#typeScript'];

export const Post: FC = () => {
  return (
    <div className="post">
      <Image className="post__cover" src={cover} alt="Post cover" />
      <div className="post__footer">
        <Image className="post__avatar" src={avatar} alt="Post avatar" />
        <div className="post__content">
          <span className="post__author">Keff</span>
          <span className="post__date">12.06.2022</span>
          <h2 className="post__title">
            Roast the code #1 | Rock Paper Scissors
          </h2>
          <PostTags tags={tags} />
          <div className="post__stats">
            <div className="post__stats-item">
              <AiOutlineEye size={20} /> 150
            </div>
            <div className="post__stats-item">
              <LuMessageSquare size={20} /> 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
