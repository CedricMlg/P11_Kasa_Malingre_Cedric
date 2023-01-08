import { Link } from "react-router-dom";

function Card(props) {
  const logements = props.logements;
  return (
    <div className="Home__container-cards">
      {logements.map((logement) => (
        <Link to="/fiche-logement">
          <figure key={logement.id} className="Home__card">
            <img src={logement.cover} alt="lodging picture" />
            <figcaption>{logement.title}</figcaption>
          </figure>
        </Link>
      ))}
    </div>
  );
}

export default Card;
