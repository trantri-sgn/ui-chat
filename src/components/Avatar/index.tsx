import { FC } from 'react';
import NoAva from 'assets/no-ava.svg';

const AVA = ['big-ava', 'small-ava'];

interface IProps {
  size: string;
  status: string;
}

const Avatar: FC<IProps> = ({ size, status }) => {
  const checkAva = AVA.includes(size) ? size : AVA[0];

  return (
    <>
      <div className="main-img">
        <img className={checkAva} src={NoAva} alt={checkAva} />
        <div className={checkAva === 'small-ava' ? `badge-${checkAva} ${status}` : `badge ${status}`}></div>
      </div>
    </>
  );
};

export default Avatar;
