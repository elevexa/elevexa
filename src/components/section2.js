import React from 'react';

const Section3 = () => {
  return (
    <section className="max-w-[912px] mx-auto px-[16px] lg:px-0  text-center mt-[60px] md:mt-[180px]">
      <h2 className="text-4xl h text-[#191919] font-youngSerif">Moldova is cool because...</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mt-[45px]">
        {/* Sweet, Exclusive Tax */}
        <div className="text-[#191919]  p-[45px] rounded-[5px] bg-[#F2F2F2]">
          <img
              src="/icon6.png"
              alt="icon1"
              className="mr-2 w-[40px] h-[40px] mt-[2px]"
            />
          <h3 className="text-[28px] leading-[30px] mt-[20px] text-left  font-youngSerif">Sweet, Exclusive Tax</h3>
          <p className='font-commissioner text-left  mt-[20px] text-[18px] md:leading-[24px]' >
            Moldova is the only place in Europe offering a sweet tax deal just for IT
            organizations. A flat 7% tax on revenue, covering income tax, social security, and more.
          </p>
        </div>

        {/* Low-Cost Clock */}
        <div className="bg-[#3C3C3C] text-white p-[45px] rounded-[5px]">
         <img
              src="/icon7.png"
              alt="icon1"
              className="mr-2 w-[40px] h-[40px] mt-[2px]"
            />
          <h3 className="text-[28px] leading-[30px] mt-[20px] text-left font-youngSerif">Low-Cost Clock</h3>
          <p className=" font-commissioner text-left  mt-[20px] text-[18px] md:leading-[24px]">
            As a result, our rates are way lower than those in nearby countries like Bulgaria, Romania,
            Poland, and Ukraine.
          </p>
          <div className='flex w-full '>
            <a
              href="https://calendly.com/dbujor-elevexa/30min" target='_blank' rel="noreferrer"
              className="inline-block bg-[#D7FF43] text-[#040404] mt-[20px] p-[16px] rounded-[50px] border font-medium border-[#D8D8D8] text-[18px] leading-[22px]"
            >
              Book a call &rarr;
            </a>
          </div>
        </div>

        {/* You Get Happy Devs */}
        <div className="text-[#191919] p-[45px] rounded-[5px] bg-[#F2F2F2]">
          <img
              src="/icon8.png"
              alt="icon1"
              className="mr-2 w-[40px] h-[40px] mt-[2px]"
            />
          <h3 className="text-[28px] leading-[30px] mt-[20px] text-left   font-semibold font-youngSerif">You Get Happy Devs</h3>
          <p className='font-commissioner text-left  mt-[20px]  text-[18px] md:leading-[24px]'>
            Access a rapidly growing pool of IT specialists who take home their entire salary—no extra
            taxes, just pure net pay.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
