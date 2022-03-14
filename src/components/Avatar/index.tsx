import { FC } from 'react';
import NoAva from 'assets/no-ava.svg';

const AVA = ['big-ava', 'small-ava'];

interface IProps {
  size?: string;
  status: string;
}

const Avatar: FC<IProps> = ({ size, status }) => {
  const checkAva = AVA.includes('size') ? 'big-ava' : AVA[0];

  return (
    <>
      <div className="main-img">
        <img className={checkAva} src={NoAva} alt="No Ava" />
        <div className={`badge ${status}`}></div>
      </div>
    </>
  );
};

export default Avatar;
