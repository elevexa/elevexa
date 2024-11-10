import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='px-[16px] py-[16px] w-full'>
      <nav className="border border-[#D8D8D8] py-[16px] px-[16px] flex justify-between items-center rounded-[5px]">
        {/* Logo Section */}
        <div className="text-[28px] font-normal font-youngSerif text-gray-900 leading-[39px]">
          Elevexa
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center text-[16px] font-instrument">
          <a href="#work" className="text-gray-600 hover:text-gray-900">Don't Work with Us if...</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#process" className="text-gray-600 hover:text-gray-900">The Process</a>
          <a className="text-gray-600 hover:text-gray-900 mt-[-9px]">.</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
          <a href="mailto:info@elevexa.io" className="text-gray-600 hover:text-gray-900">info@elevexa.io</a>
          <a href="tel:+43 720 881175" className="text-gray-600 hover:text-gray-900">+43 720 881175</a>
          <button 
            className="bg-lime-300 text-gray-800 px-6 py-2 rounded-full hover:bg-lime-400 text-[18px] leading-[22px]"
            onClick={() => window.open("https://calendly.com/dbujor-elevexa/30min", "_blank")}
          >
            Book a call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center font-instrument">
          <button 
            className="bg-lime-300 text-gray-800 px-[16px] py-[4px] rounded-full hover:bg-lime-400 text-[16px] leading-[22px]"
            onClick={() => window.open("https://calendly.com/dbujor-elevexa/30min", "_blank")}
          >
            Book a call
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 px-4 py-2 focus:outline-none text-[16px]"
          >
            {isMenuOpen ? '' : 'Menu'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${isMenuOpen ? 'absolute font-instrument top-0 right-0' : 'hidden'} h-screen w-full bg-white p-8 md:hidden z-10 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className='flex justify-end'>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 text-right mb-6 text-xl font-semibold"
            >
              Close
            </button>
          </div>
          <ul className="space-y-6 flex flex-col items-start">
            <li className='w-[142px]'>
              <button 
                className="bg-lime-300 text-gray-800 px-4 py-[4px] rounded-[25px] w-full text-left"
                onClick={() => window.open("https://calendly.com/dbujor-elevexa/30min", "_blank")}
              >
                Book a call
              </button>
            </li>
            <li><a href="#work" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-gray-900">Don't Work with Us if...</a></li>
            <li><a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-gray-900">Pricing</a></li>
            <li><a href="process" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-gray-900">The Process</a></li>
            <li><a onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-gray-900">LinkedIn</a></li>
            <li><a onClick={() => setIsMenuOpen(false)} href="mailto:info@elevexa.io" className="text-gray-600 hover:text-gray-900">info@elevexa.io</a></li>
            <li><a onClick={() => setIsMenuOpen(false)} href="tel:+43 720 881175" className="text-gray-600 hover:text-gray-900">+43 720 881175</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
