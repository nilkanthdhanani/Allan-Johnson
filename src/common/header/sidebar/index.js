import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { close } from '../../../assets/images/images';
import LoginIcon from '../../../assets/images/svg/loginIcon';

export default function Sidebar({ isOpen, toggleSidebar }) {
    const navigate = useNavigate();

    const handleNavigation = (section) => {
        toggleSidebar();
        navigate('/', { state: { targetSection: section } });
    };

    return (
        <div className={`fixed z-50 top-0 left-0 w-full h-full bg-white text-black transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="scrollbar relative h-screen grid grid-rows-[78px_1fr] gap-[10px] ">
                <div className="py-[15px] px-[20px] flex justify-between items-center">
                    <div className="font-montserrat whitespace-nowrap">
                        <NavLink
                            to="/"
                            className="text-center text-[17px] block font-black tracking-[5px]">
                            ALLAN JOHNSON
                            <span className="block font-roboto text-[12px] pt-1 font-light tracking-[2px]">
                                Personal Life Coach
                            </span>
                        </NavLink>
                    </div>
                    <div className="cursor-pointer" onClick={toggleSidebar}>
                        <img src={close} alt="close" className="h-[20px] w-[20px] " />
                    </div>
                </div>

                <nav className='w-[200px] mx-auto overflow-auto'>
                    <a href="#about" className="block py-[15px] text-center border-b-[1px] border-border1 hover:text-green transition duration-500" onClick={() => handleNavigation('about')}>
                        About
                    </a>
                    <NavLink to="/services" className="block py-[15px] text-center border-b-[1px] border-border1 hover:text-green transition duration-500" onClick={toggleSidebar}>
                        Services
                    </NavLink>
                    <NavLink to="/plans" className="block py-[15px] text-center border-b-[1px] border-border1 hover:text-green transition duration-500" onClick={toggleSidebar}>
                        Plans
                    </NavLink>
                    <NavLink to="/blog" className="block py-[15px] text-center border-b-[1px] border-border1 hover:text-green transition duration-500" onClick={toggleSidebar}>
                        Blog
                    </NavLink>
                    <NavLink to="/guides" className="block py-[15px] text-center border-b-[1px] border-border1 hover:text-green transition duration-500" onClick={toggleSidebar}>
                        Guides
                    </NavLink>
                    <a href="#contact" className="block py-[15px] text-center border-b-[1px] border-border1 hover:text-green transition duration-500" onClick={() => handleNavigation('contact')}>
                        Contact
                    </a>
                    <NavLink to={"/login"} className="py-[15px] flex gap-[10px] justify-center items-center">
                        <LoginIcon />
                        <span className="text-green">Log In</span>
                    </NavLink>
                </nav>
            </div>
        </div>
    );
}
