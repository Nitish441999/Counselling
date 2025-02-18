import React, { useState } from "react";

const Gallery = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const images = [
    {
      id: 1,
      src: "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Alliance-University.png",
      name: "Image 1",
      description: "This is the description for Image 1.",
    },
    {
      id: 2,
      src: "https://careercounsellingcentre.com/wp-content/uploads/2024/04/ITM-Business-School.png",
      name: "Image 2",
      description: "This is the description for Image 2.",
    },
    {
      id: 3,
      src: "https://careercounsellingcentre.com/wp-content/uploads/2024/04/S.-P.-Jain-Institute-of-Management-.png",
      name: "Image 3",
      description: "This is the description for Image 3.",
    },
    {
      id: 4,
      src: "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
      name: "Image 4",
      description: "This is the description for Image 4.",
    },
    {
      id: 5,
      src: "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
      name: "Image 5",
      description: "This is the description for Image 5.",
    },
    {
      id: 6,
      src: "https://careercounsellingcentre.com/wp-content/uploads/2024/04/S.-P.-Jain-Institute-of-Management-.png",
      name: "Image 6",
      description: "This is the description for Image 6.",
    },
    {
      id: 7,
      src: "https://careercounsellingcentre.com/wp-content/uploads/2024/04/ITM-Business-School.png",
      name: "Image 7",
      description: "This is the description for Image 7.",
    },
    {
      id: 8,
      src: "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Alliance-University.png",
      name: "Image 8",
      description: "This is the description for Image 8.",
    },
  ];

  return (
    <div className="p-4 max-md:p-0 flex justify-center">
      <div className="max-w-[90.33%] w-full">
        <h2 className="text-4xl font-bold text-gray-700 text-center mb-6 tracking-wider uppercase">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-xl"
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col items-center justify-center text-center transition-opacity duration-300 ${
                  hoveredImage === image.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-lg font-semibold">{image.name}</h3>
                <p className="text-sm mt-2">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
