import Card from "../../components/Card";
import logements from "../../data/logements.json";
import Banner from "../../assets/Banner_Home.png";

function Home() {
  return (
    <div className="Home">
      <div className="Home__banner">
        <img
          className="Home__banner"
          src={Banner}
          alt="Banner of the home page"
        />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <Card logements={logements} />
    </div>
  );
}

export default Home;
