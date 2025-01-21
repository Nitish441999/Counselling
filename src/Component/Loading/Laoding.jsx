import React from "react";
import image from "../../assets/loading.svg";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center space-x-2">
        <img src={image} alt="Loading..." className="w-32 h-32" />
        {/* Alternatively, you can uncomment the animated dots for a combination */}
        {/* <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse animation-delay-200"></div>
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse animation-delay-400"></div> */}
      </div>
    </div>
  );
};

export default Loading;
