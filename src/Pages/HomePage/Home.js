import React, { useState } from "react";

import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Division from "./Division";
import Dhaka from "./Divisions/Dhaka";
import Hotels from "./Hotels";

const Home = () => {
  const [hotelsInDivision, setHotelInDivision] = useState([]);
  const [districts, setDistrict] = useState([]);
  const divisions = [
    "Dhaka",
    "Mymensingh",
    "Khulna",
    "Sylhet",
    "Rajshahi",
    "Rangpur",
    "Barisal",
    "Chittagong",
  ];

  const district = districts.map((district) => district.district);

  const totalDistrict = [...new Set(district)];

  // console.log(totalDistrict);

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2  grid-cols-2 gap-2 justify-center pt-5  ">
        {divisions.map((division, i) => (
          <Division
            key={i + 1}
            division={division}
            setHotelInDivision={setHotelInDivision}
            setDistrict={setDistrict}
          />
        ))}
      </div>
      <div className="flex">
        <div className="flex-1 w-[30%]">
          <h2 className="text-3xl ">Category</h2>
          <div className="grid grid-cols-1">
            {totalDistrict.map((data) => (
              <label htmlFor="dhaka">
                <input
                  className="m-4 text-xl"
                  type="checkbox"
                  name={data}
                  id=""
                />
                {data}
              </label>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 p-[80px] grow w-[60%] gap-20">
          {hotelsInDivision.map((hotel) => (
            <Dhaka key={hotel._id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
