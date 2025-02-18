import React, { useEffect, useState, useRef } from "react";
import { Howl } from "howler";
import Pause from "@/components/utils/PauseButton";
import Play from "@/components/utils/PlayButton";
import PauseButton from "@/components/utils/PauseButton";
import PlayButton from "@/components/utils/PlayButton";

const AudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    if (audioSrc && !soundRef.current) {
      soundRef.current = new Howl({
        src: [audioSrc],
        loop: true,
        volume: 0.5,
        onplay: () => setIsPlaying(true),
        onpause: () => setIsPlaying(false),
        onstop: () => setIsPlaying(false),
        onend: () => setIsPlaying(false),
      });
      soundRef.current.play();
    }
  }, [audioSrc]);

  const togglePlay = () => {
    if (soundRef.current) {
      if (isPlaying) {
        soundRef.current.pause();
      } else {
        soundRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="w-16 z-50 fixed top-5    mx-auto left-1/2 -translate-x-1/2">
      <button className="w-16 drop-shadow-md " onClick={togglePlay}>
        {isPlaying ? <PauseButton /> : <PlayButton />}
      </button>
    </div>
  );
};

export default AudioPlayer;
