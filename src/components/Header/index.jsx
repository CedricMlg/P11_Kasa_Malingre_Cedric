import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo-header.svg";

const NavUnlisted = styled.ul`
  .current {
    li {
      text-decoration-line: underline;
    }
  }
`;

function Header() {
  return (
    <header className="Header">
      <div className="Header__block-logo">
        <NavLink to="/">
          <img className="Header__logo" src={Logo} alt="Logo kasa" />
        </NavLink>
      </div>
      <nav className="Header__nav">
        <NavUnlisted>
          <NavLink to="/" className={({isActive}) => (isActive ? 'current' : null)} exact>
            <li>ACCUEIL</li>
          </NavLink>
          <NavLink to="/a-propos" className={({isActive}) => (isActive ? 'current' : null)} exact>
            <li>A PROPOS</li>
          </NavLink>
        </NavUnlisted>
      </nav>
    </header>
  );
}

export default Header;
