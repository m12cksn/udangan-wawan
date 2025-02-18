import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS

const imageGallery = () => {
  useEffect(() => {
    AOS.init({
      /* opsi konfigurasi AOS */
    });
  }, []);
  const images = [
    {
      img: "/images/oke1.webp",
    },
    {
      img: "/images/oke2.webp",
    },
    {
      img: "/images/oke4.webp",
    },
    {
      img: "/images/oke5.webp",
    },

    {
      img: "/images/oke7.webp",
    },
    {
      img: "/images/oke8.webp",
    },
  ];
  return (
    <div className="w-full grid grid-cols-2 gap-2">
      {images.map((image, index) => (
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          key={index}
          className="max-w-md hover:-translate-y-1 ease-in-out transition-all duration-300"
        >
          <Image
            className="w-60 h-52 object-cover shadow rounded "
            src={image.img}
            width={500}
            height={500}
            alt="Cruise"
            priority={true}
          />
        </div>
      ))}
    </div>
  );
};

export default imageGallery;
