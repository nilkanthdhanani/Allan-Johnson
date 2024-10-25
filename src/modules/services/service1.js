import React from 'react'

const serviceDetail = [
  {
    title: 'Free Consultation',
    desc: 'Initial session to assess goals and explore personalized coaching strategies.',
    time: '45 min',
    money: '',
  },
  {
    title: 'Online Coaching',
    desc: 'Virtual one-on-one coaching to address specific personal or professional challenges.',
    time: '1 hr',
    money: '$70',
  },
  {
    title: 'Self-Improvement Workshop',
    desc: 'Interactive workshop focused on self-growth, confidence, and personal development.',
    time: '1 hr',
    money: '$90',
  },
  {
    title: 'Corporate Life',
    desc: 'Tailored coaching for improving work-life balance and career success in corporate settings.',
    time: '1 hr',
    money: '$70',
  },
  {
    title: 'Career Coaching',
    desc: 'Personalized career planning and guidance to achieve long-term professional goals.',
    time: '1 hr',
    money: '$80',
  },
  {
    title: 'Group Coaching',
    desc: 'Collaborative coaching sessions to learn and grow in a supportive group setting.',
    time: '1 hr',
    money: '$90',
  },
]

export default function Service1() {
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
