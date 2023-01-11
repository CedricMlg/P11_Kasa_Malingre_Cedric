import fullStar from "../../assets/full-star.svg";
import emptyStar from "../../assets/empty-star.svg";

function Star(props) {
  const star = props.props;
  return (
    <div className="star">
      {star === "full" ? (
        <img src={fullStar} alt="Empty star" />
      ) : (
        <img src={emptyStar} alt="Full star" />
      )}
    </div>
  );
}

export default Star;
