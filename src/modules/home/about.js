import React from 'react'
import { profile } from '../../assets/images/images'

export default function About() {
  return (
    <section id="about" className='grid grid-cols-2 gap-[80px] '>
      <div className="flex justify-end py-[70px]">
        <div className="max-w-[370px]">
          <div className="h-[2px] w-[40px] bg-black mb-[25px] "></div>
          <h2 className='mb-[50px] text-[48px] font-montserrat font-black tracking-wider leading-snug max-w-[200px] '>ABOUT ME</h2>
          <p className='mb-[25px] text-[16px] font-roboto font-light tracking-wider leading-7'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. </p>
          <p className='mb-[65px] text-[16px] font-roboto font-light tracking-wider leading-7'>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.</p>
          <div className="flex gap-[20px]">
            <button
              className="font-roboto text-[16px] font-light py-[8px] px-[22px] bg-black text-white border-[2px] border-transparent hover:bg-transparent hover:text-black hover:border-black transition duration-300 ease-in-out"
              type="button">
              Read More
            </button>
            <button
              className="font-roboto text-[16px] font-light py-[8px] px-[22px] bg-white text-black border-[2px] border-black hover:bg-black hover:text-white transition duration-300 ease-in-out"
              type="button">
              Free Consultation
            </button>
          </div>
        </div>
      </div>
      <img className="w-full h-full object-cover object-left " src={profile} alt="profile" />
    </section>
  )
}
