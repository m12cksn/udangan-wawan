import React from "react";
import Image from "next/image";

const BtmRight = () => {
  return (
    <div>
      {" "}
      <Image
        className="w-52 animate-jump animate-infinite animate-duration-[7000ms] animate-delay-1000 animate-ease-in animate-reverse animate-fill-both ease-in-out object-contain absolute -bottom-10 -right-10 "
        src="/images/btn_right.webp"
        width={500}
        height={500}
        alt="Cruise"
        priority={true}
      />
    </div>
  );
};

export default BtmRight;
