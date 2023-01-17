import logements from "../../data/logements.json";
import Carousel from "../../components/Carousel";
import Dropdown from "../../components/Dropdown";
import Star from "../../components/Star";
import Tag from "../../components/Tag";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function handleRating(rating) {
  const stars = ["empty", "empty", "empty", "empty", "empty"];
  stars.fill("full", 0, rating);
  return stars;
}

function FicheLogement() {
  let { id } = useParams();
  const array = logements.filter((logement) => logement.id === id);

  if (array.length === 0) {
    const navigate = useNavigate();

    useEffect(() => {
      if (array.length === 0) {
        navigate("*");
      }
    });
  } else {
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
        <div className="logement__container-top">
          {" "}
          <h1 className="logement__title">{logement.title}</h1>
          <h2 className="logement__location">{logement.location}</h2>
          <div className="logement__container-tags">
            {tags.map((tag, index) => (
              <Tag key={index} props={tag} />
            ))}
          </div>
        </div>
        <div className="logement__container-rating-host">
          <div className="logement__container-stars">
            {starsArray.map((star, index) => (
              <Star key={index} props={star} />
            ))}
          </div>
          <div className="logement__container-host">
            <p>{host.name}</p>
            <div className="logement__container-host-picture">
              <img src={host.picture} alt="Host picture" />
            </div>
          </div>
        </div>
        <div className="logement__container-dropdowns">
          <Dropdown props={description} />
          <Dropdown props={equipement} />
        </div>
      </div>
    );
  }
}

export default FicheLogement;
