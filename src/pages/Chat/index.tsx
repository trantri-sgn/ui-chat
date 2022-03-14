import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Logo from 'assets/logo.svg';
import Send from 'assets/send.svg';

import { IconCAM, IconPEN, IconCAll, IconVIDEOCALL, IconMENU } from 'components/Icon';
import Avatar from 'components/Avatar';

const Chat = () => {
  return (
    <div className="container-chat">
      <div className="left">
        <div className="header-top">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
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
          {/* <div className="items">
            <div>
              <Avatar status="onl" />
            </div>
            <div>
              <Avatar status="onl" />
            </div>
            <div>
              <Avatar status="onl" />
            </div>
            <div>
              <Avatar status="onl" />
            </div>
            <div>
              <Avatar status="onl" />
            </div>
            <div>
              <Avatar status="onl" />
            </div>
          </div> */}
          <ul className="onl-list">
            <li className="onl-item">
              <div>
                <Avatar status="onl" />
              </div>
            </li>
            <li className="onl-item">
              <div>
                <Avatar status="onl" />
              </div>
            </li>
            <li className="onl-item">
              <div>
                <Avatar status="onl" />
              </div>
            </li>
            <li className="onl-item">
              <div>
                <Avatar status="onl" />
              </div>
            </li>
            <li className="onl-item">
              <div>
                <Avatar status="onl" />
              </div>
            </li>
            <li className="onl-item">
              <div>
                <Avatar status="onl" />
              </div>
            </li>
          </ul>
        </div>
        <div className="main-chat">
          <ul className="chats-list">
            <li className="chats-item">
              <div className="chats-item-button js-chat-button" role="button" tabIndex={0}>
                <div className="profile-image ">
                  <Avatar status="onl" />
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
              <div className="chats-item-button js-chat-button" role="button" tabIndex={0}>
                <div className="profile-image ">
                  <Avatar status="onl" />
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
              <div className="chats-item-button js-chat-button" role="button" tabIndex={0}>
                <div className="profile-image ">
                  <Avatar status="onl" />
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
              <div className="chats-item-button js-chat-button" role="button" tabIndex={0}>
                <div className="profile-image ">
                  <Avatar status="onl" />
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
              <div className="chats-item-button js-chat-button" role="button" tabIndex={0}>
                <div className="profile-image ">
                  <Avatar status="onl" />
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
              <div className="chats-item-button js-chat-button" role="button" tabIndex={0}>
                <div className="profile-image ">
                  <Avatar status="onl" />
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
              <div className="chats-item-button js-chat-button" role="button" tabIndex={0}>
                <div className="profile-image ">
                  <Avatar status="onl" />
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
              <div className="chats-item-button js-chat-button" role="button" tabIndex={0}>
                <div className="profile-image ">
                  <Avatar status="onl" />
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
              <div className="chats-item-button js-chat-button" role="button" tabIndex={0}>
                <div className="profile-image ">
                  <Avatar status="onl" />
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
              <div className="chats-item-button js-chat-button" role="button" tabIndex={0}>
                <div className="profile-image ">
                  <Avatar status="onl" />
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
            <button className="common-button flex">
              <Avatar status="onl" />
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
                <Avatar status="onl" />
              </div>
              <p>How is your family? How is your mother doing?</p>
            </li>
            <li className="common-mess is-you">
              <p>Hi Tammy, I am fine. How are you Tammy? I am fine too. Thank you for asking</p>
            </li>
            <li className="common-mess is-other">
              <div className="common-ava">
                <Avatar status="onl" />
              </div>
              <p>How is your family? How is your mother doing?</p>
            </li>
            <li className="common-mess is-time">11:00am, 2022/02/12</li>
            <li className="common-mess is-you">
              <p>Hi Tammy, I am fine. How are you Tammy? I am fine too. Thank you for asking</p>
            </li>
            <li className="common-mess is-other">
              <div className="common-ava">
                <Avatar status="onl" />
              </div>
              <p>How is your family? How is your mother doing?</p>
            </li>
            <li className="common-mess is-you">
              <p>Hi Tammy, I am fine. How are you Tammy? I am fine too. Thank you for asking</p>
            </li>
            <li className="common-mess is-other">
              <div className="common-ava">
                <Avatar status="onl" />
              </div>
              <p>How is your family? How is your mother doing?</p>
            </li>
            <li className="common-mess is-time">11:00am, 2022/02/12</li>
            <li className="common-mess is-you">
              <p>Hi Tammy, I am fine. How are you Tammy? I am fine too. Thank you for asking</p>
            </li>
            <li className="common-mess is-other">
              <div className="common-ava">
                <Avatar status="onl" />
              </div>
              <p>How is your family? How is your mother doing?</p>
            </li>
            <li className="common-mess is-you">
              <p>Hi Tammy, I am fine. How are you Tammy? I am fine too. Thank you for asking</p>
            </li>
            <li className="common-mess is-other">
              <div className="common-ava">
                <Avatar status="onl" />
              </div>
              <p>How is your family? How is your mother doing?</p>
            </li>
            <li className="common-mess is-time">11:00am, 2022/02/12</li>
            <li className="common-mess is-you">
              <p>Hi Tammy, I am fine. How are you Tammy? I am fine too. Thank you for asking</p>
            </li>
            <li className="common-mess is-other">
              <div className="common-ava">
                <Avatar status="onl" />
              </div>
              <p>How is your family? How is your mother doing?</p>
            </li>
            <li className="common-mess is-you">
              <p>Hi Tammy, I am fine. How are you Tammy? I am fine too. Thank you for asking</p>
            </li>
            <li className="common-mess is-other">
              <div className="common-ava">
                <Avatar status="onl" />
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
