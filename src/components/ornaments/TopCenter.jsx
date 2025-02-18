import React from "react";
import Image from "next/image";

const TopCenter = () => {
  return (
    <div>
      <Image
        className="w-[38rem] object-contain absolute -top-20  "
        src="/images/center.webp"
        width={500}
        height={500}
        alt="Cruise"
        priority={true}
      />
    </div>
  );
};

export default TopCenter;
