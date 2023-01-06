import Card from "../../components/Card";
import logements from "../../data/logements.json";
import Banner from "../../assets/Banner_Home.png";

function Home() {
  return (
    <div className="Home">
      <figure className="Home__block-banner">
        <img
          className="Home__banner"
          src={Banner}
          alt="Banner of the home page"
        />
        <figcaption>
          <h1>Chez vous, partout et ailleurs</h1>
        </figcaption>
      </figure>
      <Card logements={logements} />
    </div>
  );
}

export default Home;
