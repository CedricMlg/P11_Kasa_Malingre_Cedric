import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo-header.svg";

const NavUnlisted = styled.ul`
  .current {
    li {
      text-decoration-line: underline;
    }
  }
`;

function Header() {
  return (
    <header className="header">
      <div className="header__block-logo">
        <NavLink to="/">
          <img className="header__logo" src={logo} alt="Logo kasa" />
        </NavLink>
      </div>
      <nav className="header__nav">
        <NavUnlisted>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "current" : null)}
          >
            <li>ACCUEIL</li>
          </NavLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) => (isActive ? "current" : null)}
          >
            <li>A PROPOS</li>
          </NavLink>
        </NavUnlisted>
      </nav>
    </header>
  );
}

export default Header;
