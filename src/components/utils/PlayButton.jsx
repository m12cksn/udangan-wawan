import React from "react";
import Image from "next/image";

const PlayButton = () => {
  return (
    <div>
      {" "}
      <Image
        className="w-14"
        src="/images/play.png"
        width={500}
        height={500}
        alt="Cruise"
        priority={true}
      />
    </div>
  );
};

export default PlayButton;
