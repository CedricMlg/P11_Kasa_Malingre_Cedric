import { useState } from "react";
import Arrow from "../../assets/Arrow_Select.svg";

function Dropdown(props) {
  const rules = props.rules;
  const dropdown = rules.map((rule) => (
    <div key={rule.id} className="A-propos__dropdown">
      <div className="A-propos__dropdown-title">
        <p>{rule.title}</p>
        <button onClick={() => (rule.isOpen === false ? true : false)}>
          <img src={Arrow} alt="Open dropdown" />
        </button>
      </div>
      {rule.isOpen ? "" : <p>{rule.description}</p>}
    </div>
  ));
  return <div className="A-propos__container-dropdowns">{dropdown}</div>;
}

export default Dropdown;
