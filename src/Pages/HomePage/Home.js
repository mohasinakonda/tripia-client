import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Division from "./Division";
import Dhaka from "./Divisions/Dhaka";
import Hotels from "./Hotels";

const Home = () => {
  const [hotelsInDivision, setHotelInDivision] = useState([]);
  const divisions = [
    "Dhaka",
    "Mymensingh",
    "Khulna",
    "Syllet",
    "Rajshahi",
    "Rongpur",
    "Borishal",
    "Chitagongz",
  ];
  console.log(hotelsInDivision);
  return (
    <div>
      <Banner />
      <div className="grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2  grid-cols-2 gap-2 justify-center pt-5  ">
        {divisions.map((division, i) => (
          <Division
            key={i + 1}
            division={division}
            setHotelInDivision={setHotelInDivision}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 p-[80px] gap-20">
        {hotelsInDivision.map((hotel) => (
          <Dhaka key={hotel._id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Home;
