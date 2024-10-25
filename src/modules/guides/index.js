import React, { useState, useEffect, useRef } from 'react';
import Search from '../../assets/images/svg/search';
import File from '../../assets/images/svg/file';
import UpDownArrow from '../../assets/images/svg/upDownArrow';
import Admin from '../../assets/images/svg/admin';
import Star from '../../assets/images/svg/star';
import MenuLine from '../../assets/images/svg/menuLine';
import { NavLink } from 'react-router-dom';

const tableData = [
  {
    fileName: "Free Tools",
    fileSize: "1 item",
    fileDate: "Sep 3, 2024",
    fileViews: "159",
  },
  {
    fileName: "Clients Only",
    fileSize: "0 item",
    fileDate: "Jul 27, 2021",
    fileViews: "37",
  }
];

export default function Guides() {
  const [isThDropdownOpen, setIsThDropdownOpen] = useState(false);
  const [isTdDropdownOpen, setIsTdDropdownOpen] = useState(null); // Track dropdowns per row
  const thDropdownRef = useRef(null);
  const tdDropdownRefs = useRef([]); // Use refs for each row's dropdown

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if click is outside th dropdown
      if (thDropdownRef.current && !thDropdownRef.current.contains(event.target)) {
        setIsThDropdownOpen(false);
      }
      // Check if click is outside any td dropdown
      tdDropdownRefs.current.forEach((ref, index) => {
        if (ref && !ref.contains(event.target)) {
          setIsTdDropdownOpen(null);
        }
      });
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="pt-[60px] pb-[100px] w-full bg-hero-pattern bg-cover bg-fixed bg-center">
      <div className="container">
        <div className='max-w-[650px] mb-[60px]'>
          <div className="h-[2px] w-[40px] bg-black mb-[25px]"></div>
          <h2 className='text-[48px] font-montserrat font-extrabold tracking-wider'>GUIDES</h2>
          <p className='mt-[15px] text-[16px] font-roboto font-light tracking-widest'>
            Use this area to upload files you wish to share with your users. You can manage who has access to your files and what they can do, such as view & download, upload items and more.
          </p>
        </div>
        <div className="p-[20px] bg-white min-h-[550px]">
          <h3 className='text-[20px] mb-[25px] font-montserrat font-semibold'>Files & Folders</h3>
          <div className="flex justify-end relative mb-[10px]">
            <div className="absolute left-1/2 top-2">
              <Search />
            </div>
            <input
              type="text"
              placeholder="Search 'Files & Folders'..."
              className="w-1/2 border-b border-black pr-[8px] pl-[30px] py-[8px] font-montserrat text-black text-[16px] font-light placeholder-gray-600 focus:outline-none"
            />
          </div>
          <table className='w-full text-left'>
            <thead>
              <tr>
                <th className='w-1/2 py-[12px] border-b-[1px] border-border1'>
                  <div className="flex gap-[80px] items-center">
                    <input type="checkbox" className='m-0 accent-green scale-125' />
                    <span className='text-[14px] font-montserrat font-medium'>Item Name</span>
                  </div>
                </th>
                <th className='py-[12px] border-b-[1px] border-border1 text-[14px] font-montserrat font-medium'>Last updated</th>
                <th className='py-[12px] border-b-[1px] border-border1 text-[14px] font-montserrat font-medium'>Views</th>
                <th className='py-[12px] border-b-[1px] border-border1 text-[14px] font-montserrat font-medium'>Favorites</th>
                <th className='py-[12px] border-b-[1px] border-border1 text-[14px] font-montserrat font-medium'>Contributors</th>
                <th className='w-[25px] py-[12px] border-b-[1px] border-border1 cursor-pointer relative'>
                  <div onClick={() => setIsThDropdownOpen(!isThDropdownOpen)} ref={thDropdownRef}>
                    <UpDownArrow />
                  </div>
                  {isThDropdownOpen && (
                    <div className="absolute z-40 t-[100%] right-0 w-[250px] bg-white py-[12px] shadow-2xl">
                      <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Item name</NavLink>
                      <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Last Updated</NavLink>
                      <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Views</NavLink>
                      <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Favorites</NavLink>
                      <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">File type</NavLink>
                      <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">File size</NavLink>
                    </div>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td className='py-[35px] min-w-[70px] border-b-[1px] border-border1'>
                    <div className="flex gap-[15px] items-center">
                      <input type="checkbox" className='m-0 accent-green scale-125 cursor-pointer' />
                      <File />
                      <div className='ml-[10px]'>
                        <span className='block text-[16px] font-roboto font-light tracking-wider mb-1'>{data.fileName}</span>
                        <span className='block text-[12px] font-roboto font-light tracking-wider'>{data.fileSize}</span>
                      </div>
                    </div>
                  </td>
                  <td className='py-[35px] min-w-[70px] border-b-[1px] border-border1'>{data.fileDate}</td>
                  <td className='py-[35px] min-w-[70px] border-b-[1px] border-border1'>{data.fileViews}</td>
                  <td className='py-[35px] min-w-[70px] border-b-[1px] border-border1'>
                    <div className="flex gap-[5px] items-center">
                      <Star />
                      <span>0</span>
                    </div>
                  </td>
                  <td className='py-[35px] min-w-[70px] border-b-[1px] border-border1'>
                    <div className="flex gap-[10px] items-center">
                      <Admin />
                      <span>Admin</span>
                    </div>
                  </td>
                  <td className='py-[35px] border-b-[1px] border-border1 cursor-pointer relative'>
                    <div onClick={() => setIsTdDropdownOpen(isTdDropdownOpen === index ? null : index)} ref={el => tdDropdownRefs.current[index] = el}>
                      <MenuLine />
                    </div>
                    {isTdDropdownOpen === index && (
                      <div className="absolute z-40 t-[100%] right-0 w-[250px] bg-white py-[12px] shadow-2xl">
                        <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Select</NavLink>
                        <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Download</NavLink>
                        <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Move</NavLink>
                        <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Delete</NavLink>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
