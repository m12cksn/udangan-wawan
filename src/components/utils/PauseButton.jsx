import React from "react";
import Image from "next/image";

const PauseButton = () => {
  return (
    <div>
      {" "}
      <Image
        className="w-14"
        src="/images/pause.png"
        width={500}
        height={500}
        alt="Cruise"
        priority={true}
      />
    </div>
  );
};

export default PauseButton;
