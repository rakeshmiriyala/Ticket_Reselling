/* eslint-disable no-unused-vars */
// Install react-slick and slick-carousel if not done already
// npm install react-slick slick-carousel

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";
import comedy1 from "../../assets/e-1.jpg";
import comedy2 from "../../assets/e-2.jpg";
import comedy3 from "../../assets/e-1.jpg";
import comedy4 from "../../assets/e-4.jpg";
import comedy5 from "../../assets/e-2.jpg";

const Entertainment = () => {
  // Slick settings generator for each slider
  const getSettings = (sliderClass) => ({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          centerMode: false, // Disable center mode for smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false, // Disable center mode for smaller screens
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          centerMode: false, // Disable center mode for ultra-small screens
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          centerMode: false, // Disable center mode for the smallest screens
        },
      },
    ],
    beforeChange: () => {
      document
        .querySelectorAll(`.${sliderClass} .slick-slide`)
        .forEach((slide) => {
          slide.classList.remove("scale-110", "z-20");
        });
    },
    afterChange: (current) => {
      const currentSlide = document.querySelector(
        `.${sliderClass} .slick-slide[data-index="${current}"]`
      );
      if (currentSlide) {
        currentSlide.classList.add("scale-110", "z-20");
      }
    },
  });

  const sliderData = [
    {
      title: "StandUp Comedy",
      images: [comedy1, comedy2, comedy3, comedy4, comedy5],
    },
    {
      title: "Tv Shows",
      images: [comedy1, comedy2, comedy3, comedy4, comedy5],
    },
    {
      title: "Newwwwww",
      images: [comedy1, comedy2, comedy3, comedy4, comedy5],
    },
  ];

  const renderSlider = (title, images, sliderClass) => (
    <div className="mb-12">
      <br />
      <h1 className="lg:text-4xl xs:text-3xl xs:pl-5 font-bold text-white text-start lg:pl-8 mb-6">
        {title}
      </h1>

      <br />
      <Slider
        {...getSettings(sliderClass)}
        className={`slider ${sliderClass} px-4`}
      >
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <div className="bg-[#120621] text-white rounded-2xl shadow-lg p-6 text-center transition-transform duration-300">
              <h3 className="text-lg font-bold">{`Card ${index + 1}`}</h3>
              <div className="my-4">
                <img
                  src={image}
                  alt={`Card ${index + 1}`}
                  className="w-auto h-auto mx-auto rounded"
                />
              </div>
              <button className="bg-[#DB59FF] text-white py-2 px-4 rounded-2xl hover:bg-blue-600">
                {`Button ${index + 1}`}
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <br />
      <br />
      <br />
      <div className="bg-[#120621] py-4 text-transparent select-none">fhj</div>
    </div>
  );

  return (
    <div className="container lg:mb-32 mx-0 max-w-fit py-8">
      {sliderData.map((slider, index) =>
        renderSlider(slider.title, slider.images, `slider-${index}`)
      )}
    </div>
  );
};

export default Entertainment;
