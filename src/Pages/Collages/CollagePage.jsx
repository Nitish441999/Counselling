import React from "react";

const CollegePage = ({ image, name, location, description, website }) => {
  return (
    <div className="w-full bg-gray-100 mb-8">
      {/* College Image */}
      <div className="relative">
        <img
          src={image}
          alt={`${name} image`}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">{name}</h1>
        </div>
      </div>

      {/* College Details */}
      <div className="p-6 max-w-5xl mx-auto">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-gray-600">{location}</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-800">{description}</p>
        </div>

        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit Official Website
          </a>
        )}
      </div>
    </div>
  );
};

export default CollegePage;
