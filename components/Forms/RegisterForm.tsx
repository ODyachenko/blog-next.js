'use client';
import { FC, useState } from 'react';
import Image from '@/node_modules/next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCreateUserMutation } from '@/redux/api/user.api';
import './styles.scss';

type Inputs = {
  avatarUrl?: string;
  fullName: string;
  email: string;
  password: string;
};

export const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' });
  const [createUser] = useCreateUserMutation();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data);
    createUser(data);
    reset();
  };
  const [files, setFiles] = useState<File[]>([]);
  const urls = files.map((file) => URL.createObjectURL(file));

  const onChangeField = (event: any) => {
    const fileList = event.target.files;
    fileList && setFiles([...fileList]);
  };

  return (
    <form className="login__form form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title">Сreate account</h1>
      <label className="form__avatar">
        {!!files.length ? (
          <Image
            className="form__avatar--img"
            src={urls[0]}
            alt="test"
            height={100}
            width={100}
          />
        ) : (
          <svg
            fill="#bdbdbd"
            width="100px"
            height="100px"
            viewBox="0 0 512 512"
            id="_x30_1"
            version="1.1"
          >
            <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,90  c37.02,0,67.031,35.468,67.031,79.219S293.02,248.438,256,248.438s-67.031-35.468-67.031-79.219S218.98,90,256,90z M369.46,402  H142.54c-11.378,0-20.602-9.224-20.602-20.602C121.938,328.159,181.959,285,256,285s134.062,43.159,134.062,96.398  C390.062,392.776,380.839,402,369.46,402z" />
          </svg>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={onChangeField}
          {...register('avatarUrl', {
            value: 'https://mui.com/static/images/avatar/4.jpg',
          })}
        />
      </label>
      <input
        className="form__field"
        type="text"
        placeholder="Full name"
        {...register('fullName', {
          required: 'This field is required',
          minLength: { value: 2, message: 'Min length is 2' },
          maxLength: { value: 30, message: 'Max length is 30' },
        })}
      />
      {errors.fullName && (
        <span className="form__error">{errors.fullName.message}</span>
      )}
      <input
        className="form__field"
        type="email"
        placeholder="E-mail"
        {...register('email', {
          required: 'This field is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Please enter valid email',
          },
        })}
      />
      {errors.email && (
        <span className="form__error">{errors.email.message}</span>
      )}
      <input
        className="form__field"
        type="password"
        placeholder="Password"
        {...register('password', {
          required: 'This field is required',
          minLength: { value: 4, message: 'Min length is 4' },
        })}
      />
      {errors.password && (
        <span className="form__error">{errors.password.message}</span>
      )}
      <button className="form__btn primary-btn" type="submit">
        Create
      </button>
    </form>
  );
};
