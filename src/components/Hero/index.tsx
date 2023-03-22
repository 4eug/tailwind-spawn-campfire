import React from 'react';
import Arrow from '../utils/Arrow/index';
import ReserveCard from '../utils/Card';
import HorizontalText from '../utils/Text/HorizontalText';

export default function Hero() {
  return (
    <section className="">
      <div className="w-full h-[680px] md:px-[40px] px-[16px]">
        <h1 className="lg:text-[150px] md:text-[100px] text-[#373B49] text-[64px] lg:leading-[136px] md:leading-[100px] leading-[66px] font-black">
          PROMOTING{' '}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#599C9B,#0D2F65,#DF6F53,#599C9B)]">
            {' '}
            ESPORT AS THE FUTURE{' '}
          </span>
          OF COMPETITIVE SPORTS FOR THE YOUNGER GENERATION
        </h1>
      </div>
      <div className="">
        <Arrow />
      </div>
      <ReserveCard />
      <HorizontalText />
    </section>
  );
}
