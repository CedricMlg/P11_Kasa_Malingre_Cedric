import Card from "../../components/Card"
import Banner from "../../assets/Banner_Home.png"

function Home() {
    return (
        <div className="Home">
            <div className="Home__banner">
                <img src={Banner} alt="Banner of the home page" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="Home__block-card"></div>
        </div>
    )
}

export default Home