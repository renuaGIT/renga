'use client';
import { useEffect, useRef } from 'react';

const LazyVideo = ({ src, poster, className = '', }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      if (video.paused) video.play().catch(() => {});
    };

    video.addEventListener('canplay', tryPlay);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tryPlay();
        } else {
          video.pause();
        }
      },
      { rootMargin: '300px', threshold: 0 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener('canplay', tryPlay);
    };
  }, []);

  if (!src) {
    return (
      <img
        src={poster}
        alt=""
        className={className}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={className}
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
};

export default LazyVideo;
