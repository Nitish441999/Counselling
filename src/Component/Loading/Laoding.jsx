import React from "react";
import image from "../../assets/loading.svg";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center space-x-2">
        <img src={image} alt="Loading..." className="w-24 h-24" />
      </div>
    </div>
  );
};

export default Loading;
