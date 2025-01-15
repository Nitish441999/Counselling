import React from "react";
import { useLocation } from "react-router-dom";
import data from "./IndianCollageData"; // Import the data file

function AllCollage() {
  const location = useLocation();
  const path = location.pathname.split("/")[1]; // Extract the category from the URL

  // Find the matching category data
  const filteredData = data.find((item) => item.category === path);

  // Get the specific list of colleges from the filtered data
  const colleges = filteredData
    ? filteredData.btechCollages ||
      filteredData.mbbsCollages ||
      filteredData.lawCollages ||
      []
    : [];
  console.log(colleges);

  return (
    <>
      {colleges?.map((college) => {
        <div key={college.id} className=" w-full h-96">
          <video className=" w-full h-full " loop autoPlay controls>
            <source src={college.video} />
          </video>
        </div>;
      })}

      <div className="min-lg:p-6 flex justify-center">
        <div className="max-w-[90.33%] w-full mt-5">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Top {path.toUpperCase()} Colleges
          </h2>
          {colleges.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {colleges.map((college) => (
                <div
                  key={college.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
                >
                  {/* College Image */}
                  <img
                    src={college.image}
                    alt={college.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  {/* College Details */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-2">
                      {college.name}
                    </h3>
                    {/* Action Buttons */}
                    <div className="flex justify-center space-x-4">
                      <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                        Need Counselling
                      </button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                        View More Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No colleges found for the selected category.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default AllCollage;
