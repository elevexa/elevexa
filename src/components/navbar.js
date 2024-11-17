import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div className='max-w-[1408px] mx-auto px-[16px] py-[16px] w-full fixed top-0 left-0 right-0 bg-white'>
      <nav className="border border-[#D8D8D8] py-[14px] px-[16px] flex justify-between items-center rounded-[5px]">
        {/* Logo Section */}
        <div className="text-[28px] font-normal font-youngSerif text-gray-900 leading-[39px]">
          Elevexa
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center text-[16px] font-instrument">
          <a href="#work" className="text-[#191919] hover:text-gray-900">Don't Work with Us if...</a>
          <a href="#pricing" className="text-[#191919] hover:text-gray-900">Pricing</a>
          <a href="#process" className="text-[#191919] hover:text-gray-900">The Process</a>
          <a className="text-[#191919] hover:text-gray-900 mt-[-9px]">.</a>
          <a href="#" className="text-[#191919] hover:text-gray-900">LinkedIn</a>
          <a href="mailto:info@elevexa.io" className="text-[#191919] hover:text-gray-900">info@elevexa.io</a>
          <a href="tel:+43 720 881175" className="text-[#191919] hover:text-gray-900">+43 720 881175</a>
          <button 
            className="bg-[#D7FF43] border border-[#D8D8D8] text-[#040404] px-[16px] py-[4px] rounded-[50px] text-[16px] leading-[19px]"
            onClick={() => window.open("https://calendly.com/dbujor-elevexa/30min", "_blank")}
          >
            Book a call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center font-instrument">
          <button 
            className="bg-[#D7FF43] border border-[#D8D8D8] text-[#040404] px-[16px] py-[4px] mr-[16px]  rounded-full hover:bg-[#D7FF33] text-[16px] leading-[22px]"
            onClick={() => window.open("https://calendly.com/dbujor-elevexa/30min", "_blank")}
          >
            Book a call
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#040404] py-2 focus:outline-none text-[16px]"
          >
            {isMenuOpen ? 'Menu' : 'Menu'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'absolute h-screen lg:hidden w-full font-instrument top-[102px] left-0 bg-white right-0' : 'hidden'} 
        transform transition-transform duration-300 ease-in-out px-[16px]
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} >
          <div
            className={`
             w-full py-[14px] rounded-[5px] border h-full border-[#D8D8D8] z-50
            `}
          >
            <div className='flex justify-end px-[16px] '>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-[#191919] text-right mb-6 text-[16px] font-instrument"
              >
                Close
              </button>
            </div>
            <ul className="space-y-6 flex flex-col px-[16px] text-[18px] leading-[32px] items-start">
              <li className='w-[142px]'>
                <button 
                  className="bg-[#D7FF43] border border-[#D8D8D8] text-[#040404] px-[16px] py-[4px] rounded-[25px] w-full text-left"
                  onClick={() => window.open("https://calendly.com/dbujor-elevexa/30min", "_blank")}
                >
                  Book a call
                </button>
              </li>
              <li className='w-full'><a href="#work" onClick={() => setIsMenuOpen(false)} className="text-[#191919] hover:text-gray-900 flex justify-between">
                <p>Don't Work with Us if...</p>
                <img src='arrow.svg' alt='arrow' className='w-[24px] h-[24px]' />
              </a></li>
              <li className='w-full'><a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-[#191919] hover:text-gray-900 flex justify-between">
                <p>Pricing</p>
                <img src='arrow.svg' alt='arrow' className='w-[24px] h-[24px]' />
              </a></li>
              <li className='w-full'><a href="#process" onClick={() => setIsMenuOpen(false)} className="text-[#191919] hover:text-gray-900 flex justify-between">
                <p>The Process</p>
                <img src='arrow.svg' alt='arrow' className='w-[24px] h-[24px]' />
              </a></li>
              <li className='w-full'><a href='#' onClick={() => setIsMenuOpen(false)} className="text-[#191919] hover:text-gray-900 flex justify-between">
                <p>LinkedIn</p>
                <img src='arrow.svg' alt='arrow' className='w-[24px] h-[24px]' />
              </a></li>
              <li><a onClick={() => setIsMenuOpen(false)} href="mailto:info@elevexa.io" className="text-[#191919] hover:text-gray-900">info@elevexa.io</a></li>
              <li><a onClick={() => setIsMenuOpen(false)} href="tel:+43 720 881175" className="text-[#191919] hover:text-gray-900">+43 720 881175</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
