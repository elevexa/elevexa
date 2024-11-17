import React from 'react';

const Section4 = () => {
  return (
    <section className="max-w-[1376px] mx-auto px-[16px] mt-[60px] sm:mt-[180px] lg:px0 flex flex-col-reverse lg:flex-row items-center lg:items-start text-left">
      <div className="lg:w-1/2 lg:pr-[16px]">
        <h2 className="text-[36px] text-[#191919] leading-[36px] lg:leading-[62px] font-youngSerif mt-[30px] lg:mt-0 lg:text-[62px]">We’re Not Like Those Big, Slow Consultancies</h2>
        <p className="text-[18px] lg:max-w-[564px] md:text-[24px] leading-[24px] md:leading-[32px] mt-[30px] text-[#191919] font-commissioner">
          We’re a lean, mean, software development machine. Our boutique outstaffing service connects you with
          no-nonsense devs who know how to deliver. No endless meetings, no complicated processes—just results.
        </p>
        <p className="text-[18px] lg:max-w-[564px] md:text-[24px] leading-[24px] md:leading-[32px] mt-[30px] font-commissioner text-[#191919">
          We skip the corporate fluff and focus on what matters: getting you the best engineers to scale your business.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="/image7.jpg"
          alt="The Codefathers"
          className="w-full max-w-[680px] rounded-[5px] h-[499px] sm:h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Section4;
