import React from 'react'
import { blogImg3, blogImg4 } from '../../assets/images/images';
import Admin from '../../assets/images/svg/admin';
import Batch from '../../assets/images/svg/batch';
import Heart from '../../assets/images/svg/heart';

export default function Blog2() {
    return (
        <>
            <div className="grid grid-cols-2 items-center mb-[20px] border-[1px] border-border1 max-md:grid-cols-1">
                <img className='w-full h-full max-h-[360px] object-cover' src={blogImg3} alt="blogImg1" />
                <div className="bg-white min-h-[360px] py-[24px] px-[40px] flex flex-col gap-[20px] justify-between cursor-pointer group max-md:p-[20px]">
                    <div>
                        <div className="flex justify-between mb-[20px]">
                            <div className="flex gap-[10px] items-center">
                                <Admin />
                                <div>
                                    <span className='text-[14px] block font-roboto font-light leading-[20px]'>Admin</span>
                                    <span className='text-[14px] font-roboto font-light flex leading-[20px] items-center gap-[5px]'>Jun 3, 2023 <div className="p-[1px] bg-black inline-block rounded-[50%]"></div> 1 min</span>
                                </div>
                            </div>
                            <div><Batch /></div>
                        </div>
                        <h3 className='mb-[15px] text-[28px] font-montserrat font-medium leading-[30px] group-hover:text-green transition duration-300'>Time for a change</h3>
                        <p className='text-[16px] font-roboto font-light tracking-[1px] leading-[24px] my-[12px] group-hover:text-green transition duration-300'>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                    </div>
                    <div className="flex justify-between items-center pt-[15px] border-t-[1px] border-border1">
                        <div className="flex items-center gap-[10px]">
                            <span className='text-[14px] block font-roboto font-light'>11 views</span>
                            <span className='text-[14px] block font-roboto font-light'>0 comments</span>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <span className='text-[14px] block font-roboto font-light'></span>
                            <Heart />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 items-center border-[1px] border-border1 max-md:grid-cols-1">
                <div className="bg-white min-h-[360px] py-[24px] px-[40px] flex flex-col gap-[20px] justify-between cursor-pointer group max-md:p-[20px] max-md:order-2">
                    <div>
                        <div className="flex justify-between mb-[20px]">
                            <div className="flex gap-[10px] items-center">
                                <Admin />
                                <div>
                                    <span className='text-[14px] block font-roboto font-light leading-[20px]'>Admin</span>
                                    <span className='text-[14px] font-roboto font-light flex leading-[20px] items-center gap-[5px]'>Jun 2, 2023 <div className="p-[1px] bg-black inline-block rounded-[50%]"></div>2 min</span>
                                </div>
                            </div>
                            <div><Batch /></div>
                        </div>
                        <h3 className='mb-[15px] text-[28px] font-montserrat font-medium leading-[30px] group-hover:text-green transition duration-300'>Getting a grasp on adventure</h3>
                        <p className='text-[16px] font-roboto font-light tracking-[1px] leading-[24px] my-[12px] group-hover:text-green transition duration-300'>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                    </div>
                    <div className="flex justify-between items-center pt-[15px] border-t-[1px] border-border1">
                        <div className="flex items-center gap-[10px]">
                            <span className='text-[14px] block font-roboto font-light'>5 views</span>
                            <span className='text-[14px] block font-roboto font-light'>0 comments</span>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <span className='text-[14px] block font-roboto font-light'>1</span>
                            <Heart />
                        </div>
                    </div>
                </div>
                <img className='w-full h-full max-h-[360px] object-cover' src={blogImg4} alt="blogImg2" />
            </div>
        </>
    )
}
