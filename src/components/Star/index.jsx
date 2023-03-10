import fullStar from "../../assets/full-star.svg";
import emptyStar from "../../assets/empty-star.svg";

/* A function that takes in a prop and returns a div with an image. */
function Star(props) {
  const star = props.props;
  return (
    <div className="star">
      {star === "full" ? (
        <img src={fullStar} alt="Full star" />
      ) : (
        <img src={emptyStar} alt="Empty star" />
      )}
    </div>
  );
}

export default Star;
