import React from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    img: "/images/house2.png",
    link: "#main",
  },
  {
    img: "/images/couple.png",
    link: "#section2",
  },
  {
    img: "/images/calendar.png",
    link: "#date",
  },
  {
    img: "/images/picture.png",
    link: "#gallery",
  },
  {
    img: "/images/giftbox.png",
    link: "#ending",
  },
  {
    img: "/images/chat.png",
    link: "#rsvp",
  },
];

const Bar = () => {
  return (
    <div>
      <div className="w-80 backdrop-filter backdrop-blur-lg bg-white/90 fixed bottom-0 flex gap-5 p-2 mx-auto left-1/2 -translate-x-1/2">
        {images.map((image, index) => (
          <Link href={image.link} className=" rounded bg-white shadow p-1">
            {" "}
            <Image
              className="w-20"
              src={image.img}
              width={500}
              height={500}
              alt="Cruise"
              priority={true}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bar;
