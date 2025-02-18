import React from "react";
import { berkshire } from "@/app/fonts";
import Image from "next/image";
import { useState, useEffect } from "react";
import Timer from "./Timer";
import TopLeft from "@/components/ornaments/TopLeft";
import TopRight from "./ornaments/TopRight";
import BtmLeft from "./ornaments/BtmLeft";
import BtmRight from "./ornaments/BtmRight";

import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS
import ImageBottom from "./ornaments/imageBottom";

const Main = () => {
  useEffect(() => {
    AOS.init({
      /* opsi konfigurasi AOS */
    });
  }, []);
  return (
    <div id="main" className="flex justify-center">
      <div
        className="bg-[url('/images/oke4.webp')] bg-cover relative bg-center bg-opacity-20 max-w-sm py-10 w-full flex justify-center items-start overflow-hidden h-[40rem]"
        id="main-section"
      >
        <div>
          <h1
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={`${berkshire.className} text-slate-50 text-xl text-center mb-2`}
          >
            Walimatul Khitan
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={`${berkshire.className} text-3xl text-slate-50 text-center mb-2`}
          >
            Arsyad Haafizh Virendra
          </h2>
          {/* <Timer /> */}
        </div>
        {/* <TopLeft />
        <TopRight />
        <BtmLeft />
        <BtmRight /> */}
        <ImageBottom />
      </div>
    </div>
  );
};

export default Main;
