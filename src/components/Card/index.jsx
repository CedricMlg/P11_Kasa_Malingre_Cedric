import { Link } from "react-router-dom";

/**
 * Card is a function that takes a single argument, props, and returns a Link component that contains a
 * figure component that contains an img component and a figcaption component.
 * @returns A Link component with a figure component as a child.
 */
function Card(props) {
  const logement = props.logement;
  return (
    <Link to={"/logement/" + logement.id}>
      <figure className="card">
        <img src={logement.cover} alt="lodging picture" />
        <figcaption>{logement.title}</figcaption>
      </figure>
    </Link>
  );
}

export default Card;
