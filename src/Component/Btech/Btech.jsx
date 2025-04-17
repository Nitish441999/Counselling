import React from "react";
import { useNavigate } from "react-router-dom";

function Btech() {
  const navigate = useNavigate(); // Hook for navigation

  const products = [
    {
      id: 1,
      name: "Alliance University",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Alliance-University.png",
    },
    {
      id: 2,
      name: "ITM Business School",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/ITM-Business-School.png",
    },
    {
      id: 3,
      name: "S. P. Jain Institute of Management",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/S.-P.-Jain-Institute-of-Management-.png",
    },
    {
      id: 4,
      name: "Ramaiah Institute Of Technology",
      image:
        "https://careercounsellingcentre.com/wp-content/uploads/2024/04/Ramaiah-Institute-Of-Technology.png",
    },
  ];

  const handleCounsellingClick = () => {
    navigate("/CounsellingForm"); // Navigate to the CounsellingForm page
  };

  return (
    <div className="p-6 max-md:p-0 flex justify-center">
      <div className="max-w-[90.33%] w-full">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-700 text-center mb-6 tracking-wider uppercase">
          Btech Colleges
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              {/* Product Details */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                {/* Action Buttons */}
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleCounsellingClick} // Handle the click event
                    className="px-4 w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Need Counselling
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Btech;
