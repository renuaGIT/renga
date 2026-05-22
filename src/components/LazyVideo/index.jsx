'use client';

const LazyVideo = ({ src, poster, threshold = 0.05, aspectRatio = "16/9", ...props }) => {
  return (
    <div >
      <video
        src={src}
        poster={poster}
        muted
        loop
        autoPlay
        playsInline
        preload="none"
        {...props}
      />
    </div>
  );
};

export default LazyVideo;
