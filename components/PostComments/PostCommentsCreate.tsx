'use client';
import { FC, useState } from 'react';
import Image from '@/node_modules/next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useGetAuthUserQuery } from '@/redux/api/user.api';
import { useCreateCommentMutation } from '@/redux/api/comments.api';
import BeatLoader from '@/node_modules/react-spinners/BeatLoader';

type Inputs = {
  text: string;
};

export const PostCommentsCreate: FC = () => {
  const { data }: any = useGetAuthUserQuery('');
  const [createComment, status] = useCreateCommentMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      createComment(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    data && (
      <div className="comments__item comments__item--create">
        <Image
          className="comments__avatar"
          src={data.avatarUrl}
          alt={data.fullName}
          width={40}
          height={40}
        />
        <form className="comments__content" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className="comments__field"
            placeholder="Write your comment"
            {...register('text', {
              required: 'This field is required',
              minLength: { value: 10, message: 'Min length is 10' },
            })}
          ></textarea>
          {errors.text && (
            <span className="comments__error">{errors.text.message}</span>
          )}
          <button className="comments__btn primary-btn" type="submit">
            {status.isLoading ? <BeatLoader size={9} color="#fff" /> : 'Send'}
          </button>
        </form>
      </div>
    )
  );
};
