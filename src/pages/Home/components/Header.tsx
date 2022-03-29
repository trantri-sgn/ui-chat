import Logo from 'assets/logo.svg';
import Arrow from 'assets/arrow.svg';

const Header = () => {
  return (
    <div className="header container">
      <div>
        <a>
          <img src={Logo} alt="Tobe Sonet Logo" />
        </a>
        {/* <ul>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Privacy & Safety</a>
          </li>
          <li>
            <a href="">Download</a>
          </li>
        </ul> */}
      </div>
      <p className="language">
        English
        <img src={Arrow} width={9} height={7} />
      </p>
    </div>
  );
};

export default Header;
