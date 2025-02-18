import React from "react";
import Image from "next/image";
import { berkshire } from "@/app/fonts";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineShareLocation } from "react-icons/md";
import Timer from "./Timer";
import Maps from "./Maps";
import TopLeft from "./ornaments/TopLeft";
import TopRight from "./ornaments/TopRight";
import BtmLeft from "./ornaments/BtmLeft";
import BtmRight from "./ornaments/BtmRight";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS
import Top from "./ornaments/Top";
import ImageBottom from "./ornaments/imageBottom";

const SaveTheDate = () => {
  useEffect(() => {
    AOS.init({
      /* opsi konfigurasi AOS */
    });
  }, []);
  const contents = [
    {
      title: "Malam Pengajian",

      day: "Minggu, 23 Februari, 2025",
      time: "Ba'da Isya",
      alamat: "Habib Abdillah Bin Al Jilani",
    },
    {
      title: "Resepsi",
      day: "Senin, 24 Februari, 2025",
      time: "at 09:00 WIB - Selesai",
      alamat: "Jl. Slamet Riyadi, Kebonsayur - RT. 05/05",
    },
  ];
  return (
    <div id="date">
      <div className="flex justify-center">
        <div className="bg-[url('/images/bg3.webp')] bg-cover relative bg-center bg-opacity-20 max-w-sm py-28 w-full flex flex-col justify-center items-center overflow-hidden px-8">
          <h1
            data-aos=""
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-2xl mt-5 text-slate-50 mb-2"
          >
            Waktu & Tempat Acara
          </h1>
          <div className="w-full backdrop-filter backdrop-blur-lg bg-white/90 bg-center py-10 rounded-md shadow-md ">
            {contents.map((content, index) => (
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                key={index}
                className="z-50 flex flex-col justify-center items-center mb-5"
              >
                <h1
                  className={`${berkshire.className}  text-slate-700 text-2xl text-center mb-1`}
                >
                  {content.title}
                </h1>

                <Image
                  className="w-10 py-2"
                  src="/images/boy.webp"
                  width={500}
                  height={500}
                  alt="akad"
                  priority={true}
                />
                <div className="mt-4 flex flex-col justify-center items-center gap-1 ">
                  <h1 className=" text-center uppercase font-semibold  text-slate-600">
                    {content.day}
                  </h1>
                  <h1 className="text-center   text-slate-600 flex items-center justify-center ">
                    <span className="mr-1">
                      <IoTimeOutline />
                    </span>
                    {content.time}
                  </h1>
                  <h1 className="text-center    text-slate-600  flex items-start">
                    {content.alamat}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <Maps />
          </div>
          <Top />
          <ImageBottom />
        </div>
      </div>
    </div>
  );
};

export default SaveTheDate;
