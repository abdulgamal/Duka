import React from "react";

function Banner() {
  return (
    <div className="hidden md:block py-8">
      <div className="grid grid-flow-col grid-rows-2 grid-cols-4 gap-4 w-[80%] mx-auto">
        <div className="row-span-2 col-span-2 flex flex-col justify-center items-center bg-[#E7F2F3]">
          <img src="fraser.png" alt="" className="h-80 w-80" />
          <p className="text-[#047A7E] font-bold text-2xl">17% off</p>
          <p className="font-semibold text-gray-600">Garden furniture chair</p>
        </div>
        <div className="col-span-2 bg-[#E7F2F3] flex justify-between items-center p-4">
          <div>
            <p className="text-[#047A7E] font-bold text-2xl">20% off</p>
            <p className="font-semibold text-gray-600">Living room sofa</p>
          </div>
          <img src="sofa.jpeg" alt="" className="h-60 w-60" />
        </div>
        <div className="bg-[#E7F2F3] p-4 flex flex-col justify-center items-center">
          <img src="darkLeg.jpeg" alt="" className="h-36 w-36" />
        </div>
        <div className="bg-[#E7F2F3] p-4 flex flex-col justify-center items-center">
          <img src="lounge.jpeg" alt="" className="h-36 w-36" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
