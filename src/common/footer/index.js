import React from 'react';
import { facebook, instagram, twitter, youtube } from '../../assets/images/images';

export default function Footer() {
    return (
        <footer className="py-[60px] bg-footerBG" id='contact'>
            <div className="max-w-[980px] mx-auto px-[20px]">
                <div className="grid grid-cols-2 gap-[20px] max-sm:grid-cols-1 ">
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="h-[2px] w-[40px] bg-black mb-[15px]"></div>
                            <h2 className='mb-[30px] text-[42px] font-montserrat font-black tracking-wider'>CONTACT</h2>
                            <p className='text-[14px] font-roboto font-light tracking-wider leading-6'>500 Terry Francine Street,</p>
                            <p className='pb-[25px] text-[14px] font-roboto font-light tracking-wider leading-6'>San Francisco, CA 94158</p>
                            <p className='text-[14px] font-roboto font-light tracking-wider leading-6'>Tel: 123-456-7890</p>
                            <p className='pb-[25px] text-[14px] font-roboto font-light tracking-wider leading-6'>Fax: 123-456-7890</p>
                            <p className='pb-[25px] text-[14px] font-roboto font-light tracking-wider leading-6'>info@mysite.com</p>
                            <div className="flex gap-[20px] pb-[25px]">
                                <a href="https://www.facebook.com/" rel='noreferrer' target='_blank' >
                                    <img className='w-[25px]' src={facebook} alt="facebook" />
                                </a>
                                <a href="https://www.instagram.com/" rel='noreferrer' target='_blank' >
                                    <img className='w-[25px]' src={instagram} alt="instagram" />
                                </a>
                                <a href="https://x.com/" rel='noreferrer' target='_blank' >
                                    <img className='w-[25px]' src={twitter} alt="twitter" />
                                </a>
                                <a href="https://www.youtube.com/" rel='noreferrer' target='_blank' >
                                    <img className='w-[25px]' src={youtube} alt="youtube" />
                                </a>
                            </div>
                        </div>
                        <p className='max-w-[220px] mb-[20px] text-[14px] font-roboto font-light tracking-wider leading-6'>© 2035 by Personal Life Coach. Powered and secured by Wix</p>
                    </div>
                    <form className="">
                        <div className="grid grid-cols-2 gap-[20px] max-sm:block ">
                            <div className="mb-[15px]">
                                <label className="mb-[8px] block" htmlFor="first-name">First Name *</label>
                                <input className="w-full bg-transparent border-[2px] border-black px-[12px] py-[8px]" type="text" id="first-name" required />
                            </div>
                            <div className="mb-[15px]">
                                <label className="mb-[8px] block" htmlFor="last-name">Last Name *</label>
                                <input className="w-full bg-transparent border-[2px] border-black px-[12px] py-[8px]" type="text" id="last-name" required />
                            </div>
                        </div>
                        <div className="mb-[15px]">
                            <label className="mb-[8px] block" htmlFor="email">Email *</label>
                            <input className="w-full bg-transparent border-[2px] border-black px-[12px] py-[8px]" type="email" id="email" required />
                        </div>
                        <div className="mb-[15px]">
                            <label className="mb-[8px] block" htmlFor="subject">Subject</label>
                            <input className="w-full bg-transparent border-[2px] border-black px-[12px] py-[8px]" type="text" id="subject"  required/>
                        </div>
                        <div className="mb-[15px]">
                            <label className="mb-[8px] block" htmlFor="message">Message</label>
                            <textarea className="w-full bg-transparent border-[2px] border-black px-[12px] py-[8px] resize-none" type="text" id="message" rows={4} ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="font-roboto text-[16px] font-light py-[8px] px-[70px] bg-black text-white border-[2px] border-transparent hover:bg-transparent hover:text-black hover:border-black transition duration-300 ease-in-out"
                                type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    )
}
