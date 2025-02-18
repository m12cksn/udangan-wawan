import React from "react";
import { berkshire } from "@/app/fonts";
import { useState, useEffect } from "react";
import Image from "next/image";
import TopLeft from "./ornaments/TopLeft";
import TopRight from "./ornaments/TopRight";
import BtmLeft from "./ornaments/BtmLeft";
import BtmRight from "./ornaments/BtmRight";
import Top from "./ornaments/Top";
import ImageBottom from "./ornaments/imageBottom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS
import Timer from "./Timer";

const Mempelai = () => {
  useEffect(() => {
    AOS.init({
      /* opsi konfigurasi AOS */
    });
  }, []);

  return (
    <div className="flex justify-center">
      <div
        className="bg-[url('/images/oke5.webp')] bg-cover relative bg-center bg-opacity-20 max-w-sm py-28 w-full flex justify-center items-center overflow-hidden "
        id="opening-section"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col items-center z-10">
          <h1
            data-aos=""
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={`${berkshire.className} text-slate-50 text-xl text-center mb-3`}
          >
            Hitung Mundur
          </h1>
          <h1
            data-aos=""
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={`${berkshire.className} text-[#DFC24E] text-4xl text-center mb-7`}
          >
            Menuju Acara
          </h1>

          <Timer />
          <h1
            data-aos=""
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={`max-w-sm px-4 line py-10 text-slate-50 text-xs text-center mb-7 leading-normal`}
          >
            "Peristiwa penting dalam perjalanan hidup lelaki muslim adalah
            menjelang akil baligh, saat manis dalam kenangan sejarah panjang
            seorang muslim adalah untuk pertama dan cuma sekali ketika ia
            dikhitan, Ya Allah perkenankan kami mengkhitankan putra kami"
          </h1>
        </div>
        <Top />
        <ImageBottom />
      </div>
    </div>
  );
};

export default Mempelai;
