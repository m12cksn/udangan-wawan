import React from "react";
import Image from "next/image";

export default function Top() {
  return (
    <div>
      <Image
        className="animate-jump translate-x-1/2 right-1/2 animate-infinite animate-duration-[7000ms] animate-delay-1000 animate-ease-in animate-reverse animate-fill-both ease-in-out object-contain w-full absolute top-0 "
        src="/images/tw_top.webp"
        width={500}
        height={500}
        alt="Cruise"
        priority={true}
      />
    </div>
  );
}
