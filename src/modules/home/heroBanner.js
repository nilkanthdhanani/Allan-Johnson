import React, { useState, useEffect } from 'react';
import video from '../../assets/videos/file.mp4';

export default function HeroBanner() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundPositionY = `${scrollY * 0.2}px`;

  return (
    <section className="relative h-[800px] w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ transform: `translateY(${backgroundPositionY})` }}
        src={video}
        autoPlay
        loop
        muted
        playsInline />
      <div className="relative my-[74px] flex items-center flex-col ">
        <span className="font-roboto text-[17px] tracking-[4px]">AMBITION IS THE FIRST STEP TOWARDS</span>
        <h1 className="font-montserrat text-[110px] font-black leading-[130px] tracking-[25px] ">SUCCESS</h1>
        <p className="font-montserrat text-[20px] font-light tracking-[4px] mb-[30px]">Now Available for Online Coaching</p>
        <button
          className="font-roboto text-[16px] font-light py-[8px] px-[22px] bg-black text-white border-[2px] border-transparent hover:bg-transparent hover:text-black hover:border-black transition duration-300 ease-in-out"
          type="button">
          Book Now
        </button>
      </div>
    </section>
  );
}
