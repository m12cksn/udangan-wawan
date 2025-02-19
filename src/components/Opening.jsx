"use client";
import React, { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation"; // Import untuk membaca URL params
import { berkshire } from "@/app/fonts";
import AOS from "aos";
import "aos/dist/aos.css";
import Top from "./ornaments/Top";

const Opening = ({ onButtonClick }) => {
  const searchParams = useSearchParams();
  const namaDariURL = searchParams.get("nama"); // Ambil parameter "nama" dari URL
  const [namaTamu, setNamaTamu] = useState("Bapak / Ibu / Saudara / i");

  useEffect(() => {
    AOS.init({});

    // Jika ada parameter "nama" di URL, gunakan sebagai nama tamu
    if (namaDariURL) {
      setNamaTamu(namaDariURL);
    }
  }, [namaDariURL]);

  return (
    <div className="flex justify-center">
      <div className="bg-[url('/images/bg3.webp')] bg-cover relative bg-center bg-opacity-20 max-w-sm py-40 w-full flex h-screen justify-center items-center overflow-hidden">
        <div className="bg-black opacity-50 backdrop-filter backdrop-blur-2xl h-screen w-full absolute"></div>
        <div>
          <div className="backdrop-filter backdrop-blur-lg bg-white/70 rounded-md max-w-xs opacity-80 p-5">
            <h1
              className={`${berkshire.className} text-slate-900 text-xl text-center mb-5`}
            >
              Walimatul Khitan
            </h1>
            <h2
              className={`${berkshire.className} text-2xl text-slate-900 text-center mb-7`}
            >
              Arsyad Haafizh Virendra
            </h2>
            <Image
              className="w-80 xl:w-[30rem] bg-cover object-cover h-72 shadow-md rounded-bl-3xl rounded-tr-3xl mb-5"
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
                Buka Undangan
              </button>
            </div>
            <h1 className="text-slate-900 mb-1 text-lg text-center">Kepada</h1>
            <h1 className="text-slate-900 mb-2  text-center">
              Bpk / Ibu / saudara / i
            </h1>
            <h1 className="text-slate-900 mb-2 text-lg text-center">
              {nama ? decodeURIComponent(nama) : ""}{" "}
              {/* Nama tamu akan berubah sesuai input dari URL */}
            </h1>
            <h1 className="text-slate-500 text-lg text-center">di Tempat</h1>
          </div>
          <Top />
        </div>
      </div>
    </div>
  );
};

export default Opening;
