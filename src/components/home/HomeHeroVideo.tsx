import { useEffect, useRef } from 'react';

type HomeHeroVideoProps = {
  src: string;
  paused?: boolean;
};

export function HomeHeroVideo({ src, paused = false }: HomeHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (paused) {
      video.pause();
      return;
    }

    video.muted = true;
    void video.play().catch(() => {});
  }, [paused]);

  return (
    <div className="p6-home__hero" aria-hidden>
      <video
        ref={videoRef}
        className="p6-home__hero-video"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        draggable={false}
      />
      <div className="p6-home__hero-glow" />
      <div className="p6-home__hero-fade" />
    </div>
  );
}
