import React, { useEffect, useRef, useState } from "react";

function VideoComponent() {
  const videoRef = useRef(null);
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

    // Agregar un event listener para el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpieza: eliminar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVideoVisible]);

  return (
    <section>
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
