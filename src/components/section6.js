import React from 'react';

const Section6 = () => {
  return (
    <section className="max-w-[1376px] mx-auto px-[16px] mt-[60px] sm:mt-[180px] md:py-16 sm:px-6 lg:px-8 text-center">
      <h2 className="text-[36px] leading-[38px] lg:text-4xl font-youngSerif text-[#191919]">The Grand Qualification</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
        {/* The Résumé Rumble */}
        <div className="bg-white p-[36px] mt-[30px] rounded-[5px] text-left">
          <img
            src="/image10.jpg"
            alt="The Résumé Rumble"
            className="w-full md:max-w-[242px] md:h-[244px] object-cover rounded-[5px] mx-auto"
          />
          <img
            src="/assets/icon2.jpg"
            alt="icone"
            className="w-[40px] h-[40px] my-[20px]"
          />
          <h3 className="text-xl font-semibold font-youngSerif text-[#191919]">The Résumé Rumble</h3>
          <p className="text-[#191919] text-[18px] leading-[24px] mt-[20px] font-commissioner">
            We skim résumés and LinkedIn profiles and we instantly cut any devs who don’t shine.
          </p>
        </div>

        {/* The Soft Skills Showdown */}
        <div className="bg-white p-[36px] rounded-[5px] text-left">
          <img
            src="/image11.jpg"
            alt="The Soft Skills Showdown"
            className="w-full md:max-w-[242px] sm:mr-[20px] md:h-[244px] object-cover rounded-[5px] mx-auto"
          />
          <img
            src="/assets/icon3.jpg"
            alt="icone"
            className="w-[40px] h-[40px] mt-[20px]"
          />
          <h3 className="text-[28px] leading-[30px] mt-[20px] font-youngSerif text-[#191919]">The Soft Skills Showdown</h3>
          <p className="text-[#191919] text-[18px] leading-[24px] mt-[20px] font-commissioner">
            Surviving devs jump into a screening call that’s to prove they are humans.
          </p>
        </div>

        {/* Checkpoint: Your Hiring Manager */}
        <div className="bg-white p-[36px] rounded-[5px] text-left">
          <img
            src="/image12.jpg"
            alt="Checkpoint: Your Hiring Manager"
            className="w-full md:max-w-[242px] md:h-[244px] object-cover rounded-[5px] mx-auto"
          />
          <img
            src="/assets/icon4.jpg"
            alt="icone"
            className="w-[40px] h-[40px] mt-[20px]"
          />
          <h3 className="text-[28px] leading-[30px] mt-[20px] font-youngSerif text-[#191919]">Checkpoint: Your Hiring Manager</h3>
          <p className="text-[#191919] text-[18px] leading-[24px] mt-[20px] font-commissioner">
            Your in-house hiring manager reviews their skills and attitude. The best pass, the pretenders, well… they don’t.
          </p>
        </div>

        {/* The Chosen Individuals */}
        <div className="bg-[#3C3C3C] p-[36px] rounded-[5px] text-left text-white">
          <img
            src="/image13.jpg"
            alt="The Chosen Individuals"
            className="w-full md:max-w-[242px] md:h-[244px] object-cover rounded-[5px] mx-auto"
          />
          <img
            src="/assets/icon5.jpg"
            alt="icone"
            className="w-[40px] h-[40px] mt-[20px]"
          />
          <h3 className="text-[28px] leading-[30px] mt-[20px] font-youngSerif">The Chosen Individuals</h3>
          <p className='text-[18px] leading-[24px] mt-[20px] font-commissioner'>
            Those with a gold-star work ethic are ready to get started in two weeks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section6;
