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
    <section className="relative h-[100vh] max-h-[800px] w-full overflow-hidden max-sm:max-h-[700px]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ transform: `translateY(${backgroundPositionY})` }}
        src={video}
        autoPlay
        loop
        muted
        playsInline />
      <div className="relative my-[74px] flex items-center flex-col text-center">
        <span className="font-roboto text-[17px] tracking-[4px] max-md:text-[16px] max-md:tracking-[2px] max-sm:text-[14px] max-sm:tracking-[1px]">AMBITION IS THE FIRST STEP TOWARDS</span>
        <h1 className="font-montserrat text-[110px] font-black leading-[130px] tracking-[25px] max-md:text-[70px] max-md:leading-[80px] max-md:tracking-[15px] max-sm:text-[42px] max-sm:leading-[60px] max-sm:tracking-[10px] ">SUCCESS</h1>
        <p className="font-montserrat text-[20px] font-light tracking-[4px] mb-[30px] max-md:text-[18px] max-sm:text-[14px] max-md:tracking-[2px] max-sm:tracking-[1px]">Now Available for Online Coaching</p>
        <button
          className="font-roboto text-[16px] font-light py-[8px] px-[22px] bg-black text-white border-[2px] border-transparent hover:bg-transparent hover:text-black hover:border-black transition duration-300 ease-in-out"
          type="button">
          Book Now
        </button>
      </div>
    </section>
  );
}
