import React, { useEffect, useState } from 'react';

const videos = [
    '/videos/fashion2.mp4',
  '/videos/fashion1.mp4',
  '/videos/fashion3.mp4',
];

const BackgroundVideoSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % videos.length);
    }, 10000); // change video every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] rounded-xl overflow-hidden">
      {videos.map((video, index) => (
        <video
          key={index}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
        <h1 className="text-white text-4xl font-bold text-center px-4">
          Discover the Latest Fashion in Clothes, Shoes & Bags
        </h1>
      </div>
    </div>
  );
};

export default BackgroundVideoSlider;
