import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './sidebar';
import LoginIcon from '../../assets/images/svg/loginIcon';

export default function Header({ isSidebarOpen, setIsSidebarOpen }) {
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation to track path changes

  const HEADER_HEIGHT = 101;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle('no-scroll', !isSidebarOpen);
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateAndScroll = (sectionId) => {
    if (location.pathname !== '/') {
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
    if (location.pathname !== '/') return;

    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');

    if (aboutSection) {
      setIsAboutActive(isSectionInView(aboutSection));
    }
    if (contactSection) {
      setIsContactActive(isSectionInView(contactSection));
    }
  }, [location.pathname]); // Add location.pathname as a dependency

  useEffect(() => {
    setIsAboutActive(false);
    setIsContactActive(false);

    if (location.pathname === '/') {
      window.addEventListener('scroll', checkSectionsInView);
      checkSectionsInView();
      return () => {
        window.removeEventListener('scroll', checkSectionsInView);
      };
    }
  }, [location.pathname, checkSectionsInView]); // Add checkSectionsInView as a dependency

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
          <NavLink to={"/login"} className="flex gap-[10px] items-center">
            <LoginIcon />
            <span className="text-green">Log In</span>
          </NavLink>
        </div>
        <div className="cursor-pointer hidden max-md:block" onClick={toggleSidebar}>
          <div className="h-[2px] w-[22px] bg-black mb-[5px]"></div>
          <div className="h-[2px] w-[22px] bg-black mb-[5px]"></div>
          <div className="h-[2px] w-[22px] bg-black"></div>
        </div>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </header>
  );
}
