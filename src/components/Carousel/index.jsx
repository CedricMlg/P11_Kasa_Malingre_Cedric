import arrow from "../../assets/arrow_carousel.svg"

function Carousel(props) {
  const pictures = props.props;
  return (
    <figure className="carousel">
      <img src="" alt="" />
      <figcaption>
        <div className="carousel__arrow">
            <img src={arrow} alt="" />
            <img src={arrow} alt="" />
        </div>
        <p className="carousel__bullet-point"></p>
      </figcaption>
    </figure>
  );
}

export default Carousel;
