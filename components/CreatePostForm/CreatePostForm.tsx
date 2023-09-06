import { FC } from 'react';
import Link from '@/node_modules/next/link';
import './styles.scss';

export const CreatePostForm: FC = () => {
  return (
    <form className="post__create create">
      <label className="create__cover">
        Choose the cover
        <input type="file" accept="image/*" required />
      </label>
      <input
        className="create__heading"
        type="text"
        placeholder="Article heading"
        required
      />
      <input className="create__tags" type="text" placeholder="Tags" />
      <textarea
        className="create__text"
        placeholder="Enter the text"
        required
      ></textarea>
      <button className="create__publish primary-btn" type="submit">
        Publish
      </button>
      <Link className="create__cancel" href="/">
        Cancel
      </Link>
    </form>
  );
};
