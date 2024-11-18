import React, { useState, useEffect, useRef } from 'react';

const Section1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isGifLoaded, setIsGifLoaded] = useState(false);
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

  const handleGifLoad = () => {
    setIsGifLoaded(true);
  };

  return (
    <section
      ref={ref}
      className="max-w-[1376px] mx-auto flex flex-col-reverse md:flex-row mt-[48px] sm:mt-0 items-center md:items-start justify-between px-[16px] md:mt-[45px] md:px-0"
    >
      {/* Left Side - Text and Button */}
      <div className="md:w-1/2 mr-4">
        <h1 className="text-[36px] font-youngSerif font-normal leading-[36px] text-[#191919] mt-[30px] sm:mt-0 md:leading-[62px] md:text-[62px] text-left">
          Hire nearshore developers in Moldova, like a local
        </h1>
        <div className="flex flex-wrap font-commissioner">
          <p className="text-lg text-[#191919] text-left text-[24px] mt-[30px] sm:mt-[45px] leading-[24px] sm:leading-[32px]">
            Easily <span className="font-semibold">the best nearshore spot</span> in <span className="font-semibold">Eastern Europe</span>.
          </p>
          <p className="text-lg text-[#191919] w-full text-left text-[24px] mt-[20px] sm:mt-[30px] leading-[24px] sm:leading-[32px]">
            <p className='lg:max-w-[467px]'>Submit your request, interview handpicked developers, and have the perfect fit onboard by next Friday.</p>
          </p>
          <button
            className="bg-[#D7FF43] font-instrument text-[#040404] mt-[30px] p-[16px] rounded-[50px] border font-medium border-[#D8D8D8] text-[18px] leading-[22px]"
            onClick={() => window.open("https://calendly.com/dbujor-elevexa/30min", "_blank")}
          >
            I want cool devs &rarr;
          </button>
        </div>
      </div>
      {/* Right Side - Image */}
      <div className="md:w-1/2">
        {isVisible ? (
          <img
            src="/gif/1.gif"
            alt="Developer at work"
            className="w-full rounded-lg shadow-md"
            onLoad={handleGifLoad}
            style={{ display: isGifLoaded ? 'block' : 'none' }}
          />
        ) : null}
        {!isGifLoaded && (
          <img
            src="/image1.svg"
            alt="Developer at work"
            className="w-full rounded-lg shadow-md"
          />
        )}
      </div>
    </section>
  );
};

export default Section1;
