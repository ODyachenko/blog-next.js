import { FC } from 'react';
import './styles.scss';

export const LoginForm: FC = () => {
  return (
    <form className="login__form form" action="">
      <h1 className="form__title">Log into the account</h1>
      <input className="form__field" type="email" placeholder="E-mail" />
      <input className="form__field" type="password" placeholder="Password" />
      <button className="form__btn primary-btn" type="submit">
        Log in
      </button>
    </form>
  );
};
