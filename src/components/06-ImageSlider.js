import { useState } from "react";
import "../ImageSlider.scss";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

const dataSlider = [
  {
    id: 1,
    title: "Lorem ipsum",
    subTitle: "Lorem",
  },
  {
    id: 2,
    title: "Lorem ipsum",
    subTitle: "Lorem",
  },
  {
    id: 3,
    title: "Lorem ipsum",
    subTitle: "Lorem",
  },
  {
    id: 4,
    title: "Lorem ipsum",
    subTitle: "Lorem",
  },
  {
    id: 5,
    title: "Lorem ipsum",
    subTitle: "Lorem",
  },
];

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="" />
    </button>
  );
};

const ImageSlider = (props) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      <div className="header">{props.title}</div>
      <div style={{ textAlign: "center" }}>
        <div className="container-slider">
          {dataSlider.map((obj, index) => {
            return (
              <div
                key={obj.id}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <img
                  src={
                    process.env.PUBLIC_URL + `/img/slider/img${index + 1}.jpg`
                  }
                  alt=""
                />
              </div>
            );
          })}
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />

          <div className="container-dots">
            {Array.from({ length: 5 }).map((item, index) => (
              <div
                key={index}
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ImageSlider;
