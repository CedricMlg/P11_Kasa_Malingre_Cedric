import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO.svg";

function Header() {
  return (
    <div className="Header">
      <div className="Header__block-logo">
        <Link to="/">
          <img className="Header__logo" src={Logo} alt="Logo kasa" />
        </Link>
      </div>
      <nav className="Header__nav">
        <ul>
          <li>
            <Link to="/">ACCUEIL</Link>
          </li>
          <li>
            <Link to="/a-propos">A PROPOS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
