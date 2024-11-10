import React from 'react';

const Section3 = () => {
  return (
    <section className="max-w-[912px] mx-auto py-16 text-center mt-[60px] md:mt-[116px]">
      <h2 className="text-4xl font-bold text-black font-youngSerif mb-12">Moldova is cool because...</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mt-[13px]">
        {/* Sweet, Exclusive Tax */}
        <div className="bg-white text-black  p-[45px] rounded-lg">
          <img
              src="/assets/icon6.jpg"
              alt="icon1"
              className="mr-2 w-[40px] h-[40px] mt-[2px] mb-[20px] md:mb-0"
            />
          <h3 className="text-[28px] leading-[30px] text-left md:text-center font-semibold font-youngSerif mb-4">Sweet, Exclusive Tax</h3>
          <p className='font-commissioner text-left md:text-center text-[18px]' >
            Moldova is the only place in Europe offering a sweet tax deal just for IT
            organizations. A flat 7% tax on revenue, covering income tax, social security, and more.
          </p>
        </div>

        {/* Low-Cost Clock */}
        <div className="bg-[#3C3C3C] text-white p-[45px] rounded-lg">
         <img
              src="/assets/icon7.jpg"
              alt="icon1"
              className="mr-2 w-[40px] h-[40px] mb-[20px] md:mb-0 mt-[2px]"
            />
          <h3 className="text-[28px] leading-[30px] text-left md:text-center  font-semibold font-youngSerif mb-4">Low-Cost Clock</h3>
          <p className="mb-6 font-commissioner text-left md:text-center text-[18px]">
            As a result, our rates are way lower than those in nearby countries like Bulgaria, Romania,
            Poland, and Ukraine.
          </p>
          <a
            href="https://calendly.com/dbujor-elevexa/30min" target='_blank' rel="noreferrer"
            className="inline-block bg-lime-400 text-black py-3 px-6 rounded-full font-semibold text-[18px] leading-[22px]"
          >
            Book a call
          </a>
        </div>

        {/* You Get Happy Devs */}
        <div className="bg-white  text-black p-[45px] rounded-lg">
          <img
              src="/assets/icon8.jpg"
              alt="icon1"
              className="mr-2 w-[40px] h-[40px] mt-[2px] mb-[20px] md:mb-0"
            />
          <h3 className="text-[28px] leading-[30px] text-left md:text-center  font-semibold font-youngSerif mb-4">You Get Happy Devs</h3>
          <p className='font-commissioner text-left md:text-center  text-[18px]'>
            Access a rapidly growing pool of IT specialists who take home their entire salary—no extra
            taxes, just pure net pay.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
