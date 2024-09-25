import React from 'react';

export default function Help() {
  return (
    <section className="py-[60px] w-full bg-hero-pattern bg-cover bg-fixed bg-center">
      <div className="max-w-[980px] mx-auto px-[20px]">
        <div className="h-[2px] w-[40px] bg-black mb-[25px]"></div>
        <h2 className='mb-[50px] text-[48px] font-montserrat font-black tracking-wider leading-snug max-w-[400px] '>HOW I CAN HELP YOU</h2>
        <div className="grid grid-cols-3 gap-[20px]">
          <div className="p-[25px] flex flex-col items-center justify-between border-black border-[5px]">
            <div className="mb-[20px] ">
              <h3 className="text-[22px] font-montserrat font-extrabold text-center tracking-widest leading-snug max-w-[400px]">FREE CONSULTATION</h3>
              <p className='py-[20px] text-center text-[14px] font-roboto font-light tracking-wider leading-6 border-black border-b-[2px] '>Use this area to describe one of your services.</p>
              <p className='pt-[20px] text-center text-[14px] font-roboto font-light tracking-wider leading-[30px] '>45 min</p>
            </div>
            <button
              className="font-roboto text-[16px] font-light py-[8px] px-[25px] bg-black text-white border-[2px] border-transparent hover:bg-white hover:text-black hover:border-black transition duration-300 ease-in-out"
              type="button">
              Book It
            </button>
          </div>
          <div className="p-[25px] flex flex-col items-center justify-between border-black border-[5px]">
            <div className="mb-[20px] ">
              <h3 className="text-[22px] font-montserrat font-extrabold text-center tracking-widest leading-snug max-w-[400px]">ONLINE COACHING</h3>
              <p className='py-[20px] text-center text-[14px] font-roboto font-light tracking-wider leading-6 border-black border-b-[2px] '>Use this area to describe one of your services.</p>
              <p className='pt-[20px] text-center text-[14px] font-roboto font-light tracking-wider leading-[30px] '>1 hr</p>
              <p className='text-center text-[14px] font-roboto font-light tracking-wider leading-[30px] '>$ 70</p>
            </div>
            <button
              className="font-roboto text-[16px] font-light py-[8px] px-[25px] bg-black text-white border-[2px] border-transparent hover:bg-white hover:text-black hover:border-black transition duration-300 ease-in-out"
              type="button">
              Book It
            </button>
          </div>
          <div className="p-[25px] flex flex-col items-center justify-between border-black border-[5px]">
            <div className="mb-[20px] ">
              <h3 className="text-[22px] font-montserrat font-extrabold text-center tracking-widest leading-snug max-w-[400px]">SELF-IMPROVEMENT WORKSHOP</h3>
              <p className='py-[20px] text-center text-[14px] font-roboto font-light tracking-wider leading-6 border-black border-b-[2px] '>Use this area to describe one of your services.</p>
              <p className='pt-[20px] text-center text-[14px] font-roboto font-light tracking-wider leading-[30px] '>Mon, Tue, Wed, Thu, Fri</p>
              <p className='text-center text-[14px] font-roboto font-light tracking-wider leading-[30px] '>1 hr</p>
              <p className='text-center text-[14px] font-roboto font-light tracking-wider leading-[30px] '>$ 90</p>
            </div>
            <button
              className="font-roboto text-[16px] font-light py-[8px] px-[25px] bg-black text-white border-[2px] border-transparent hover:bg-white hover:text-black hover:border-black transition duration-300 ease-in-out"
              type="button">
              Book It
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-[100px] mb-[70px] ">
          <button
            className="font-roboto text-[16px] font-light py-[8px] px-[35px] bg-black text-white border-[2px] border-transparent hover:bg-white hover:text-black hover:border-black transition duration-300 ease-in-out"
            type="button">
            More Services
          </button>
        </div>
      </div>
    </section>
  )
}
