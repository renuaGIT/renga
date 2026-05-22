'use client';

const LazyVideo = ({ src, poster, ...props }) => {
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
