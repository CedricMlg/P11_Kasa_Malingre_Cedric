import Dropdown from "../../components/Dropdown";
import Banner from "../../assets/Banner_APropos.png";
import rules from "../../data/rules.json";

function APropos() {
  return (
    <div className="A-propos">
      <div className="A-propos__block-banner">
        <img
          className="A-propos__banner"
          src={Banner}
          alt="Banner of the page 'About us'"
        />
      </div>
      <Dropdown rules={rules} />
    </div>
  );
}

export default APropos;
