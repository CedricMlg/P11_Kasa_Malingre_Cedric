import Arrow from "../../assets/Arrow_Select.svg"

function Dropdown(props) {
    const rules = props.rules;
    console.log(rules)
    return (
        <div  className="A-propos__container-dropdowns">
            {rules.map((rule) => 
                <div key={rule.id} className="A-propos__block-dropdown">
                    <div className="A-propos__dropdown-title">
                        <p>{rule.title}</p>
                        <img src={Arrow} alt="Arrow dropdown" />
                    </div>
                    <p>{rule.description}</p>
                </div>
            )}
        </div>
    )
}

export default Dropdown