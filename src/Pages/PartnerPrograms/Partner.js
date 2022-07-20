import React from "react";

const Partner = () => {
  return (
    <div>
      <div className="relative border px-[60px] py-[40px]  rounded-full  lg:h-96 lg:w-[845px] sm:h-[845px] sm:w-96  ">
        <div className="border-dotted pt-12">
          <div className="grid lg:grid-cols-3 items-center justify-center ">
            <div className="relative bg-green-500 text-center mt-8 p-5">1</div>
            <div className="relative  text-center">2</div>
            <div className="relative  text-center mt-8">3</div>
          </div>

          <div className="relative">4</div>
          <div className="grid lg:grid-cols-3 ">
            <div className="relative">5</div>
            <div className="relative">6</div>
            <div className="relative ">7</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
