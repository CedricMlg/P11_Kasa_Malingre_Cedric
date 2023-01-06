function Card(props) {
  const logements = props.logements;
  return (
    <div className="Home__container-cards">
      {logements.map((logement) => (
        <figure key={logement.id} className="Home__card">
          <img src={logement.cover} alt="lodging picture" />
          <figcaption>{logement.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default Card;
