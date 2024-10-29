import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Help() {
  const services = [
    {
      title: "FREE CONSULTATION",
      description: "Use this area to describe one of your services.",
      details: ["45 min"]
    },
    {
      title: "ONLINE COACHING",
      description: "Use this area to describe one of your services.",
      details: ["1 hr", "$ 70"]
    },
    {
      title: "SELF-IMPROVEMENT WORKSHOP",
      description: "Use this area to describe one of your services.",
      details: ["Mon, Tue, Wed, Thu, Fri", "1 hr", "$ 90"]
    }
  ];

  return (
    <section className="py-[60px] w-full bg-hero-pattern bg-cover bg-fixed bg-center max-sm:py-[50px] ">
      <div className="container">
        <div className="h-[2px] w-[40px] bg-black mb-[25px] max-sm:mb-[15px] "></div>
        <h2 className='mb-[50px] text-[48px] font-montserrat font-extrabold tracking-wider leading-snug max-w-[400px] max-sm:text-[36px] max-sm:mb-[30px] max-sm:leading-[40px] '>HOW I CAN HELP YOU</h2>
        <div className="grid grid-cols-3 gap-[20px] max-lg:grid-cols-2 max-sm:grid-cols-1 ">
          {services.map((service, index) => (
            <div key={index} className="p-[25px] flex flex-col items-center justify-between border-black border-[5px] max-sm:p-[15px] ">
              <div className="mb-[20px] ">
                <h3 className="text-[22px] font-montserrat font-extrabold text-center tracking-widest leading-snug max-w-[400px]">{service.title}</h3>
                <p className='py-[20px] mb-[20px] text-center text-[14px] font-roboto font-light tracking-wider leading-6 border-black border-b-[2px] '>{service.description}</p>
                {service.details.map((detail, i) => (
                  <p key={i} className='text-center text-[14px] font-roboto font-light tracking-wider leading-[30px] '>{detail}</p>
                ))}
              </div>
              <button
                className="font-roboto text-[16px] font-light py-[8px] px-[25px] bg-black text-white border-[2px] border-transparent hover:bg-transparent hover:text-black hover:border-black transition duration-300 ease-in-out"
                type="button">
                Book It
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-[100px] mb-[70px] max-sm:mt-[50px] max-sm:mb-0 ">
          <NavLink to={"/services"}>
            <button
              className="font-roboto text-[16px] font-light py-[8px] px-[35px] bg-black text-white border-[2px] border-transparent hover:bg-transparent hover:text-black hover:border-black transition duration-300 ease-in-out"
              type="button">
              More Services
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  )
}
