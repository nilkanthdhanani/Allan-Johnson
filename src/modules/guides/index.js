import React, { useState, useRef, useEffect } from 'react';
import Search from '../../assets/images/svg/search';
import UpDownArrow from '../../assets/images/svg/upDownArrow';
import { NavLink } from 'react-router-dom';
import GuidesTable from './guidesTable';

export default function Guides() {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMobileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="pt-[60px] pb-[100px] w-full bg-hero-pattern bg-cover bg-fixed bg-center">
      <div className="container">
        <div className='max-w-[650px] mb-[60px]'>
          <div className="h-[2px] w-[40px] bg-black mb-[25px] max-sm:mb-[15px]"></div>
          <h2 className='text-[48px] font-montserrat font-extrabold tracking-wider max-sm:text-[36px] max-sm:leading-[40px]'>GUIDES</h2>
          <p className='mt-[15px] text-[16px] font-roboto font-light tracking-widest'>
            Use this area to upload files you wish to share with your users. You can manage who has access to your files and what they can do, such as view & download, upload items and more.
          </p>
        </div>
        <div className="p-[20px] bg-white min-h-[550px]">
          <div className="flex justify-between items-center mb-[25px] max-md:mb-[15px] ">
            <h3 className='text-[20px] font-montserrat font-semibold'>Files & Folders</h3>
            <div className="hidden items-center gap-[10px] max-md:flex">
              <div ref={dropdownRef} className='relative'>
                <div onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)} className="cursor-pointer">
                  <UpDownArrow />
                </div>
                {isMobileDropdownOpen && (
                  <div className="absolute z-40 t-[100%] right-0 w-[250px] bg-white py-[12px] shadow-2xl max-sm:w-[200px]">
                    <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Item name</NavLink>
                    <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Last Updated</NavLink>
                    <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Views</NavLink>
                    <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Favorites</NavLink>
                    <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">File type</NavLink>
                    <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">File size</NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end relative mb-[10px]">
            <div className="absolute left-1/2 top-2 max-md:left-0 ">
              <Search />
            </div>
            <input
              type="text"
              placeholder="Search 'Files & Folders'..."
              className="w-1/2 border-b border-black pr-[8px] pl-[30px] py-[8px] font-montserrat text-black text-[16px] font-light placeholder-gray-600 focus:outline-none max-md:w-full"
            />
          </div>
          <GuidesTable />
        </div>
      </div>
    </section>
  );
}
