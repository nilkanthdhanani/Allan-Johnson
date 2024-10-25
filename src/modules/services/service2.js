import React from 'react'

const serviceDetail = [
  {
    title: 'Mindfulness & Stress Management',
    desc: 'Techniques to reduce stress and enhance focus through mindfulness practices.',
    time: '1 hr',
    money: '$75',
  },
  {
    title: 'Leadership Development',
    desc: 'Empower yourself with leadership skills for career advancement and team management.',
    time: '1 hr',
    money: '$85',
  },
  {
    title: 'Work-Life Balance',
    desc: 'Coaching to help manage professional responsibilities while maintaining personal well-being.',
    time: '1 hr',
    money: '$75',
  },
]

export default function Service2() {
  return (
    <div className="grid grid-cols-3 gap-[32px]">
      {serviceDetail.map((item, index) => (
        <div className="p-[30px] text-center bg-white flex flex-col justify-between gap-[30px] items-center" key={index}>
          <div>
            <h3 className='text-[22px] font-montserrat font-semibold'>{item.title}</h3>
            <p className="text-[14px] font-roboto font-light tracking-[1.5px] leading-[24px] my-[12px]">{item.desc}</p>
            <span className="text-[14px] block font-roboto font-light tracking-[1.5px] leading-[32px]">{item.time}</span>
            <span className="text-[14px] block font-roboto font-light tracking-[1.5px] leading-[32px]">{item.money}</span>
          </div>
          <button
            className="font-roboto text-[16px] font-light py-[10px] px-[16px] bg-black text-white border-[2px] leading-[16px] border-transparent hover:bg-transparent hover:text-black hover:border-black transition duration-300 ease-in-out"
            type="button">
            Book Now
          </button>
        </div>
      ))}
    </div>
  )
}
