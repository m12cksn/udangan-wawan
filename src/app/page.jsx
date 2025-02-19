"use client";
import React, { useState } from "react";
import Opening from "@/components/Opening";

import Main from "@/components/Main";
import Section2 from "@/components/Section2";
import Mempelai from "@/components/Mempelai";
import SaveTheDate from "@/components/SaveTheDate";
import RSVP from "@/components/RSVP";
import Gallery from "@/components/Gallery";
import Ending from "@/components/Ending";
import Bar from "@/components/Bar";
import AudioPlayer from "@/components/utils/AudioPlayer";

export default function Home() {
  const [showOpening, setShowOpening] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleButtonClick = () => {
    setShowOpening(false);
    setIsMusicPlaying(true);
    // Lakukan efek scroll ke section 2
    const mainSection = document.getElementById("main-section");
    if (mainSection) {
      window.scrollTo({
        top: mainSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="">
      {isMusicPlaying && <AudioPlayer audioSrc="music/music.MP3" />}
      {showOpening && <Opening onButtonClick={handleButtonClick} />}
      {!showOpening && <Main />}
      {!showOpening && <Section2 />}
      {!showOpening && <Mempelai />}
      {!showOpening && <SaveTheDate />}
      {!showOpening && <RSVP />}
      {!showOpening && <Gallery />}
      {!showOpening && <Ending />}
      {!showOpening && <Bar />}
      {/* <Main />
    <Section2 /> */}
    </div>
  );
}
