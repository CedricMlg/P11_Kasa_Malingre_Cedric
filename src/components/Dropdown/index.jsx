import { useState } from "react";
import arrow from "../../assets/Arrow_Select.svg";

/**
 * This function takes an array of strings and returns a div with a paragraph for each string in the
 * array.
 * @returns An array of JSX elements.
 */
function handleEquipment(equipments) {
  return (
    <div className="dropdown__container-description">
      {" "}
      {equipments.map((equipment, index) => (
        <p key={index} className="dropdown-description">
          {equipment}
        </p>
      ))}
    </div>
  );
}

/* A function that is being called in the parent component. */
function Dropdown(props) {
  const prop = props.props;
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="dropdown">
      <div className="dropdown-title">
        <p>{prop.title}</p>
        <button
          style={isOpen ? {} : { transform: "rotate(0deg)" }}
          onClick={() => setIsOpen(isOpen === false ? true : false)}
        >
          <img src={arrow} alt="Open dropdown" />
        </button>
      </div>
      {isOpen ? (
        ""
      ) : Array.isArray(prop.description) ? (
        handleEquipment(prop.description)
      ) : (
        <p className="dropdown-description">{prop.description}</p>
      )}
    </div>
  );
}

export default Dropdown;
