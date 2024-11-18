import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Herosection() {
  // Array of slide objects
  const slides = [
    {
      id: 1,
      image:
        "https://img.freepik.com/premium-photo/happy-multiracial-coworkers-have-fun-cooperating-working-together-office-meeting-teamwork-concept_44344-7680.jpg?w=1060",
      caption: "Slide 1",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/workplace-results-professional-report-accounting_1418-61.jpg?t=st=1731745978~exp=1731749578~hmac=d48f11328ae78ecd76e23c920abd00aa37794553ce5eed75a15ec0f2f07fdc3d&w=996",
      caption: "Slide 2",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/premium-photo/happy-multiracial-coworkers-have-fun-cooperating-working-together-office-meeting-teamwork-concept_44344-7680.jpg?w=1060",
      caption: "Slide 3",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/workplace-results-professional-report-accounting_1418-61.jpg?t=st=1731745978~exp=1731749578~hmac=d48f11328ae78ecd76e23c920abd00aa37794553ce5eed75a15ec0f2f07fdc3d&w=996",
      caption: "Slide 4",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/premium-photo/happy-multiracial-coworkers-have-fun-cooperating-working-together-office-meeting-teamwork-concept_44344-7680.jpg?w=1060",
      caption: "Slide 5",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="w-100% mx-auto ">
      <Slider {...settings} className=" overflow-hidden">
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-[35rem] object-cover"
            />
            {slide.caption && (
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                {slide.caption}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Herosection;
