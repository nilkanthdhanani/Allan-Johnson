import React, { useState } from 'react';
import Service1 from './service1';
import Service2 from './service2';
import Service3 from './service3';

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="py-[60px] w-full bg-hero-pattern bg-cover bg-fixed bg-center">
      <div className="container">
        <div className="max-w-[980px] mx-auto mb-[100px]">
          <div className="h-[2px] w-[40px] bg-black mb-[25px]"></div>
          <h2 className='text-[48px] font-montserrat font-extrabold tracking-wider max-w-[400px]'>SERVICES</h2>
        </div>

        <div className="w-full max-w-[550px] mb-[60px] mx-auto">
          <div className="grid grid-cols-3 relative">
            {['All Services', 'Personal Growth', 'Career Ambitions'].map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`border-b-[1px] border-border1 text-center py-[16px] px-[25px] ${activeTab === index ? 'text-green' : 'text-black-500'
                  }`}>
                {tab}
              </button>
            ))}

            <div
              className="absolute bottom-0 h-[3px] bg-green transition-transform duration-300"
              style={{ width: '33.33%', transform: `translateX(${activeTab * 100}%)` }} />
          </div>
        </div>

        <div>
          {activeTab === 0 && <Service1 />}
          {activeTab === 1 && <Service2 />}
          {activeTab === 2 && <Service3 />}
        </div>
      </div>
    </section>
  );
}
