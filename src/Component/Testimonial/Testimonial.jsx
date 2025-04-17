import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  const data = [
    {
      id: 1,
      name: "OM vikash",
      rating: "5",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    {
      id: 2,
      name: "Nitish",
      rating: "4",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    {
      id: 3,
      name: "Basuki",
      rating: "3",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    {
      id: 4,
      name: "Giyan",
      rating: "5",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    {
      id: 5,
      name: "Rohit",
      rating: "4",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    {
      id: 6,
      name: "Shidarth",
      rating: "3",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    {
      id: 7,
      name: "Ankit",
      rating: "5",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    {
      id: 8,
      name: "Ashu",
      rating: "4",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    {
      id: 9,
      name: "Abhirop",
      rating: "2",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    {
      id: 10,
      name: "Om Prkash",
      rating: "5",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    {
      id: 11,
      name: "Chhotu",
      rating: "3",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
    // Add all other data objects here
  ];

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-700 text-center mb-6 tracking-wider uppercase">
        Testimonial
      </h2>
      <Slider {...settings} className="overflow-hidden max-md:overflow-hidden">
        {data.map((testimonial) => (
          <div key={testimonial.id} className="p-4">
            <div className="relative bg-gray-50 shadow-md rounded-lg overflow-hidden cursor-pointer py-3 ">
              {/* Image Section */}
              <div className=" flex justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              {/* Name Overlay */}
              <div className=" w-full bg-gradient-to-t text-gray-600 text-center py-2">
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <div className=" flex justify-center">
                  {[...Array(Number(testimonial.rating))].map((_, index) => (
                    <span key={index} className="text-yellow-400 text-2xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              {/* Rating and Message */}
              <div className="p-4">
                <p className="text-sm text-gray-700">{testimonial.message}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
