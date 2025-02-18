import React from "react";
import { berkshire } from "@/app/fonts";
import Image from "next/image";

import { useState, useEffect } from "react";
import BtmLeft from "./ornaments/BtmLeft";
import BtmRight from "./ornaments/BtmRight";
import TopCenter from "@/components/ornaments/TopCenter";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS
import Top from "./ornaments/Top";
import ImageBottom from "./ornaments/imageBottom";

const Section2 = () => {
  useEffect(() => {
    AOS.init({
      /* opsi konfigurasi AOS */
    });
  }, []);
  return (
    <div id="section2" className="flex justify-center">
      <div
        className="bg-[url('/images/bg3.webp')] bg-cover relative bg-center bg-opacity-20 max-w-sm py-28 w-full flex justify-center items-center overflow-hidden "
        id="opening-section"
      >
        <div className="flex flex-col items-center">
          <p
            data-aos=""
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-center px-5 text-sm leading-normal text-slate-50 mb-5"
          >
            Dengan memohon Rahmat dan Ridho Allah SWT kami mengundang
            Bapak/Ibu/Saudara/i untuk menghadiri Khitanan putra kami
          </p>
          <h1
            data-aos=""
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={`${berkshire.className} text-[1.7rem] mb-2`}
          >
            Arsyad Haafizh Virendra
          </h1>
          <p
            data-aos=""
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-center text-[0.7rem] px-5 leading-normal text-slate-50 mb-7"
          >
            Putra pertama Bpk. AWawan ruswanto & Ibu Dwi Rahmatika
          </p>
          <Image
            data-aos=""
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="w-80  rounded-full mb-7"
            src="/images/oke6.webp"
            width={500}
            height={500}
            alt="Cruise"
            priority={true}
          />
        </div>

        {/* <BtmLeft />
        <BtmRight /> */}
        <Top />
        <ImageBottom />
      </div>
    </div>
  );
};

export default Section2;
