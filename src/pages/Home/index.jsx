import Card from "../../components/Card";
import logements from "../../data/logements.json";
import banner from "../../assets/Banner_Home.png";

function Home() {
  return (
    <div className="home">
      <figure className="home__block-banner">
        <img
          className="home__banner"
          src={banner}
          alt="Banner of the home page"
        />
        <figcaption>
          <h1>Chez vous, partout et ailleurs</h1>
        </figcaption>
      </figure>
      <div className="home__container-cards">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
}

export default Home;
