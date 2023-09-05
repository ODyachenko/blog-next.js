import Image from '@/node_modules/next/image';
import { FC } from 'react';

export const PostCommentsCreate: FC = () => {
  return (
    <div className="comments__item comments__item--create">
      <Image
        className="comments__avatar"
        src="https://mui.com/static/images/avatar/1.jpg"
        alt="/"
        width={40}
        height={40}
      />
      <form className="comments__content">
        <textarea
          className="comments__field"
          placeholder="Write your comment"
          required
        ></textarea>
        <button className="comments__btn primary-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
