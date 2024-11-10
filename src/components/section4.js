import React from 'react';

const Section4 = () => {
  return (
    <section className="max-w-[1376px] mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center lg:items-start text-left">
      <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
        <h2 className="text-[36px] text-[#191919] leading-[36px] lg:leading-[62px] font-youngSerif lg:text-[62px] font-bold mb-4">We’re Not Like Those Big, Slow Consultancies</h2>
        <p className="text-[24px] leading-[32px] text-gray-800 mb-4 my-[45px] font-commissioner">
          We’re a lean, mean, software development machine. Our boutique outstaffing service connects you with
          no-nonsense devs who know how to deliver. No endless meetings, no complicated processes—just results.
        </p>
        <p className="text-[24px] leading-[32px] font-commissioner text-lg text-gray-800">
          We skip the corporate fluff and focus on what matters: getting you the best engineers to scale your business.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img
          src="/image7.jpg"
          alt="The Codefathers"
          className="w-full max-w-[680px] rounded-[5px] h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Section4;
