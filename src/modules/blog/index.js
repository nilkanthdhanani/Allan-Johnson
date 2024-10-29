import React, { useState } from 'react';
import Blog1 from './blog1';
import { greaterThan } from '../../assets/images/images';
import Blog2 from './blog2';
import Blog3 from './blog3';

export default function Blog() {
  const [activeBlog, setActiveBlog] = useState(1);

  const renderBlog = () => {
    if (activeBlog === 1) {
      return <Blog1 />;
    } else if (activeBlog === 2) {
      return <Blog2 />;
    } else if (activeBlog === 3) {
      return <Blog3 />;
    }
  };

  return (
    <section>
      <div className="pt-[60px] pb-[300px] w-full bg-blog-pattern bg-cover bg-fixed bg-center max-lg:py-[60px]">
        <div className="container">
          <div className="max-w-[980px] mx-auto mb-[50px]">
            <div className="h-[2px] w-[40px] bg-black mb-[25px] max-sm:mb-[15px]"></div>
            <h2 className='text-[48px] font-montserrat font-extrabold tracking-wider max-w-[400px] max-sm:text-[36px]'>THOUGHTS & NOTES</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="mt-[-31%] max-lg:mt-[30px]">
            {renderBlog()}
            <div className="pt-[20px] pb-[40px] flex gap-[30px] justify-center">
              <img 
                className={`w-[20px] cursor-pointer rotate-180 ${activeBlog === 1 ? 'opacity-50' : ''}`} 
                src={greaterThan} 
                alt="greaterThan" 
                onClick={() => setActiveBlog(activeBlog > 1 ? activeBlog - 1 : activeBlog)}
              />
              <span 
                className={`text-[16px] font-roboto font-light tracking-[1px] leading-[24px] block cursor-pointer ${activeBlog === 1 ? 'text-green' : ''}`}
                onClick={() => setActiveBlog(1)}
              >
                1
              </span>
              <span 
                className={`text-[16px] font-roboto font-light tracking-[1px] leading-[24px] block cursor-pointer ${activeBlog === 2 ? 'text-green' : ''}`}
                onClick={() => setActiveBlog(2)}
              >
                2
              </span>
              <span 
                className={`text-[16px] font-roboto font-light tracking-[1px] leading-[24px] block cursor-pointer ${activeBlog === 3 ? 'text-green' : ''}`}
                onClick={() => setActiveBlog(3)}
              >
                3
              </span>
              <img 
                className={`w-[20px] cursor-pointer ${activeBlog === 3 ? 'opacity-50' : ''}`} 
                src={greaterThan} 
                alt="greaterThan" 
                onClick={() => setActiveBlog(activeBlog < 3 ? activeBlog + 1 : activeBlog)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
