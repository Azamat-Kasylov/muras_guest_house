/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import { useState, useRef } from "react";

const Music: React.FC = () => {
  const [play, setPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const audioClick = () => {
    if (!audioRef.current) return;

    if (play) {
      audioRef.current.pause();
      setPlay(false);
    } else {
      audioRef.current.play();
      setPlay(true);
    }
  };

  return (
    <StyledMusic className="audio_btn-wrapper">
      <audio src="/komuz-leto.mp3" id="audio_tag" ref={audioRef}></audio>
      <img
        src="./komuz.png"
        alt="Play/Pause"
        onClick={audioClick}
        className={`audio_btn-image ${play ? "colorful " : ""}`}
      />
    </StyledMusic>
  );
};

const StyledMusic = styled.div`
  width: 80px;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-width: 60px;
    padding-top: 10px;
  }

  .audio_btn-image:hover {
    cursor: pointer;
  }

  .audio_btn-image.colorful {
    animation: colorCycle 2s linear infinite;
  }

  @keyframes colorCycle {
    0% {
      filter: hue-rotate(0deg);
    }
    50% {
      filter: hue-rotate(180deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

export default Music;
