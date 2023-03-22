import React from 'react';
import Image from 'next/image';

export default function Arrow() {
  return (
    <div>
      <div className=" ">
        <Image
          className="lg:flex lg:absolute lg:left-[1280px] lg:top-[140px] lg:w-[136px] lg:h-[441px] md:flex md:absolute md:left-[734px] md:top-[230px] md:w-[136px] md:h-[441px] hidden"
          width={1937}
          height={441}
          src="/arrow.svg"
          alt="Logo"
        />
      </div>
    </div>
  );
}
