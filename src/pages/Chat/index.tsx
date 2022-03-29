import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Logo from 'assets/logo.svg';
import Send from 'assets/send.svg';
import Back from 'assets/back.svg';

import { IconCAM, IconPEN, IconCAll, IconVIDEOCALL, IconMENU } from 'components/Icon';
import Avatar from 'components/Avatar';
import { useState } from 'react';

const Chat = () => {
  const [isOpenMessage, setIsOpenMessage] = useState<Boolean>(false);

  const handleOpenMessage = () => {
    setIsOpenMessage(!isOpenMessage);
  };

  const handleCloseMessage = () => {
    setIsOpenMessage(!isOpenMessage);
  };
  return (
    <div className={isOpenMessage ? 'container-chat is_message-open' : 'container-chat'}>
      <div className="left">
        <div className="header-top">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <h1 className="header-title ">Messages</h1>
          <div className="header-icon">
            <a href="/">
              <IconCAM />
            </a>
            <a href="/">
              <IconPEN />
            </a>
          </div>
        </div>
        <div className="search-chat">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          <input type="search" placeholder="Search" />
        </div>
        <div className="list-items">
          <ul className="onl-list">
            <li className="onl-item">
              <div>
                <Avatar size="big-ava" status="onl" />
              </div>
            </li>
            <li className="onl-item">
              <div>
                <Avatar size="big-ava" status="onl" />
              </div>
            </li>
            <li className="onl-item">
              <div>
                <Avatar size="big-ava" status="onl" />
              </div>
            </li>
            <li className="onl-item">
              <div>
                <Avatar size="big-ava" status="onl" />
              </div>
            </li>
            <li className="onl-item">
              <div>
                <Avatar size="big-ava" status="onl" />
              </div>
            </li>
            <li className="onl-item">
              <div>
                <Avatar size="big-ava" status="onl" />
              </div>
            </li>
          </ul>
        </div>
        <div className="main-chat">
          <ul className="chats-list">
            <li className="chats-item">
              <div className="chats-item-button js-chat-button" role="button" tabIndex={0} onClick={handleOpenMessage}>
                <div className="profile-image ">
                  <Avatar size="big-ava" status="onl" />
                </div>
                <div className="chats-item-header">
                  <h3 className="chats-item-title">Rose Tran</h3>
                </div>
                <div className="chats-item-content">
                  <p className="chats-item-last">
                    David Pham: I play badminton I play badminton .. I play badminton .. I play badminton .. I play
                    badminton ..
                  </p>
                  <time className="chats-item-time">11:00am</time>
                </div>
              </div>
            </li>
            <li className="chats-item">
              <div className="chats-item-button js-chat-button" role="button" tabIndex={0} onClick={handleOpenMessage}>
                <div className="profile-image ">
                  <Avatar size="big-ava" status="onl" />
                </div>
                <div className="chats-item-header">
                  <h3 className="chats-item-title">Rose Tran</h3>
                </div>
                <div className="chats-item-content">
                  <p className="chats-item-last">
                    David Pham: I play badminton I play badminton .. I play badminton .. I play badminton .. I play
                    badminton ..
                  </p>
                  <time className="chats-item-time">11:00am</time>
                </div>
              </div>
            </li>
            <li className="chats-item">
              <div className="chats-item-button js-chat-button" role="button" tabIndex={0} onClick={handleOpenMessage}>
                <div className="profile-image ">
                  <Avatar size="big-ava" status="onl" />
                </div>
                <div className="chats-item-header">
                  <h3 className="chats-item-title">Rose Tran</h3>
                </div>
                <div className="chats-item-content">
                  <p className="chats-item-last">
                    David Pham: I play badminton I play badminton .. I play badminton .. I play badminton .. I play
                    badminton ..
                  </p>
                  <time className="chats-item-time">11:00am</time>
                </div>
              </div>
            </li>
            <li className="chats-item">
              <div className="chats-item-button js-chat-button" role="button" tabIndex={0} onClick={handleOpenMessage}>
                <div className="profile-image ">
                  <Avatar size="big-ava" status="onl" />
                </div>
                <div className="chats-item-header">
                  <h3 className="chats-item-title">Rose Tran</h3>
                </div>
                <div className="chats-item-content">
                  <p className="chats-item-last">
                    David Pham: I play badminton I play badminton .. I play badminton .. I play badminton .. I play
                    badminton ..
                  </p>
                  <time className="chats-item-time">11:00am</time>
                </div>
              </div>
            </li>
            <li className="chats-item">
              <div className="chats-item-button js-chat-button" role="button" tabIndex={0} onClick={handleOpenMessage}>
                <div className="profile-image ">
                  <Avatar size="big-ava" status="onl" />
                </div>
                <div className="chats-item-header">
                  <h3 className="chats-item-title">Rose Tran</h3>
                </div>
                <div className="chats-item-content">
                  <p className="chats-item-last">
                    David Pham: I play badminton I play badminton .. I play badminton .. I play badminton .. I play
                    badminton ..
                  </p>
                  <time className="chats-item-time">11:00am</time>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="common-header">
          <div className="common-header-start">
            <button
              className="common-button flex items-center justify-center mr-2 is-only-mobile"
              onClick={handleCloseMessage}
            >
              <img className="w-6 h-6" src={Back} alt="back" />
            </button>
            <button className="common-button flex">
              <Avatar size="big-ava" status="onl" />
              <div className="common-header-content">
                <h2 className="common-header-title">Alexander Huynh</h2>
              </div>
            </button>
          </div>
          <nav className="common-nav">
            <ul className="common-nav-list">
              <li className="common-nav-item">
                <button className="common-button">
                  <IconCAll />
                </button>
              </li>
              <li className="common-nav-item">
                <button>
                  <IconVIDEOCALL />
                </button>
              </li>
              <li className="common-nav-item">
                <button>
                  <IconMENU />
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="messenger">
          <ol className="messenger-list">
            <li className="common-mess is-time">11:00am, 2022/02/12</li>
            <li className="common-mess is-you">
              <p>Hi Tammy, I am fine. How are you Tammy? I am fine too. Thank you for asking</p>
            </li>
            <li className="common-mess is-other">
              <div className="common-ava">
                <Avatar size="small-ava" status="onl" />
              </div>
              <p>How is your family? How is your mother doing?</p>
            </li>
            <li className="common-mess is-you">
              <p>Hi Tammy, I am fine. How are you Tammy? I am fine too. Thank you for asking</p>
            </li>
            <li className="common-mess is-other">
              <div className="common-ava">
                <Avatar size="small-ava" status="onl" />
              </div>
              <p>How is your family? How is your mother doing?</p>
            </li>
            <li className="common-mess is-time">11:00am, 2022/02/12</li>
            <li className="common-mess is-you">
              <p>Hi Tammy, I am fine. How are you Tammy? I am fine too. Thank you for asking</p>
            </li>
            <li className="common-mess is-other">
              <div className="common-ava">
                <Avatar size="small-ava" status="onl" />
              </div>
              <p>How is your family? How is your mother doing?</p>
            </li>
            <li className="common-mess is-you">
              <p>Hi Tammy, I am fine. How are you Tammy? I am fine too. Thank you for asking</p>
            </li>
            <li className="common-mess is-other">
              <div className="common-ava">
                <Avatar size="small-ava" status="onl" />
              </div>
              <p>How is your family? How is your mother doing?</p>
            </li>
            <li className="common-mess is-time">11:00am, 2022/02/12</li>
            <li className="common-mess is-you">
              <p>Hi Tammy, I am fine. How are you Tammy? I am fine too. Thank you for asking</p>
            </li>
            <li className="common-mess is-other">
              <div className="common-ava">
                <Avatar size="small-ava" status="onl" />
              </div>
              <p>How is your family? How is your mother doing?</p>
            </li>
            <li className="common-mess is-you">
              <p>Hi Tammy, I am fine. How are you Tammy? I am fine too. Thank you for asking</p>
            </li>
            <li className="common-mess is-other">
              <div className="common-ava">
                <Avatar size="small-ava" status="onl" />
              </div>
              <p>How is your family? How is your mother doing?</p>
            </li>
            <li className="common-mess is-time">11:00am, 2022/02/12</li>
            <li className="common-mess is-you">
              <p>Hi Tammy, I am fine. How are you Tammy? I am fine too. Thank you for asking</p>
            </li>
            <li className="common-mess is-other">
              <div className="common-ava">
                <Avatar size="small-ava" status="onl" />
              </div>
              <p>How is your family? How is your mother doing?</p>
            </li>
            <li className="common-mess is-you">
              <p>Hi Tammy, I am fine. How are you Tammy? I am fine too. Thank you for asking</p>
            </li>
            <li className="common-mess is-other">
              <div className="common-ava">
                <Avatar size="small-ava" status="off" />
              </div>
              <p>How is your family? How is your mother doing?</p>
            </li>
          </ol>
        </div>
        <div className="message-box">
          <button className="p-4">
            <span className="icon">😃</span>
          </button>

          <div className="text-input" id="message-box" placeholder="Type a message" contentEditable></div>
          <button id="submit-button" className="p-4">
            <span className="icon">
              <img src={Send} alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
