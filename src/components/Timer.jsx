import React from "react";
import { berkshire } from "@/app/fonts";
import Image from "next/image";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS

const Timer = () => {
  useEffect(() => {
    AOS.init({
      /* opsi konfigurasi AOS */
    });
  }, []);
  // Inisialisasi tanggal target dengan hanya mengatur tanggal
  const targetDate = new Date("2025-02-24");
  targetDate.setHours(0, 0, 0, 0); // Jam, menit, dan detik diatur menjadi 0

  // Inisialisasi state untuk waktu
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Mengupdate waktu setiap detik
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeRemaining = targetDate - currentDate;

      // Perhitungan waktu baru
      const newCountdown = {
        days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000),
      };

      setCountdown(newCountdown);

      // Hentikan interval jika waktu telah habis
      if (timeRemaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    // Membersihkan interval pada unmount komponen
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      data-aos=""
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="max-w-sm mt-5 flex justify-evenly gap-3 "
    >
      <div className="bg-indigo-400 w-16 h-16 shadow rounded flex justify-center items-center flex-col">
        <h1 className="text-slate-50 text-center">{countdown.days}</h1>
        <h1 className="text-slate-50 text-[0.5rem] text-center  uppercase">
          Days
        </h1>
      </div>
      <div className="bg-indigo-400 w-16 h-16 shadow rounded flex justify-center items-center flex-col">
        <h1 className="text-slate-50 text-center">{countdown.hours}</h1>
        <h1 className="text-slate-50 text-[0.5rem] text-center  uppercase">
          hours
        </h1>
      </div>
      <div className="bg-indigo-400 w-16 h-16 shadow rounded flex justify-center items-center flex-col">
        <h1 className="text-slate-50 text-center">{countdown.minutes}</h1>
        <h1 className="text-slate-50 text-[0.5rem] text-center  uppercase">
          Minutes
        </h1>
      </div>
      <div className="bg-indigo-400 w-16 h-16 shadow rounded flex justify-center items-center flex-col">
        <h1 className="text-slate-50 text-center">{countdown.seconds}</h1>
        <h1 className="text-slate-50 text-[0.5rem] text-center  uppercase">
          seconds
        </h1>
      </div>
    </div>
  );
};

export default Timer;
