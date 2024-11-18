import React, { useState, useEffect, useRef } from 'react';

const Section7 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className="max-w-[1376px] mx-auto mt-[60px] sm:mt-[180px] px-[16px] lg:px-0 text-center"
      id='pricing'
    >
      <h2 className="text-[36px] leading-[38px] text-[#191919] font-youngSerif">$$$</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:mt-[45px]">
        {/* The Quick Fix */}
        <div className="bg-[#F2F2F2] p-[45px] rounded-lg text-left text-[#191919]">
          <h3 className="text-[28px] font-youngSerif leading-[30px]">The Quick Fix</h3>
          <p className="text-[18px] leading-[24px] mt-[20px] font-commissioner">Perfect for small teams or temporary roles</p>
          <ul className="space-y-4 text-[18px] font-commissioner mt-[20px]">
            <li className="flex items-start">
              <img
                src='/assets/icon1black.jpg'
                alt="icon1"
                className="mr-2 w-[24px] h-[24px] mt-[2px]"
              />
              <span>1-5 devs</span>
            </li>
            <li className="flex items-start">
              <img
                src='/assets/icon1black.jpg'
                alt="icon1"
                className="mr-2 w-[24px] h-[24px] mt-[2px]"
              />
              <span>Fixed hourly rate</span>
            </li>
            <li className="flex items-start">
              <img
                src='/assets/icon1black.jpg'
                alt="icon1"
                className="mr-2 w-[24px] h-[24px] mt-[2px]"
              />
              <span>Cancel your contract within 4 weeks</span>
            </li>
          </ul>
          <p className="font-commissioner mt-[20px] text-[16px] leading-[17px]">Starting from</p>
          <p className="font-commissioner mt-[5px]">
            <span className="text-[28px] leading-[30px] font-semibold">
              <span className='relative text-[18px] top-[-8px] mr-[1.5px]'>€</span>20/hour
            </span>
          </p>
          <a
            href="https://calendly.com/dbujor-elevexa/30min"
            target="_blank"
            className="inline-block bg-[#D7FF43] text-[#040404] p-[16px] mt-[20px]  font-medium rounded-[50px] font-instrument text-[18px] leading-[22px]"
          >
            Book a call &rarr;
          </a>
        </div>

        {/* The Open Book */}
        <div className="bg-white p-8 rounded-lg text-left text-[#191919] bg-[#F2F2F2]">
          <h3 className="text-[28px] font-youngSerif leading-[30px]">The Open Book</h3>
          <p className="font-commissioner leading-[24px] mt-[20px] text-[18px]">Perfect for mid-sized, long term teams</p>
          <ul className="space-y-4 text-[18px] font-commissioner  mt-[20px]">
            <li className="flex items-start">
              <img
                src={isVisible ? '/assets/icon1black.jpg' : '/assets/icon1placeholder.jpg'}
                alt="icon1"
                className="mr-2 w-[24px] h-[24px] mt-[2px]"
              />
              <span>6-12 devs</span>
            </li>
            <li className="flex items-start">
              <img
                src={isVisible ? '/assets/icon1black.jpg' : '/assets/icon1placeholder.jpg'}
                alt="icon1"
                className="mr-2 w-[24px] h-[24px] mt-[2px]"
              />
              <span>You're in control of the devs' salary</span>
            </li>
            <li className="flex items-start">
              <img
                src={isVisible ? '/assets/icon1black.jpg' : '/assets/icon1placeholder.jpg'}
                alt="icon1"
                className="mr-2 w-[24px] h-[24px] mt-[2px]"
              />
              <span>Cancel your contract within 8 weeks</span>
            </li>
          </ul>
          <p className="font-commissioner mt-[20px] text-[16px] leading-[17px]">Management fee out of dev’s salary</p>
          <p className="font-commissioner mt-[5px]">
            <span className="text-[28px] leading-[30px] font-semibold mt-[5px]">35%</span>
          </p>
          <a
            href="https://calendly.com/dbujor-elevexa/30min"
            target="_blank"
            className="inline-block bg-[#D7FF43] text-[#040404] p-[16px] mt-[20px] rounded-[50px]  font-medium font-instrument text-[18px] leading-[22px]"
          >
            Book a call &rarr;
          </a>
        </div>

        {/* Enterprise */}
        <div className="bg-white p-8 rounded-lg text-left text-[#191919] bg-[#F2F2F2]">
          <h3 className="text-[28px] font-youngSerif leading-[30px]">Enterprise</h3>
          <p className="font-commissioner leading-[24px] mt-[20px] text-[18px]">Perfect for large teams</p>
          <ul className="space-y-4 text-[18px] font-commissioner mt-[20px]">
            <li className="flex items-start">
              <img
                src={isVisible ? '/assets/icon1black.jpg' : '/assets/icon1placeholder.jpg'}
                alt="icon1"
                className="mr-2 w-[24px] h-[24px] mt-[2px]"
              />
              <span>13+ devs</span>
            </li>
            <li className="flex items-start">
              <img
                src={isVisible ? '/assets/icon1black.jpg' : '/assets/icon1placeholder.jpg'}
                alt="icon1"
                className="mr-2 w-[24px] h-[24px] mt-[2px]"
              />
              <span>Set up your own nearshore legal entity</span>
            </li>
            <li className="flex items-start">
              <img
                src={isVisible ? '/assets/icon1black.jpg' : '/assets/icon1placeholder.jpg'}
                alt="icon1"
                className="mr-2 w-[24px] h-[24px] mt-[2px]"
              />
              <span>We support every step in-between</span>
            </li>
          </ul>
          <p className="font-commissioner mt-[20px] text-[16px] leading-[17px]">To be discussed</p>
          <p className="font-commissioner mt-[5px]">
            <span className="text-[28px] leading-[30px] font-semibold mt-[5px]">Contact Us</span>
          </p>
          <a
            href="https://calendly.com/dbujor-elevexa/30min"
            target="_blank"
            className="inline-block bg-[#D7FF43] text-[#040404] p-[16px] mt-[20px] rounded-[50px] font-medium font-instrument text-[18px] leading-[22px]"
          >
            Book a call &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section7;
