import React from 'react';

const Section5 = () => {
  return (
    <section className="max-w-[912px] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center" id='process'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2 lg:gap-8">
        {/* They Section */}
        <div className="bg-white text-[#191919] p-8 rounded-lg text-left order-2 lg:order-1">
          <h3 className="text-[28px] leading-[30px] md:text-[36px] md:leading-[42px] font-youngSerif mb-4">They</h3>
          <ul className="space-y-4 text-[16px] md:text-[18px] font-commissioner">
            <li className="flex items-start">
            <img
              src="/assets/icon1black.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>Reduce your control over the nearshore developers, leading to misalignment with your local team</span>
            </li>
            <li className="flex items-start">
            <img
              src="/assets/icon1black.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>Charge hidden fees and high hourly rates</span>
            </li>
            <li className="flex items-start">
            <img
              src="/assets/icon1black.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>Treat developers as their own employees, resulting in cultural differences with your local squad</span>
            </li>
            <li className="flex items-start">
            <img
              src="/assets/icon1black.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>Operate with lengthy and bureaucratic processes</span>
            </li>
            <li className="flex items-start">
            <img
              src="/assets/icon1black.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>Assign developers to work on multiple parallel projects, whenever possible</span>
            </li>
          </ul>
        </div>

        {/* Image 1 */}
        <div className="order-1 lg:order-2">
          <img
            src="/image8.jpg"
            alt="They Section Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Us Section */}
        <div className="bg-[#3C3C3C] text-white p-8 rounded-lg text-left order-4 lg:order-3">
          <h3 className="text-[28px] leading-[30px] md:text-[36px] md:leading-[42px] font-youngSerif mb-4">Us</h3>
          <ul className="space-y-4 text-white text-[16px] md:text-[18px] font-commissioner">
            <li className="flex items-start">
              <img
              src="/assets/icon1white.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
            
              <span>You're in full control of the nearshore development team</span>
            </li>
            <li className="flex items-start">
            <img
              src="/assets/icon1white.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>Our pricing is fair and straightforward, with no hidden fees. No more "it depends"</span>
            </li>
            <li className="flex items-start">
            <img
              src="/assets/icon1white.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>Your developers become part of your crew, fitting seamlessly into your culture</span>
            </li>
            <li className="flex items-start">
            <img
              src="/assets/icon1white.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>We keep our paperwork fast and flexible, so we can easily adapt to your needs</span>
            </li>
            <li className="flex items-start">
            <img
              src="/assets/icon1white.jpg"
              alt="icon1"
              className="mr-2 w-[24px] h-[24px] mt-[2px]"
            />
              <span>Your nearshore developers focus solely on your project, without juggling multiple tasks</span>
            </li>
          </ul>
          <a
            href="https://calendly.com/dbujor-elevexa/30min" target="_blank"
            className="inline-block bg-lime-400 text-black py-3 px-6 rounded-full font-semibold mt-6 text-[18px] leading-[22px]"
          >
            Book a call
          </a>
        </div>

        {/* Image 2 */}
        <div className="order-3 lg:order-4">
          <img
            src="/image9.jpg"
            alt="Us Section Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Section5;
