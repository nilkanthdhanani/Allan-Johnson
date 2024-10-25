import React from 'react';
import { NavLink } from 'react-router-dom';
import { eyeIcon, mailIcon } from '../../assets/images/images';

export default function Login() {
    return (
        <section className='w-full'>
            <div className="w-full h-screen bg-login-banner bg-cover bg-left-top">
                <div className="container">
                    <div className="scrollbar flex items-center h-screen">
                        <div className="w-1/2 max-h-[90vh] overflow-auto ">
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
                                            <input type="email" className='w-full border-[1px] border-border1 py-[14px] pl-[20px] pr-[60px] font-roboto text-[14px] font-light ' placeholder='Email ID' required />
                                            <img src={mailIcon} alt="mailIcon" className='absolute right-[20px] top-[50%] translate-y-[-50%]' />
                                        </div>
                                        <div className="relative">
                                            <input type="password" className='w-full border-[1px] border-border1 py-[14px] pl-[20px] pr-[60px] font-roboto text-[14px] font-light ' placeholder='Password' required />
                                            <img src={eyeIcon} alt="eyeIcon" className='absolute right-[20px] top-[50%] translate-y-[-50%]' />
                                        </div>
                                        <div className="flex justify-end mt-[10px] mb-[30px]">
                                            <NavLink className="font-roboto font-light text-[16px] hover:underline ">Forgot Password?</NavLink>
                                        </div>
                                        <button
                                            className="w-full font-roboto text-[16px] font-light py-[8px] px-[70px] bg-black text-white border-[2px] border-transparent hover:bg-transparent hover:text-black hover:border-black transition duration-300 ease-in-out"
                                            type="submit">
                                            Log In
                                        </button>
                                        <div className="flex justify-center mt-[20px]">
                                            <p className="font-roboto font-light text-[16px] text-gray-500 ">
                                                Don’t have an account?
                                                <NavLink to={"/signUp"} className="text-black ml-1 hover:underline">Sign Up</NavLink>
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