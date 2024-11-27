import React from "react";
import { useLocation } from "react-router-dom";
import CollegePage from "./CollagePage"; // Assuming you have the College component already defined

// Import the data (Make sure the data file path is correct)
import data from "./CollageData";

function AllCollage() {
  const location = useLocation();
  const path = location.pathname.split("/")[1]; // Extract the category from the URL

  // Filter the data based on the category in the path
  const AllData = data.filter(item => item.category === path);

  return (
    <div className="w-full bg-gray-100">
      {/* Map through the filtered colleges */}
      {AllData.map((college, index) => (
        <div key={index}>
          <CollegePage
            image={college.image}
            name={college.name}
            location={college.location}
            description={college.description}
            website={college.website}
          />
        </div>
      ))}
    </div>
  );
}

export default AllCollage;
