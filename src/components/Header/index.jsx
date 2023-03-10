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

/* A function that returns a header. */
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
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) => (isActive ? "current" : null)}
          >
            <li>A Propos</li>
          </NavLink>
        </NavUnlisted>
      </nav>
    </header>
  );
}

export default Header;
