import { Link } from "react-router-dom";
import Logo from "../../assets/logo-footer.svg";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__block-logo">
        <Link to="/">
          <img className="Footer__logo" src={Logo} alt="Logo kasa" />
        </Link>
      </div>
      <p className="Footer__all-rights">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
