"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { berkshire } from "@/app/fonts";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS
import TopLeft from "./ornaments/TopLeft";
import TopRight from "./ornaments/TopRight";
import BtmLeft from "./ornaments/BtmLeft";
import BtmRight from "./ornaments/BtmRight";
import Top from "./ornaments/Top";
import ImageBottom from "./ornaments/imageBottom";
import Bottom from "./ornaments/Bottom";

// import { animate_pulse } from "tailwindcss-animated";

const Opening = ({ onButtonClick }) => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="flex justify-center">
      <div className="bg-[url('/images/bg3.webp')] bg-cover relative bg-center bg-opacity-20 max-w-sm py-40 w-full flex h-screen justify-center items-center overflow-hidden">
        <div className="bg-black opacity-50 backdrop-filter backdrop-blur-2xl h-screen w-full absolute"></div>
        <div>
          <div className="backdrop-filter backdrop-blur-lg bg-white/70 rounded-md  max-w-xs opacity-80 p-5">
            <h1
              className={`${berkshire.className}  text-slate-900 text-xl text-center mb-5`}
            >
              Walimatul Khitan
            </h1>
            <h2
              className={`${berkshire.className} text-2xl  text-slate-900 text-center mb-7`}
            >
              Arsyad Haafizh Virendra
            </h2>
            <Image
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="w-80 xl:w-[30rem] animate-wiggle animate-infinite animate-duration-[7000ms] animate-delay-1000 bg-cover object-cover h-72  animate-ease-in shadow-md animate-reverse animate-fill-both rounded-bl-3xl rounded-tr-3xl mb-5"
              src="/images/oke5.webp"
              width={500}
              height={500}
              alt="Cruise"
              priority={true}
            />
            <div className="w-full flex mb-3 justify-center">
              <button
                onClick={onButtonClick}
                className="bg-indigo-500 px-11 shadow mx-auto py-2 rounded text-white tracking-wider"
              >
                Buka Undangan{" "}
              </button>
            </div>
            <h1 className=" text-slate-900 mb-1 text-lg text-center ">
              Kepada
            </h1>
            <h1 className=" text-slate-900 mb-2 text-lg text-center ">
              Bapak / Ibu / Saudara / i
            </h1>
            <h1 className="text-slate-500  text-lg text-center ">di Tempat</h1>
          </div>
          <Top />
          {/* <ImageBottom /> */}
          {/* <Bottom /> */}
          {/* <TopLeft />
          <TopRight />
          <BtmLeft />
          <BtmRight /> */}
        </div>
      </div>
    </div>
  );
};

export default Opening;
