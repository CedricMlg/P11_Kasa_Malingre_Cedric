import { Link } from "react-router-dom";
import logo from "../../assets/logo-footer.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__block-logo">
        <Link to="/">
          <img className="footer__logo" src={logo} alt="Logo kasa" />
        </Link>
      </div>
      <p className="footer__all-rights">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
