import React from 'react'

const serviceDetail = [
  {
    title: 'Motivational Speaking',
    desc: 'Dynamic sessions to inspire confidence, personal growth, and positive thinking.',
    time: '1 hr',
    money: '$100',
  },
  {
    title: 'Financial Planning',
    desc: 'Coaching on managing personal finances and setting long-term financial goals.',
    time: '1 hr',
    money: '$80',
  },
  {
    title: 'Time Management',
    desc: 'Effective time management techniques to enhance productivity and work efficiency.',
    time: '1 hr',
    money: '$70',
  }
]

export default function Service3() {
  return (
    <div className="grid grid-cols-3 gap-[32px] max-lg:grid-cols-2 max-md:gap-[20px] max-sm:grid-cols-1 ">
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
