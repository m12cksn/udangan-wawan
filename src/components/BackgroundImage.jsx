import React from "react";

const BackgroundImage = ({ bgImage, children }) => {
  return (
    <div
      className="bg-[url('/images/bghero.webp')] bg-cover relative bg-center bg-opacity-20 max-w-sm py-40 w-full flex justify-center items-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
