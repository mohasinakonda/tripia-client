import React, { useState } from "react";
import FindLocation from "../Shared/FindLocation";

import Banner from "./Banner";
// import Division from "./Division";
import Hotels from "./Divisions/Hotels";
// import Hotels from "./Hotels";
// import SelectLocation from "./SelectLocation";

const Home = () => {
  const [hotelsInDivision, setHotelInDivision] = useState([]);

  return (
    <div>
      <Banner />
      <div className=" pt-5  ">
        <h2 className="text-3xl py-4">Find your nearest hotel</h2>

        <FindLocation setHotelInDivision={setHotelInDivision} />
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
