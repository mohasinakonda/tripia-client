import React, { useState } from "react";
import FindLocation from "../Shared/FindLocation";

import Banner from "./Banner";
import Hotels from "./Divisions/Hotels";

const Home = () => {
  const [hotelsInDivision, setHotelInDivision] = useState([]);
  console.log(hotelsInDivision);

  return (
    <div>
      <Banner />
      <div className=" pt-5  ">
        <h2 className="text-3xl py-4">Find your nearest hotel</h2>

        <div className="flex justify-center items-center">
          <FindLocation setHotelInDivision={setHotelInDivision} />
          <h2 className="px-5 text-3xl">To</h2>
          <FindLocation setHotelInDivision={setHotelInDivision} />
        </div>
      </div>
      <hr className="mt-2" />
      <div className="grid grid-cols-1 p-16 gap-20">
        {hotelsInDivision.map((hotel) => (
          <Hotels key={hotel._id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Home;
