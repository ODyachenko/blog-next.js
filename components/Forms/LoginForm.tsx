'use client';
import { useAppDispatch } from '@/hooks/hooks';
import { useLoginUserMutation } from '@/redux/api/user.api';
import { setIsAuth } from '@/redux/slices/userSlice';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BeatLoader } from '@/node_modules/react-spinners';
import './styles.scss';
import { useRouter } from 'next/navigation';

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' });
  const [loginUser, { isLoading, isError }] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      const response = await loginUser(data);
      localStorage.setItem('token', response.data.token);
      dispatch(setIsAuth(true));
      reset();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="login__form form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title">Log into the account</h1>
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
        {isLoading ? <BeatLoader size={15} color="#fff" /> : 'Log in'}
      </button>
    </form>
  );
};
