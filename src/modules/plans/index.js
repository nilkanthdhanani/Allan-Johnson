import React from 'react';

const planDetails = [
  {
    name: 'Discovery',
    price: 50,
    features: ['Coaching cycle designed around your objectives', 'Valid for 3 months'],
    bgColor: 'bg-whiteLight',
  },
  {
    name: 'Development',
    price: 100,
    features: ['How to clear obstacles and take action', 'Valid for 6 months'],
    bgColor: 'bg-white',
  },
  {
    name: 'Direction',
    price: 50,
    features: ['A full program to reshape your being and doing', 'Valid for 12 months'],
    bgColor: 'bg-whiteLight',
  },
];

const additionalFeatures = [
  ['1 Goal setting consultation', '3 Individual sessions', 'Online resources'],
  ['1 Monthly goal setting meeting', 'Unlimited individual sessions', 'Online resources', 'Phone support', 'Weekly newsletter'],
  ['1 Monthly goal setting meeting', '4 Individual sessions', 'Online resources', '1 Guest pass', 'Phone support', 'Weekly newsletter', 'Priority support'],
];

const PlanCard = ({ name, price, features, bgColor }) => (
  <div className={`p-[30px] border-black border-[1px] text-center ${bgColor} flex flex-col justify-between gap-[30px] items-center`}>
    <div>
      <span className='block text-[20px] font-roboto font-medium'>{name}</span>
      <h3 className='mt-[12px] inline-block mb-[15px] text-[70px] font-montserrat relative'>
        <sup className='absolute top-[10px] left-[-15px] text-[18px]'>$</sup>{price}
      </h3>
      {features.map((feature, idx) => (
        <p key={idx} className='mb-[10px] text-[14px] font-roboto font-light tracking-wider'>{feature}</p>
      ))}
    </div>
    <button className="w-full font-roboto text-[16px] p-[15px] bg-black text-white hover:bg-transparent hover:text-black border-[2px] border-black transition duration-300">
      Select
    </button>
  </div>
);

const AdditionalCard = ({ features, bgColor }) => (
  <div className={`p-[30px] border-black border-[1px] ${bgColor}`}>
    {features.map((feature, idx) => (
      <div key={idx} className="flex gap-[10px] mb-[15px] ">
        <svg role="img" width="21" height="21" fill={bgColor === 'bg-whiteLight' ? '#000' : '#317f81'} viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M10.785 14.961L8 12.176L8.707 11.469L10.785 13.547L15.293 9.039L16 9.746L10.785 14.961ZM12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20C16.419 20 20 16.418 20 12C20 7.582 16.419 4 12 4Z" />
        </svg>
        <p className='text-[14px] font-roboto font-light tracking-widest'>{feature}</p>
      </div>
    ))}
  </div>
);

export default function Plans() {
  return (
    <section className="py-[60px] w-full bg-hero-pattern bg-cover bg-fixed bg-center">
      <div className="container">
        <div className="mb-[50px] text-center">
          <h2 className='text-[48px] font-montserrat font-extrabold tracking-wider'>CHOOSE THE PLAN FOR YOU</h2>
          <p className='text-[16px] font-roboto font-light tracking-widest'>I offer coaching, consulting, and support for your personal and professional development.</p>
        </div>
        <div className="grid grid-cols-3 gap-x-[40px]">
          {planDetails.map((plan, idx) => (
            <PlanCard key={idx} {...plan} />
          ))}
          {additionalFeatures.map((features, idx) => (
            <AdditionalCard key={idx} features={features} bgColor={idx % 2 === 0 ? 'bg-white' : 'bg-whiteLight'} />
          ))}
        </div>
      </div>
    </section>
  );
}
