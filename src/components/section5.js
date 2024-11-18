import React, { useState, useEffect, useRef } from 'react';

const Section5 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isGifLoaded, setIsGifLoaded] = useState(false);
  const [isGifLoaded2, setIsGifLoaded2] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer1.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref1.current) {
      observer1.observe(ref1.current);
    }

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
          observer2.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref2.current) {
      observer2.observe(ref2.current);
    }

    return () => {
      if (observer1 && observer1.disconnect) {
        observer1.disconnect();
      }
      if (observer2 && observer2.disconnect) {
        observer2.disconnect();
      }
    };
  }, []);

  return (
    <section className="max-w-[912px] mt-[60px] sm:mt-[180px] px-[16px] lg:px-0 mx-auto text-center" id='process'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] lg:grid-cols-2 lg:gap-[16px]">
        {/* They Section */}
        <div className="bg-[#F2F2F2] text-[#191919] rounded-lg text-left p-[45px] order-2 lg:order-1">
          <h3 className="text-[28px] leading-[30px] md:text-[36px] md:leading-[42px] font-youngSerif">They</h3>
          <ul className="space-y-4 text-[16px] md:text-[18px] mt-[15px] font-commissioner">
            <li className="flex items-start">
              <img
                src="/icon1black.png"
                alt="icon1"
                className="mr-2 w-[24px] h-[24px] mt-[2px]"
              />
              <span>Reduce your control over the nearshore developers, leading to misalignment with your local team</span>
            </li>
            <li className="flex items-start">
              <img
                src="/icon1black.png"
                alt="icon1"
                className="mr-2 w-[24px] h-[24px] mt-[2px]"
              />
              <span>Charge hidden fees and high hourly rates</span>
            </li>
            <li className="flex items-start">
              <img
                src="/icon1black.png"
                alt="icon1"
                className="mr-2 w-[24px] h-[24px] mt-[2px]"
              />
              <span>Treat developers as their own employees, resulting in cultural differences with your local squad</span>
            </li>
            <li className="flex items-start">
              <img
                src="/icon1black.png"
                alt="icon1"
                className="mr-2 w-[24px] h-[24px] mt-[2px]"
              />
              <span>Operate with lengthy and bureaucratic processes</span>
            </li>
            <li className="flex items-start">
              <img
                src="/icon1black.png"
                alt="icon1"
                className="mr-2 w-[24px] h-[24px] mt-[2px]"
              />
              <span>Assign developers to work on multiple parallel projects, whenever possible</span>
            </li>
          </ul>
        </div>

        {/* Image 1 */}
        <div className="order-1 lg:order-2" ref={ref1}>
          <img
            src={isVisible ? '/gif/2.gif' : '/image8.jpg'}
            alt="They Section Image"
            className="w-full h-auto lg:h-full object-cover rounded-[5px]"
            onLoad={() => setIsGifLoaded(true)}
            style={{ display: isGifLoaded ? 'block' : 'none' }}
          />
          {!isGifLoaded && (
            <img
              src="/jpg/image8.jpg"
              alt="They Section Placeholder"
              className="w-full h-auto lg:h-full object-cover rounded-[5px]"
            />
          )}
        </div>

        {/* Us Section */}
        <div className="bg-[#3C3C3C] text-white p-[45px] rounded-lg text-left order-4 lg:order-4">
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
            href="https://calendly.com/dbujor-elevexa/30min"
            target="_blank"
            className="inline-block bg-[#D7FF43] text-[#191919] p-[16px] rounded-[50px] border border-[#D8D8D8] font-instrument font-medium mt-[15px] text-[18px] leading-[22px]"
          >
            Book a call &rarr;
          </a>
        </div>

        {/* Image 2 */}
        <div className="order-3 lg:order-3" ref={ref2}>
          <img
            src={isVisible2 ? '/gif/3.gif' : '/image9.jpg'}
            alt="Us Section Image"
            className="w-full h-auto lg:h-full object-cover rounded-[5px]"
            onLoad={() => setIsGifLoaded2(true)}
            style={{ display: isGifLoaded2 ? 'block' : 'none' }}
          />
          {!isGifLoaded2 && (
            <img
              src="/jpg/image9.jpg"
              alt="Us Section Placeholder"
              className="w-full h-auto lg:h-full object-cover rounded-[5px]"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Section5;
