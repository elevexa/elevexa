import React from 'react';

const Section7 = () => {
  return (
    <section className="max-w-[1376px] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center" id='pricing'>
      <h2 className="text-[36px] leading-[37px] text-[#191919] font-youngSerif mb-12">$$$</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* The Quick Fix */}
        <div className="bg-white p-8 rounded-lg text-left text-[#191919]">
          <h3 className="text-[28px] font-youngSerif leading-[30px] mb-4">The Quick Fix</h3>
          <p className="mb-4 text-[18px] font-commissioner">Perfect for small teams or temporary roles</p>
          <ul className="space-y-2 text-[18px] mb-6 font-commissioner">
            <li className="flex items-start">
            <img
              src="/assets/icon1black.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>1-3 devs</span>
            </li>
            <li className="flex items-start">
            <img
              src="/assets/icon1black.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>Fixed hourly rate</span>
            </li>
            <li className="flex items-start">
            <img
              src="/assets/icon1black.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>Cancel your contract within 4 weeks</span>
            </li>
          </ul>
          <p className="font-commissioner text-[16px] leading-[17px]">Starting from</p>
          <p className="font-commissioner mb-4"><span className="text-[28px] leading-[30px]">€20/hour</span></p>
          <a
            href="https://calendly.com/dbujor-elevexa/30min" target="_blank"
            className="inline-block bg-lime-400 text-black py-3 px-6 rounded-full font-instrument text-[18px] leading-[22px]"
          >
            Book a call
          </a>
        </div>

        {/* The Open Book */}
        <div className="bg-white p-8 rounded-lg text-left text-[#191919]">
          <h3 className="text-[28px] font-youngSerif leading-[30px] mb-4">The Open Book</h3>
          <p className="mb-4 font-commissioner text-[18px]">Perfect for mid-sized, long term teams</p>
          <ul className="space-y-2 mb-6 text-[18px] font-commissioner">
            <li className="flex items-start">
            <img
              src="/assets/icon1black.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>6-12 devs</span>
            </li>
            <li className="flex items-start">
            <img
              src="/assets/icon1black.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>You're in control of the devs' salary</span>
            </li>
            <li className="flex items-start">
            <img
              src="/assets/icon1black.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>Cancel your contract within 8 weeks</span>
            </li>
           
          </ul>
          <p className="font-commissioner text-[16px] leading-[17px]">Management fee from</p>
          <p className="font-commissioner mb-4"><span className="text-[28px] leading-[30px]">35%</span></p>
          <a
            href="https://calendly.com/dbujor-elevexa/30min" target="_blank"
            className="inline-block bg-lime-400 text-black py-3 px-6 rounded-full font-instrument text-[18px] leading-[22px]"
          >
            Book a call
          </a>
        </div>

        {/* Enterprise */}
        <div className="bg-white p-8 rounded-lg text-left text-[#191919]">
          <h3 className="text-[28px] font-youngSerif leading-[30px] mb-4">Enterprise</h3>
          <p className="mb-4 font-commissioner text-[18px]">Perfect for large teams</p>
          <ul className="space-y-2 text-[18px] mb-6 font-commissioner">
            <li className="flex items-start">
            <img
              src="/assets/icon1black.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>12+ devs</span>
            </li>
            <li className="flex items-start">
            <img
              src="/assets/icon1black.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>Set up your own nearshore legal entity</span>
            </li>
            <li className="flex items-start">
            <img
              src="/assets/icon1black.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>We support every step in-between</span>
            </li>
          </ul>
          <p className="font-commissioner text-[16px] leading-[17px]">Price on Request:</p>
          <p className="font-commissioner mb-4"><span className="text-[28px] leading-[30px]">Contact sales</span></p>
          <a
            href="https://calendly.com/dbujor-elevexa/30min" target="_blank"
            className="inline-block bg-lime-400 text-black py-3 px-6 rounded-full font-instrument text-[18px] leading-[22px]"
          >
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section7;
