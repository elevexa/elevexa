import React from 'react';

const Footer = () => {
  const currYear = new Date().getFullYear()
  return (
    <footer className="w-full py-8 mt-[60px] text-center text-[#C2C2C2] font-commissioner">
      <p className="text-[14px] leading-[24px]">
        &copy; {currYear} SRL. "OUTSELLX"<br />
        IDNO: 1024600020694<br />
        info@elevexa.io
      </p>
    </footer>
  );
};

export default Footer;
