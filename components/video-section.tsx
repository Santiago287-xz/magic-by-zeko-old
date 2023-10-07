import React, { useEffect, useRef, useState } from "react";

function VideoComponent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const videoRect = videoRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (
          videoRect.top >= 0 &&
          videoRect.bottom <= windowHeight &&
          !isVideoVisible
        ) {
          setIsVideoVisible(true);
          videoRef.current.play();
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVideoVisible]);

  return (
    <section className="hidden md:block">
      <video
        ref={videoRef}
        className="w-full h-screen object-cover"
        disableRemotePlayback
        preload="metadata"
        loop
        autoPlay
        muted
      >
        <source
          src="https://prueba.santiagofama.repl.co/magic-video.mp4"
          type="video/webm"
        ></source>
      </video>
      {/* Más contenido de tu página */}
    </section>
  );
}

export default VideoComponent;
