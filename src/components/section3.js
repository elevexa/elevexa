import React from 'react';

const Section3 = () => {
  return (
    <section className="max-w-[912px] mx-auto px-[16px] mt-[60px] sm:mt-[180px]  text-center" id='work'>
      <h2 className="text-[36px] leading-[38px] font-bold text-[#191919] font-youngSerif">You Should Not Work with Us Before You Tried...</h2>
      <p className="text-[18px] leading-[24px] font-commissioner mt-[45px] text-[#191919]">
        Businesses often hit us up with problems they could totally handle on their own. And honestly,
        most of the time, they wouldn’t even need to spend a cent.
      </p>
      <p className="text-[18px] leading-[24px] font-commissioner text-[#191919] mt-[25px] font-semibold">
        So, before working with us, here are a few things you might want to try first.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mt-[45px] sm:mt-0">
        {/* Referrals */}
        <div className="bg-white text-[#191919] p-[45px] rounded-lg">
          <img src="/image2.jpg" alt="Referrals" className="w-[358px] rounded-[5px] h-[244px] object-cover" />
          <h3 className="text-[28px] text-left  leading-[30px] mt-[25px] font-youngSerif">Referrals</h3>
          <p className='font-commissioner text-left mt-[20px] font-[18px] leading-[24px]'>
            How many developers have you successfully hired for your company? When you asked your team or
            network, "Do you know anyone else who might be interested in joining us?" what kind of
            feedback did you get?
          </p>
        </div>

        {/* LinkedIn & Social Branding */}
        <div className="bg-white  text-[#191919] p-[45px] rounded-lg">
          <img src="/image3.jpg" alt="LinkedIn & Social Branding" className="rounded-[5px] w-[358px] h-[244px] object-cover" />
          <h3 className="text-[28px] text-left leading-[30px] mt-[25px] font-youngSerif">LinkedIn & Social Branding</h3>
          <p className='font-commissioner text-left  mt-[20px] font-[18px] leading-[24px] '>
            Building a social presence is a simple way to attract inbound candidates. Sharing daily posts
            about your company culture, perks, benefits, or highlighting employees is a quick and
            cost-free way to drive more interest and applications.
          </p>
        </div>

        {/* Active Headhunting */}
        <div className="bg-white  text-[#191919] p-[45px] rounded-lg">
          <img src="/image4.jpg" alt="Active Headhunting" className=" w-[358px] rounded-[5px] h-[244px] object-cover" />
          <h3 className="text-[28px] text-left  leading-[30px] mt-[25px]  font-youngSerif">Active Headhunting</h3>
          <p className='font-commissioner font-[18px] text-left mt-[20px] leading-[24px]'>
            Got an hour to spare each day? Use it to actively search and reach out to potential candidates.
            You know your company and the perfect developer profile better than anyone, so why not take
            matters into your own hands and do the hiring yourself?
          </p>
        </div>

        {/* Setting Up A Nearshore Location Yourself */}
        <div className="bg-white  text-[#191919] p-[45px] rounded-lg">
          <img src="/image5.jpg" alt="Setting Up A Nearshore Location Yourself" className="rounded-[5px] w-[358px] h-[244px] object-cover" />
          <h3 className="text-[28px] text-left leading-[30px] mt-[25px]  font-youngSerif">Setting Up A Nearshore Location Yourself</h3>
          <p className='font-commissioner text-left  mt-[20px] font-[18px] leading-[24px]'>
            Start by registering your business and making sure you’re covered with local legal and tax
            regulations. Then, hire local talent. Finally, get your infrastructure in place, whether
            that’s an office space or remote work tools. You know your business better than anyone—why
            not take charge and handle it yourself?
          </p>
        </div>
      </div>
      <div className='w-full bg-[#3C3C3C] mt-[45px] p-[45px] rounded-[5px] text-center'>
        <div className="max-w-xl mx-auto">
            <img
            src="/image6.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-[1.5px] border-[#D7FF43] object-cover"
            />
            <h2 className="text-[28px] mt-[15px] font-youngSerif text-[#D7FF43]">And Just So You Know,</h2>
            <p className="text-white text-[18px] mt-[15px] leading-[24px] font-commissioner">
            we’re not here to oversee your developers’ day-to-day tasks. Our job is to connect you with the
            right developers at the right moment in the perfect location, while also ensuring they stick to
            local legal and tax regulations throughout their time with you. If you notice any gaps or issues
            in your current hiring approach, this might not be the best time for us to team up.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
