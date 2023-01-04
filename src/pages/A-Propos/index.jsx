import Banner from "../../assets/Banner_APropos.png"

function APropos() {
    return (
        <div className="A-propos">
            <div className="A-propos__block-banner">
                <img src={Banner} alt="Banner of the page 'About us'"/>
            </div>
            <div className="A-propos__block-dropdown"></div>
        </div>
    )
}

export default APropos