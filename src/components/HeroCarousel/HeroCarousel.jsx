import React, { useState, useEffect } from "react";

const HeroCarousel = () => {
  const slides = [
    "/image1.webp",
    "/image2.webp",
    "/image3.webp",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-lg">
      {slides.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay with button */}
          <div className="absolute inset-0 flex justify-center items-end pb-12 bg-black/20">
            <button className="bg-green-700 text-white text-lg px-6 py-3 rounded-md hover:bg-green-800 transition">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
