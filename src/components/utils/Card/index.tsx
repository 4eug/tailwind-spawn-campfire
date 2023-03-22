import React from 'react';

export default function ReserveCard() {
  return (
    <section className="lg:absolute lg:left-[900px] lg:top-[560px] md:m-[40px] flex justify-center items-center ">
      <div className="reserve-card flex-col">
        <div className="flex">
          <h3 className="text-[20px] text-[#EB6A4B] font-black hover:text-[#373B49] ">
            25TH MARCH 2023
          </h3>
        </div>
        <h4 className="text-[40px] font-black lg:mt-10 md:mt-6 mt-6">
          RESERVE A SPOT
        </h4>
      </div>
    </section>
  );
}
