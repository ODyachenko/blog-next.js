import { FC } from 'react';
import './styles.scss';

type PopupProps = {
  text: string;
};

export const Popup: FC<PopupProps> = ({ text }) => {
  return (
    <div className="popup">
      <div className="popup__body">{text}</div>
    </div>
  );
};
