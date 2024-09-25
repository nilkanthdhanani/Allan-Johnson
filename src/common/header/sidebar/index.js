import React from 'react';
import { NavLink } from 'react-router-dom';
import { close } from '../../../assets/images/images';

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`fixed z-50 top-0 left-0 w-full h-full bg-white text-black transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="pt-[70px]">
                <div className="cursor-pointer absolute right-[20px] top-[30px]" onClick={toggleSidebar}>
                    <img src={close} alt="close" className="h-[20px] w-[20px] " />
                </div>
                <div className="font-montserrat whitespace-nowrap pb-[20px] ">
                    <NavLink to="/" onClick={toggleSidebar} className="text-center text-[17px] block font-black tracking-[5px]">
                        ALLAN JOHNSON
                        <span className="block font-roboto text-[12px] pt-1 font-light tracking-[2px] m-[10px]">Personal Life Coach</span>
                    </NavLink>
                </div>
                <nav>
                    <a href="#about" className="block max-w-[200px] mx-auto py-[15px] text-center border-b-[1px] border-border1 hover:text-green transition duration-500" onClick={toggleSidebar}>
                        About
                    </a>
                    <NavLink to="/services" className="block max-w-[200px] mx-auto py-[15px] text-center border-b-[1px] border-border1 hover:text-green transition duration-500" onClick={toggleSidebar}>
                        Services
                    </NavLink>
                    <NavLink to="/plans" className="block max-w-[200px] mx-auto py-[15px] text-center border-b-[1px] border-border1 hover:text-green transition duration-500" onClick={toggleSidebar}>
                        Plans
                    </NavLink>
                    <NavLink to="/blog" className="block max-w-[200px] mx-auto py-[15px] text-center border-b-[1px] border-border1 hover:text-green transition duration-500" onClick={toggleSidebar}>
                        Blog
                    </NavLink>
                    <NavLink to="/guides" className="block max-w-[200px] mx-auto py-[15px] text-center border-b-[1px] border-border1 hover:text-green transition duration-500" onClick={toggleSidebar}>
                        Guides
                    </NavLink>
                    <a href="#contact" className="block max-w-[200px] mx-auto py-[15px] text-center border-b-[1px] border-border1 hover:text-green transition duration-500" onClick={toggleSidebar}>
                        Contact
                    </a>
                </nav>
            </div>
        </div>
    );
}
