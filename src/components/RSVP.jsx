import React from "react";
import { berkshire } from "@/app/fonts";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoTimeOutline } from "react-icons/io5";
import TopLeft from "./ornaments/TopLeft";
import TopRight from "./ornaments/TopRight";
import BtmLeft from "./ornaments/BtmLeft";
import BtmRight from "./ornaments/BtmRight";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS

const RSVP = () => {
  useEffect(() => {
    AOS.init({
      /* opsi konfigurasi AOS */
    });
  }, []);
  const texts = [
    {
      message: " Semoga Menjadi Keluarga sakinah mawadah warahmah",
      name: "Raisa",
    },
    {
      message: " Maaf tidak bisa datang, semoga lancar semuanya sampai hari H",
      name: "Adrian",
    },
    {
      message: "Selamat guyss, semoga dapat hadir yaa di acara pernikahannya",
      name: "Dimas",
    },
  ];
  return (
    <div id="rsvp">
      <div className="flex justify-center  mx-auto">
        <div className="bg-[url('/images/oke1.webp')] bg-cover relative bg-center bg-opacity-20 max-w-sm py-28 w-full flex flex-col justify-center items-center overflow-hidden px-8">
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="w-full backdrop-filter backdrop-blur-lg bg-white/50 bg-center p-5  mt-3 "
          >
            <h1
              className={`${berkshire.className} xl:text-xl text-slate-700 text-xl text-center mb-5`}
            >
              Konfirmasi Kehadiran
            </h1>
            <div className="flex flex-col gap-1">
              <label className="text-slate-800" htmlFor="nama">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                value=""
                className="h-9 p-3 shadow rounded"
                placeholder="Your Name ...."
              />
            </div>
            <div className="flex flex-col gap-1 mt-5">
              <label className="text-slate-800" htmlFor="nama">
                Ucapan dan Do'a
              </label>
              <textarea
                rows={5}
                type="text"
                id="nama"
                value=""
                className="rounded shadow p-3"
              />
            </div>
            <div className="flex flex-col gap-1 mt-5">
              <label className="text-slate-800" htmlFor="nama">
                Kehadiran
              </label>
              <select className="h-9 p-2" name="" id="">
                <option value="hadir">Hadir</option>
                <option value="hadir">Tidak Hadir</option>
              </select>
            </div>
            <div className="flex justify-start mt-5">
              <button className="px-5 py-1 bg-purple-500 rounded shadow text-slate-100">
                Submit
              </button>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="w-full backdrop-filter backdrop-blur-lg bg-white/50 bg-center p-5 mt-3 flex flex-col gap-3 h-96 overflow-scroll"
          >
            <h1
              className={`${berkshire.className} xl:text-xl text-slate-700 text-xl text-center `}
            >
              Ucapan Teman & Kerabat
            </h1>
            {texts.map((text, index) => (
              <div key={index} className="bg-white p-3 rounded">
                <h1 className="text-slate-700">{text.message}</h1>
                <p className="text-xs text-slate-500 mt-1">{text.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
