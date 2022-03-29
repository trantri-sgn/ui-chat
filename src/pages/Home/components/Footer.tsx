import AppStore from 'assets/app-store.jpg';
import GGPlay from 'assets/gg-play.jpg';

const Footer = () => {
  return (
    <div className="footer container">
      <p>All social media Apps are in one Platform</p>
      <div className="app">
        <a href="#">
          <img src={AppStore} width={140} alt="App store download" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.tobesonet.eggroup" target="_blank">
          <img src={GGPlay} width={140} alt="Google play download" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
