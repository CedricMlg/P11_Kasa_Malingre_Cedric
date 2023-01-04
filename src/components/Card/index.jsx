function Card(props) {
  const logements = props.logements;
  return (
    <div className="Home__container-cards">
      {logements.map((logement) => (
        <div key={logement.id} className="Home__card">
          <figure>
            <img src={logement.cover} alt="lodging picture" />
            <figcaption>{logement.title}</figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}

export default Card;
