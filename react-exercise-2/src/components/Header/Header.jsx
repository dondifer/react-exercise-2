import "./Header.scss";

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="bullet-less">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
