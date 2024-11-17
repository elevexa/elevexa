import React, { useState, useEffect, useRef } from 'react';

const Section8 = () => {
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
      className="max-w-[1376px] mx-auto px-[16px] mt-[60px] sm:mt-[180px] lg:px-0 flex flex-col-reverse lg:flex-row items-center lg:items-start text-left"
    >
      <div className="lg:w-1/2 lg:pr-[16px] text-[#191919]">
        <h2 className="md:text-[62px] lg:max-w-[571px] md:leading-[62px] text-[36px] leading-[36px] mt-[30px] md:mt-0 font-youngSerif">
          Ready for Developers Who Actually Deliver?
        </h2>
        <p className="text-[18px] leading-[24px] lg:max-w-[571px] lg:text-[24px] lg:leading-[32px] mt-[30px] font-commissioner">
          Stop burning time and money on subpar devs. Get dedicated pros who bring your vision to life—fast.
        </p>
        <a
          href="https://calendly.com/dbujor-elevexa/30min"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[#D7FF43] text-[#040404] mt-[30px] p-[16px] rounded-[50px] font-medium font-instrument text-[18px] leading-[22px]"
        >
          Book a call &rarr;
        </a>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          src={isVisible ? '/gif/8.gif' : '/image14.jpg'}
          alt="Ready for Developers"
          className="w-full max-w-[680px] h-auto object-cover rounded-[5px]"
          style={{ maxHeight: '410px', display: isGifLoaded ? 'block' : 'none' }}
          onLoad={handleGifLoad}
        />
        {!isGifLoaded && (
          <img
            src="/image14.jpg"
            alt="Ready for Developers Placeholder"
            className="w-full max-w-[680px] h-auto object-cover rounded-[5px]"
            style={{ maxHeight: '410px' }}
          />
        )}
      </div>
    </section>
  );
};

export default Section8;
