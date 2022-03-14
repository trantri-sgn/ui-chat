import { FC } from 'react';
import CAM from 'assets/camera.svg';
import CALL from 'assets/call.svg';
import MENU from 'assets/menu.svg';
import PEN from 'assets/pen.svg';
import VIDEOCALL from 'assets/video-call.svg';

const IconCAll = () => {
  return (
    <>
      <div className="icon-items">
        <img src={CALL} alt="" />
      </div>
    </>
  );
};
const IconCAM = () => {
  return (
    <>
      <div className="icon-items">
        <img src={CAM} alt="" />
      </div>
    </>
  );
};
const IconMENU = () => {
  return (
    <>
      <div className="icon-items">
        <img src={MENU} alt="" />
      </div>
    </>
  );
};
const IconPEN = () => {
  return (
    <>
      <div className="icon-items">
        <img src={PEN} alt="" />
      </div>
    </>
  );
};
const IconVIDEOCALL = () => {
  return (
    <>
      <div className="icon-items">
        <img src={VIDEOCALL} alt="" />
      </div>
    </>
  );
};

export { IconCAM, IconCAll, IconMENU, IconPEN, IconVIDEOCALL };
