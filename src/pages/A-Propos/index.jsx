import Dropdown from "../../components/Dropdown";
import Banner from "../../assets/Banner_APropos.png";
import rules from "../../data/rules.json";

function APropos() {
  return (
    <div className="a-propos">
      <div className="a-propos__block-banner">
        <img
          className="a-propos__banner"
          src={Banner}
          alt="Banner of the page 'About us'"
        />
      </div>
      <div className="a-propos__container-dropdowns">
        {rules.map((rule, index) => (
          <Dropdown key={index} props={rule} />
        ))}
      </div>
    </div>
  );
}

export default APropos;
