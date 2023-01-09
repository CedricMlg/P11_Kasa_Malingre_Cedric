import { Link } from "react-router-dom";

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
