import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import data from "./IndianCollageData"; // Import the data file

function AllCollage() {
  const location = useLocation();
  const navigate = useNavigate();
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
  const handleCounselingClick = () => {
    navigate("/CounsellingForm"); // Navigate to the counseling form with the college ID
  };

  return (
    <>
      <div className="relative w-full h-[80vh]">
        <img
          src="https://careercounsellingcentre.com/wp-content/uploads/2024/04/Alliance-University.png"
          className="w-full h-full object-cover"
          alt="Alliance University"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h3 className="text-white text-2xl md:text-2xl font-bold uppercase tracking-wide">
            Home | Colleges
          </h3>
        </div>
      </div>

      {/* {colleges?.map((college) => {
        <div key={college.id} className=" w-full h-96">
          <video className=" w-full h-full " loop autoPlay controls>
            <source src={college.video} />
          </video>
        </div>;
      })} */}

      <div className="min-lg:p-6 flex justify-center">
        <div className="max-w-[90.33%] w-full mt-5">
          <h2 className="text-3xl font-bold text-gray-700 text-center mb-6 tracking-wider uppercase">
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
                      <button
                        className="px-4 py-2 w-full bg-green-500 text-white rounded hover:bg-green-600"
                        onClick={() => handleCounselingClick()}
                      >
                        Need Counselling
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
