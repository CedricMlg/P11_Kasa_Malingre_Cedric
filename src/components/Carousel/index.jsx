import { useState } from "react";
import arrowPrev from "../../assets/carousel-arrow-prev.svg";
import arrowNext from "../../assets/carousel-arrow-next.svg";

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pictures = props.props;

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <figure className="carousel">
      <img src={pictures[currentIndex]} alt="Picture of the lodging" />
      <figcaption>
        <div className={`carousel__arrows ${pictures.length === 1 ? "hide" : ""}`}>
          <button className="carousel__prevPicture" onClick={goToPrev}>
            <img src={arrowPrev} alt="Previous picture" />
          </button>
          <button className="carousel__nextPicture" onClick={goToNext}>
            <img src={arrowNext} alt="Next picture" />
          </button>
        </div>
        <p className="carousel__bullet-point">
          {currentIndex + 1}/{pictures.length}
        </p>
      </figcaption>
    </figure>
  );
}

export default Carousel;
