import React, { useEffect, useState, useRef } from 'react'
import File from '../../assets/images/svg/file';
import Admin from '../../assets/images/svg/admin';
import Star from '../../assets/images/svg/star';
import MenuLine from '../../assets/images/svg/menuLine';
import UpDownArrow from '../../assets/images/svg/upDownArrow';
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

export default function GuidesTable() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const dropdownRef = useRef(null);
    const menuDropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
            
            if (menuDropdownRef.current && !menuDropdownRef.current.contains(event.target)) {
                setOpenDropdownIndex(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleDropdownClick = (index) => {
        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    };

    return (
        <>
            <table className='w-full text-left max-md:hidden'>
                <thead>
                    <tr>
                        <th className='w-1/2 py-[12px] border-b-[1px] border-border1'>
                            <div className="flex gap-[80px] items-center">
                                <input type="checkbox" className='m-0 accent-green scale-125' aria-label='checkbox' />
                                <span className='text-[14px] font-montserrat font-medium'>Item Name</span>
                            </div>
                        </th>
                        <th className='py-[12px] border-b-[1px] border-border1 text-[14px] font-montserrat font-medium'>Last updated</th>
                        <th className='py-[12px] border-b-[1px] border-border1 text-[14px] font-montserrat font-medium'>Views</th>
                        <th className='py-[12px] border-b-[1px] border-border1 text-[14px] font-montserrat font-medium'>Favorites</th>
                        <th className='py-[12px] border-b-[1px] border-border1 text-[14px] font-montserrat font-medium'>Contributors</th>
                        <th className='w-[25px] py-[12px] border-b-[1px] border-border1 cursor-pointer relative'>
                            <div ref={dropdownRef}>
                                <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    <UpDownArrow />
                                </div>
                                {isDropdownOpen && (
                                    <div className="absolute z-40 t-[100%] right-0 w-[250px] bg-white py-[12px] shadow-2xl">
                                        <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Item name</NavLink>
                                        <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Last Updated</NavLink>
                                        <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Views</NavLink>
                                        <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Favorites</NavLink>
                                        <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">File type</NavLink>
                                        <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">File size</NavLink>
                                    </div>
                                )}
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data, index) => (
                        <tr key={index}>
                            <td className='py-[35px] min-w-[70px] border-b-[1px] border-border1'>
                                <div className="flex gap-[15px] items-center">
                                    <input type="checkbox" className='m-0 accent-green scale-125 cursor-pointer' aria-label='checkbox' />
                                    <File />
                                    <div className='ml-[10px]'>
                                        <span className='block text-[16px] font-roboto font-light tracking-wider mb-1'>{data.fileName}</span>
                                        <span className='block text-[12px] font-roboto font-light tracking-wider'>{data.fileSize}</span>
                                    </div>
                                </div>
                            </td>
                            <td className='py-[35px] min-w-[70px] border-b-[1px] border-border1 text-[14px] font-roboto font-light tracking-wider'>{data.fileDate}</td>
                            <td className='py-[35px] min-w-[70px] border-b-[1px] border-border1 text-[14px] font-roboto font-light tracking-wider'>{data.fileViews}</td>
                            <td className='py-[35px] min-w-[70px] border-b-[1px] border-border1 text-[14px] font-roboto font-light tracking-wider'>
                                <div className="flex gap-[5px] items-center">
                                    <Star />
                                    <span>0</span>
                                </div>
                            </td>
                            <td className='py-[35px] min-w-[70px] border-b-[1px] border-border1 text-[14px] font-roboto font-light tracking-wider'>
                                <div className="flex gap-[10px] items-center">
                                    <Admin />
                                    <span>Admin</span>
                                </div>
                            </td>
                            <td className='py-[35px] border-b-[1px] border-border1 cursor-pointer relative'>
                                <div ref={menuDropdownRef}>
                                    <div onClick={() => handleDropdownClick(index)}>
                                        <MenuLine />
                                    </div>
                                    {openDropdownIndex === index && (
                                        <div className="absolute z-40 t-[100%] right-0 w-[250px] bg-white py-[12px] shadow-2xl">
                                            <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Select</NavLink>
                                            <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Download</NavLink>
                                            <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Move</NavLink>
                                            <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Delete</NavLink>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="hidden max-md:block">
                {tableData.map((data, index) => (
                    <div key={index} className='py-[20px] flex gap-[10px] items border-b border-border1'>
                        <File />
                        <div className='w-full'>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-[5px] items-center">
                                    <div>
                                        <span className='block text-[16px] font-roboto font-light tracking-wider mb-1'>{data.fileName}</span>
                                        <span className='block text-[12px] font-roboto font-light tracking-wider'>{data.fileSize}</span>
                                    </div>
                                </div>
                                <div ref={menuDropdownRef} className='relative'>
                                    <div onClick={() => handleDropdownClick(index)} className="cursor-pointer">
                                        <MenuLine />
                                    </div>
                                    {openDropdownIndex === index && (
                                        <div className="absolute z-40 t-[100%] right-0 w-[250px] bg-white py-[12px] shadow-2xl max-sm:w-[200px]">
                                            <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Select</NavLink>
                                            <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Download</NavLink>
                                            <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Move</NavLink>
                                            <NavLink className="block py-[8px] px-[24px] text-[14px] font-montserrat font-medium hover:bg-gray-200">Delete</NavLink>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex mt-[10px] justify-between items-center gap-[20px]">
                                <div className="flex items-center flex-wrap">
                                    <span className='block text-[14px] font-roboto font-light tracking-wider'>{data.fileDate}</span>
                                    <div className="p-[2px] rounded-full bg-black m-[10px]"></div>
                                    <span className='block text-[14px] font-roboto font-light tracking-wider'>{data.fileViews} Views</span>
                                </div>
                                <div className="flex gap-[5px] items-center">
                                    <span>0</span>
                                    <Star />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
