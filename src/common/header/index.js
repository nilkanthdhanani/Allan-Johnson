import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';
import LoginIcon from '../../assets/images/svg/loginIcon';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);
  const navigate = useNavigate();

  const HEADER_HEIGHT = 101;

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateAndScroll = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => handleScrollToSection(sectionId), 100);
    } else {
      handleScrollToSection(sectionId);
    }
  };

  const isSectionInView = (section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= HEADER_HEIGHT && rect.bottom > HEADER_HEIGHT;
  };

  const checkSectionsInView = useCallback(() => {
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');

    if (aboutSection) {
      setIsAboutActive(isSectionInView(aboutSection));
    }
    if (contactSection) {
      setIsContactActive(isSectionInView(contactSection));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkSectionsInView);
    return () => {
      window.removeEventListener('scroll', checkSectionsInView);
    };
  }, [checkSectionsInView]);

  return (
    <header className="sticky z-50 top-0 bg-white py-[28px] max-md:py-[15px]">
      <div className="container flex justify-between items-center">
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
        <div className="flex gap-[50px] items-center font-light font-roboto max-lg:gap-[20px] max-md:hidden">
          <nav className="flex gap-[30px] from-neutral-400 max-lg:gap-[20px]">
            <a
              href="#about"
              onClick={() => handleNavigateAndScroll('about')}
              className={`hover:text-green transition duration-500 ${isAboutActive ? 'text-green' : ''}`}>
              About
            </a>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? 'text-green' : 'hover:text-green transition duration-500'
              }>
              Services
            </NavLink>
            <NavLink
              to="/plans"
              className={({ isActive }) =>
                isActive ? 'text-green' : 'hover:text-green transition duration-500'
              }>
              Plans
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? 'text-green' : 'hover:text-green transition duration-500'
              }>
              Blog
            </NavLink>
            <NavLink
              to="/guides"
              className={({ isActive }) =>
                isActive ? 'text-green' : 'hover:text-green transition duration-500'
              }>
              Guides
            </NavLink>
            <a
              href="#contact"
              onClick={() => handleNavigateAndScroll('contact')}
              className={`hover:text-green transition duration-500 ${isContactActive ? 'text-green' : ''}`}>
              Contact
            </a>
          </nav>
          <a href="/" className="flex gap-[10px] items-center">
            <LoginIcon />
            <span className="text-green">Log In</span>
          </a>
        </div>
        <div className="cursor-pointer hidden max-md:block" onClick={toggleSidebar}>
          <div className="h-[2px] w-[22px] bg-black mb-[5px]"></div>
          <div className="h-[2px] w-[22px] bg-black mb-[5px]"></div>
          <div className="h-[2px] w-[22px] bg-black"></div>
        </div>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </header>
  );
}