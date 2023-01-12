import logements from "../../data/logements.json";
import Carousel from "../../components/Carousel";
import Dropdown from "../../components/Dropdown";
import Star from "../../components/Star";
import Tag from "../../components/Tag";
import { useParams } from "react-router-dom";

function handleRating(rating) {
  const stars = ["empty", "empty", "empty", "empty", "empty"];
  stars.fill("full", 0, rating);
  return stars;
}

function FicheLogement() {
  let { id } = useParams();
  const array = logements.filter((logement) => logement.id === id);
  const logement = array[0];
  const tags = logement.tags;
  const host = logement.host;
  const description = {};
  const equipement = {};
  description.title = "Description";
  description.description = logement.description;
  equipement.title = "Équipements";
  equipement.description = logement.equipments;
  const starsArray = handleRating(logement.rating);
  return (
    <div className="logement">
      <Carousel props={logement.pictures} />
      <div className="logement__title">{logement.title}</div>
      <div className="logement__location">{logement.location}</div>
      <div className="logement__container-tags">
        {tags.map((tag, index) => (
          <Tag key={index} props={tag} />
        ))}
      </div>
      <div className="logement__container-rating/host">
        <div className="logement__container-stars">
          {starsArray.map((star, index) => (
            <Star key={index} props={star} />
          ))}
        </div>
        <div className="logement__container-host">
          <p>{host.name}</p>
          <img src={host.picture} alt="Host picture" />
        </div>
      </div>
      <div className="logement__container-dropdowns">
        <Dropdown props={description} />
        <Dropdown props={equipement} />
      </div>
    </div>
  );
}

export default FicheLogement;
