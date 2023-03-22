import React from 'react';

export default function HorizontalText() {
  return (
    <div className="relative flex overflow-x-hidden lg:mt-40 mt-20">
      <div className="py-12 animate-marquee whitespace-nowrap text-[40px] font-black text-[#2D313F12]">
        <span className="text-4xl mx-4">#SCFACCRA</span>
        <span className="text-4xl mx-4">#SCFACCRA</span>
        <span className="text-4xl mx-4">#SCFACCRA</span>
        <span className="text-4xl mx-4">#SCFACCRA</span>
        <span className="text-4xl mx-4">#SCFACCRA</span>
      </div>
      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap text-[40px] font-black text-[#2D313F12]">
        <span className="text-4xl mx-4">#SCFACCRA</span>
        <span className="text-4xl mx-4">#SCFACCRA</span>
        <span className="text-4xl mx-4">#SCFACCRA</span>
        <span className="text-4xl mx-4">#SCFACCRA</span>
        <span className="text-4xl mx-4">#SCFACCRA</span>
      </div>
    </div>
  );
}
