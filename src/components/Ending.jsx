import React, { useEffect } from "react";
import BackgroundImage from "./BackgroundImage";
import { berkshire } from "@/app/fonts";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS

const Ending = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="flex justify-center relative" id="ending">
      <BackgroundImage bgImage="/images/oke1.webp">
        {/* Overlay hitam untuk meningkatkan keterbacaan teks */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Konten utama yang ada di atas overlay */}
        <div className="relative z-10 flex flex-col items-center text-white text-center">
          <h1 className={`${berkshire.className} text-3xl mb-4`}>
            Kirim Angpao Online
          </h1>

          <div className="relative max-w-xs mx-auto">
            <Image
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="max-w-xs"
              src="/images/bca.jpg"
              width={500}
              height={500}
              alt="BCA"
            />

            <div className="w-full backdrop-filter backdrop-blur-sm bg-white/50 bg-center p-5 mt-3 flex justify-between gap-3 absolute -top-3 inset-y-0">
              <div>
                <Image
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="w-12 mt-4"
                  src="/images/pin.png"
                  width={500}
                  height={500}
                  alt="Pin"
                />
                <div className="mt-16">
                  <h1 className="text-lg font-bold text-gray-900">
                    Wawan Ruswanto
                  </h1>
                  <h1 className="text-lg font-bold text-gray-900">
                    0961110822
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="max-w-xs mt-10 xl:w-[30rem] animate-wiggle animate-infinite animate-duration-[7000ms] animate-delay-1000 animate-ease-in animate-reverse animate-fill-both mb-7 mx-auto"
              src="/images/oke4.webp"
              width={500}
              height={500}
              alt="Cruise"
              priority={true}
            />
          </div>

          <p data-aos="fade-up" className="max-w-sm text-white">
            Doa restu Bapak/Ibu sekalian merupakan karunia yang sangat berarti
            bagi kami.
          </p>

          <h1 className={` mt-3 text-white mb-4`}>
            Bpk. Wawan Ruswanto & Ibu Dwi Rahmatika
          </h1>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Ending;
