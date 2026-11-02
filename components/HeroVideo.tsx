"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    video.playsInline = true;

    const play = () => {
      if (!video.paused && video.readyState >= 2) return;
      const attempt = video.play();
      if (attempt) attempt.catch(() => undefined);
    };

    play();
    video.addEventListener("canplay", play);
    video.addEventListener("loadeddata", play);

    const onVisible = () => {
      if (document.visibilityState === "visible") play();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      video.removeEventListener("canplay", play);
      video.removeEventListener("loadeddata", play);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/hero-poster.jpg"
      disablePictureInPicture
      aria-hidden="true"
    >
      <source src="/hero.mp4?v=2" type="video/mp4" />
    </video>
  );
}
