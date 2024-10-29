import React from 'react';
import { NavLink } from 'react-router-dom';
import { eyeIcon, heroBanner, loginWave, mailIcon, personIcon, loginWaveM, phoneIcon } from '../../assets/images/images';

export default function SignUp() {
    return (
        <section>
            <div className="w-full h-screen grid grid-cols-2 max-md:grid-cols-1 max-md:h-auto ">
                <div className="hidden max-md:block bg-hero-banner w-full min-h-[500px] bg-fixed bg-bottom bg-cover"></div>
                <div className="scrollbar flex items-center h-screen relative max-md:h-auto max-md:py-[50px]">
                    <div className="absolute h-full w-full top-0 right-[-99%] max-md:right-0 max-md:top-[-99%] max-md:flex max-md:items-end">
                        <picture>
                            <source media="(max-width: 768px)" srcSet={loginWaveM} />
                            <img src={loginWave} alt="loginWave" className='h-full' />
                        </picture>
                    </div>
                    <div className="relative max-h-[90vh] w-full overflow-auto pl-[30px] max-md:px-[20px]">
                        <div className="max-w-[480px] ml-auto flex flex-col max-md:mx-auto">
                            <div className="self-center font-montserrat whitespace-nowrap">
                                <NavLink
                                    to="/"
                                    className="text-center text-[17px] block font-black tracking-[5px]">
                                    ALLAN JOHNSON
                                    <span className="block font-roboto text-[12px] pt-1 font-light tracking-[2px]">
                                        Personal Life Coach
                                    </span>
                                </NavLink>
                            </div>
                            <div className="mt-[40px]">
                                <form>
                                    <div className="mb-[16px] relative">
                                        <input type="text" className='w-full border-[1px] border-border1 py-[14px] pl-[20px] pr-[60px] font-roboto text-[14px] font-light ' placeholder='Name' required />
                                        <img src={personIcon} alt="personIcon" className='absolute right-[20px] top-[50%] translate-y-[-50%]' />
                                    </div>
                                    <div className="mb-[16px] relative">
                                        <input type="email" className='w-full border-[1px] border-border1 py-[14px] pl-[20px] pr-[60px] font-roboto text-[14px] font-light ' placeholder='Email ID' required />
                                        <img src={mailIcon} alt="mailIcon" className='absolute right-[20px] top-[50%] translate-y-[-50%]' />
                                    </div>
                                    <div className="mb-[16px] relative">
                                        <input type="tel" className='w-full border-[1px]    border-border1 py-[14px] px-[60px] font-roboto text-[14px] font-light ' placeholder='00000 00000' required />
                                        <img src={phoneIcon} alt="phoneIcon" className='absolute right-[20px] top-[50%] translate-y-[-50%]' />
                                        <select className='absolute left-[15px] p-[5px] top-[50%] translate-y-[-50%] appearance-none bg-transparent text-select font-roboto text-[14px] font-light focus:outline-none cursor-pointer' aria-label='select country code' >
                                            <option>+1</option>
                                            <option>+91</option>
                                            <option>+21</option>
                                            <option>+911</option>
                                            <option>+68</option>
                                        </select>
                                    </div>
                                    <div className="mb-[16px] relative">
                                        <input type="password" className='w-full border-[1px] border-border1 py-[14px] pl-[20px] pr-[60px] font-roboto text-[14px] font-light ' placeholder='Password' required />
                                        <img src={eyeIcon} alt="eyeIcon" className='absolute right-[20px] top-[50%] translate-y-[-50%]' />
                                    </div>
                                    <div className="relative">
                                        <input type="password" className='w-full border-[1px] border-border1 py-[14px] pl-[20px] pr-[60px] font-roboto text-[14px] font-light ' placeholder='Confirm Password' required />
                                        <img src={eyeIcon} alt="eyeIcon" className='absolute right-[20px] top-[50%] translate-y-[-50%]' />
                                    </div>

                                    <div className="mt-[15px] mb-[30px] ml-[5px]">
                                        <div className="mb-[10px] flex gap-[15px] items-start">
                                            <input type="checkbox" className='m-0 accent-black scale-150 mt-[5px]' aria-label='checkbox' required />
                                            <p className="font-roboto font-light text-[16px] text-gray-500 ">
                                                I Confirm that i have read and agree to the <NavLink className="text-black mx-1 hover:underline">terms of use</NavLink>and<NavLink className="text-black ml-1 hover:underline">privacy policy</NavLink>
                                            </p>
                                        </div>
                                        <div className="flex gap-[15px] items-start">
                                            <input type="checkbox" className='m-0 accent-black scale-150 mt-[5px]' aria-label='checkbox' required />
                                            <p className="font-roboto font-light text-[16px] text-gray-500 ">I agree to receive newsletter and product updates from MEmethod
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        className="w-full font-roboto text-[16px] font-light py-[8px] px-[70px] bg-black text-white border-[2px] border-transparent hover:bg-transparent hover:text-black hover:border-black transition duration-300 ease-in-out"
                                        type="submit">
                                        Sign Up
                                    </button>
                                    <div className="flex justify-center mt-[20px]">
                                        <p className="font-roboto font-light text-[16px] text-gray-500 ">
                                            Already have an account?
                                            <NavLink to={"/login"} className="text-black ml-1 hover:underline">Log In</NavLink>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={heroBanner} alt="loginBanner" className='w-full h-full object-cover max-md:hidden' />
            </div>
        </section>
    )
}