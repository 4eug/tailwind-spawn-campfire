import React from 'react';
import Image from 'next/image';

export default function SpawnLogo() {
  return (
    <div className="absolute lg:top-[1300px] lg:right-[90px] md:top-[1300px] md:right-[50px] sm:bottom-[-480px] sm:right-[10px] top-[1200px] right-[10px]">
      <Image
        className="lg:w-[300px] lg:h-[338px] md:w-[250px] md:h-[280px] w-[104px] h-[116px]"
        width={300}
        height={338}
        src="/Spawn Logo.svg"
        alt="Logo"
      />
    </div>
  );
}
