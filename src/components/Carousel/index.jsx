import { useState } from "react";
import arrowPrev from "../../assets/carousel-arrow-prev.svg";
import arrowNext from "../../assets/carousel-arrow-next.svg";

/**
 * The Carousel function is a React component that takes in an array of pictures as a prop and displays
 * the first picture in the array. It also has two buttons that allow the user to navigate through the
 * pictures in the array.
 * @returns A React component
 */
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
