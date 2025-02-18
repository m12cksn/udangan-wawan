import React from "react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS

const Maps = () => {
  useEffect(() => {
    AOS.init({
      /* opsi konfigurasi AOS */
    });
  }, []);
  return (
    <div
      data-aos=""
      data-aos-easing="linear"
      data-aos-duration="1500"
      className=" flex flex-col justify-center items-center shadow max-w-xs h-auto mt-7 bg-white/90 backdrop-blur rounded-md "
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d303.7167229341785!2d109.00313290062545!3d-7.740385457096492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sid!4v1739799654073!5m2!1sen!2sid"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-80 max-w-xs p-5"
      ></iframe>
    </div>
  );
};

export default Maps;
