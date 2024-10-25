import React from 'react';
import { NavLink } from 'react-router-dom';
import { eyeIcon, mailIcon, personIcon, phoneIcon } from '../../assets/images/images';

export default function SignUp() {
    return (
        <section className='w-full'>
            <div className="w-full h-screen bg-login-banner bg-cover bg-left-top">
                <div className="container">
                    <div className="scrollbar flex items-center h-screen">
                        <div className="w-1/2 max-h-[90vh] overflow-auto">
                            <div className="flex flex-col">
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
                                            <input type="tel" className='w-full border-[1px] border-border1 py-[14px] px-[60px] font-roboto text-[14px] font-light ' placeholder='00000 00000' required />
                                            <img src={phoneIcon} alt="phoneIcon" className='absolute right-[20px] top-[50%] translate-y-[-50%]' />
                                            <select className='absolute left-[20px] top-[50%] translate-y-[-50%] appearance-none bg-transparent text-select font-roboto text-[14px] font-light focus:outline-none '>
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
                                                <input type="checkbox" className='m-0 accent-black scale-150 mt-[5px]' />
                                                <p className="font-roboto font-light text-[16px] text-gray-500 ">
                                                    I Confirm that i have read and agree to the <NavLink className="text-black mx-1 hover:underline">terms of use</NavLink>and<NavLink className="text-black ml-1 hover:underline">privacy policy</NavLink>
                                                </p>
                                            </div>
                                            <div className="flex gap-[15px] items-start">
                                                <input type="checkbox" className='m-0 accent-black scale-150 mt-[5px]' />
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
                </div>
            </div>
        </section>
    )
}