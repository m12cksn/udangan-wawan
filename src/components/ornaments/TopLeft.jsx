import React from "react";
import Image from "next/image";

const TopLeft = () => {
  return (
    <div>
      {" "}
      <Image
        className="w-52 animate-jump animate-infinite animate-duration-[7000ms] animate-delay-1000 animate-ease-in animate-reverse animate-fill-both ease-in-out duration-1000 transition-all object-contain absolute -top-10 -left-10 "
        src="/images/top_left.webp"
        width={500}
        height={500}
        alt="Cruise"
        priority={true}
      />
    </div>
  );
};

export default TopLeft;
