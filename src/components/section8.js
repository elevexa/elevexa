import React from 'react';

const Section8 = () => {
  return (
    <section className="max-w-[1376px] mx-auto px-[16px] mt-[60px] sm:mt-[180px] sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center lg:items-start text-left">
      <div className="lg:w-1/2 lg:pr-[16px] text-[#191919]">
        <h2 className="md:text-[62px] md:leading-[62px] text-[36px] leading-[36px] mt-[30px] md:mt-0 font-youngSerif">Ready for Developers Who Actually Deliver?</h2>
        <p className="text-[18px] leading-[24px] mt-[30px] font-commissioner">
          Stop burning time and money on subpar devs. Get dedicated pros who bring your vision to life—fast.
        </p>
        <a
          href="https://calendly.com/dbujor-elevexa/30min" target="_blank" rel="noreferrer"
          className="inline-block bg-[#D7FF43] text-[#040404] mt-[30px] p-[16px] rounded-[50px] font-instrument text-[18px] leading-[22px]"
        >
          Book a call &rarr;
        </a>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="/gif/8.gif"
          alt="Ready for Developers"
          className="w-full max-w-[680px] h-auto object-cover rounded-[5px]"
          style={{ maxHeight: '410px' }}
        />
      </div>
    </section>
  );
};

export default Section8;
