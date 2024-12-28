import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Category() {
  const categories = [
    {
      id: 1,
      name: "B-Tech",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    {
      id: 2,
      name: "BCA",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/ITM-Business-School.png",
    },
    {
      id: 3,
      name: "BBA",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    {
      id: 4,
      name: "PGPM",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/ITM-Business-School.png",
    },
    {
      id: 5,
      name: "PGDM",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    {
      id: 6,
      name: "LAW",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/ITM-Business-School.png",
    },
    {
      id: 7,
      name: "MCA",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    {
      id: 7,
      name: "MBA",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/ITM-Business-School.png",
    },
    {
      id: 7,
      name: "MBBS",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    {
      id: 7,
      name: "BE",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/ITM-Business-School.png",
    },
    {
      id: 7,
      name: "PHARMACY",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    {
      id: 7,
      name: "BDS",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/ITM-Business-School.png",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">COLLEGES</h2>
      <Slider {...settings} className=" overflow-hidden max-md:overflow-hidden">
        {categories.map((category) => (
          <div key={category.id} className="p-4">
            <div className="relative bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
              {/* Image Section */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              {/* Name Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white text-center py-2">
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Category;
