import React from 'react';
import SpawnLogo from '../utils/SpawnLogo/Index';

export default function Footer() {
  return (
    <footer className="w-screen lg:p-30 md:px-10 md:py-40 px-2 py-10 bg-[#1A1B1F] lg:h-screen">
      <div className="text-center lg:text-[226px] md:text-[150px] text-[76px] text-[#E6E6E6] font-black lg:leading-[170px] md:leading-[120px] leading-[70px]">
        THANK YOU FOR YOUR SUPPORT
      </div>
      <div>
        <SpawnLogo />
      </div>
    </footer>
  );
}
