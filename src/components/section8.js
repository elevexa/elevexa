import React from 'react';

const Section8 = () => {
  return (
    <section className="max-w-[1376px] mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center lg:items-start text-left">
      <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 text-[#191919]">
        <h2 className="md:text-[62px] md:leading-[62px] text-[36px] leading-[36px] mt-[30px] md:mt-0 font-youngSerif mb-6">Ready for Developers Who Actually Deliver?</h2>
        <p className="text-[24px] leading-[32px] mb-8 font-commissioner">
          Stop burning time and money on subpar devs. Get dedicated pros who bring your vision to life—fast.
        </p>
        <a
          href="https://calendly.com/dbujor-elevexa/30min" target="_blank" rel="noreferrer"
          className="inline-block bg-lime-400 text-black py-3 px-6 rounded-full font-instrument text-[18px] leading-[22px]"
        >
          Book a call
        </a>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="/image14.jpg"
          alt="Ready for Developers"
          className="w-full max-w-[680px] h-auto object-cover rounded-lg"
          style={{ maxHeight: '410px' }}
        />
      </div>
    </section>
  );
};

export default Section8;
