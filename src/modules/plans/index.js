import React from 'react';

const planDetails = [
  {
    name: 'Discovery',
    price: 50,
    features: ['Coaching cycle designed around your objectives', 'Valid for 3 months'],
    additionalFeatures: ['1 Goal setting consultation', '3 Individual sessions', 'Online resources'],
  },
  {
    name: 'Development',
    price: 100,
    features: ['How to clear obstacles and take action', 'Valid for 6 months'],
    additionalFeatures: ['1 Monthly goal setting meeting', 'Unlimited individual sessions', 'Online resources', 'Phone support', 'Weekly newsletter'],
  },
  {
    name: 'Direction',
    price: 50,
    features: ['A full program to reshape your being and doing', 'Valid for 12 months'],
    additionalFeatures: ['1 Monthly goal setting meeting', '4 Individual sessions', 'Online resources', '1 Guest pass', 'Phone support', 'Weekly newsletter', 'Priority support'],
  },
];

export default function Plans() {
  return (
    <section className="py-[60px] w-full bg-hero-pattern bg-cover bg-fixed bg-center">
      <div className="container">
        <div className="mb-[50px] text-center max-sm:mb-[30px]">
          <h2 className='text-[48px] font-montserrat font-extrabold tracking-wider max-sm:text-[36px] max-sm:leading-[40px] '>CHOOSE THE PLAN FOR YOU</h2>
          <p className='text-[16px] font-roboto font-light tracking-widest'>I offer coaching, consulting, and support for your personal and professional development.</p>
        </div>
        <div className="grid grid-cols-3 gap-[40px] max-lg:grid-cols-2 max-md:grid-cols-1">
          {planDetails.map((plan, idx) => (
            <div key={idx} className='grid grid-rows-2 max-lg:grid-rows-1'>
              <div className={`p-[30px] border-black border-[1px] text-center ${idx === 1 ? 'bg-white' : 'bg-whiteLight'} flex flex-col justify-between gap-[30px] items-center`}>
                <div>
                  <span className='block text-[20px] font-roboto font-medium'>{plan.name}</span>
                  <h3 className='mt-[12px] inline-block mb-[15px] text-[70px] font-montserrat relative'>
                    <sup className='absolute top-[10px] left-[-15px] text-[18px]'>$</sup>{plan.price}
                  </h3>
                  {plan.features.map((feature, idx) => (
                    <p key={idx} className='mb-[10px] text-[14px] font-roboto font-light tracking-wider'>{feature}</p>
                  ))}
                </div>
                <button className="w-full font-roboto text-[16px] p-[15px] bg-black text-white hover:bg-transparent hover:text-black border-[2px] border-black transition duration-300">
                  Select
                </button>
              </div>

              <div className={`p-[30px] border-black border-[1px] ${idx === 1 ? 'bg-whiteLight' : 'bg-white'}`}>
                {plan.additionalFeatures.map((feature, idx) => (
                  <div className="flex gap-[10px] mb-[15px] ">
                    <svg role="img" width="21" height="21" fill="#317f81" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M10.785 14.961L8 12.176L8.707 11.469L10.785 13.547L15.293 9.039L16 9.746L10.785 14.961ZM12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20C16.419 20 20 16.418 20 12C20 7.582 16.419 4 12 4Z" />
                    </svg>
                    <p key={idx} className='text-[14px] font-roboto font-light tracking-widest'>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
