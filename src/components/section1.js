const Section1 = () => {
    return (
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-[16px] md:p-8">
        {/* Left Side - Text and Button */}
        <div className="md:w-1/2 mr-4">
          <h1 className="text-[36px] font-youngSerif font-normal leading-[36px] text-[#191919] mt-[30px] sm:mt-0 md:leading-[62px] md:text-[62px] text-left">
            Hire nearshore developers in Moldova, like a local
          </h1>
          <div className="flex flex-wrap font-commissioner">
            <p className="text-lg text-[#191919] text-left text-[24px] mt-[30px] sm:mt-0 leading-[24px] sm:leading-[32px]">
                Easily <span className="font-semibold">the best nearshore spot</span> in <span className="font-semibold">Eastern Europe</span>.
            </p>
            <p className="text-lg text-[#191919] text-left text-[24px] mt-[20px] leading-[24px] sm:leading-[32px]">
                Submit your request, interview handpicked developers, and have the perfect fit onboard by next Friday.
            </p>
            <button 
              className="bg-[#D7FF43] font-instrument text-[#040404] mt-[30px] p-[16px] rounded-[50px]  border font-medium border-[#D8D8D8] text-[18px] leading-[22px]"
              onClick={() => window.open("https://calendly.com/dbujor-elevexa/30min", "_blank")}
            >
                I want cool devs &rarr;
            </button>
          </div>
        </div>
        {/* Right Side - Image */}
        <div className="md:w-1/2">
          <img src="/image1.svg" alt="Developer at work" className="w-full rounded-lg shadow-md" />
        </div>
      </section>
    );
  };
  
  export default Section1;


  