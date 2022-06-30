import React, { useState } from "react";

import Banner from "./Banner";
import Division from "./Division";
import Dhaka from "./Divisions/Dhaka";
import Hotels from "./Hotels";
import SelectLocation from "./SelectLocation";

const Home = () => {
  const [hotelsInDivision, setHotelInDivision] = useState([]);
  const [districts, setDistrict] = useState([]);
  const [upazila, setUpazila] = useState([]);
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

  const handleDivision = (event) => {
    const DivisionName = event.target.value;

    fetch(`http://localhost:5000/hotels/${DivisionName}`)
      .then((res) => res.json())
      .then((data) => setHotelInDivision(data));

    fetch("division.json")
      .then((res) => res.json())
      .then((data) => {
        const divisionWithDistrict = data.filter(
          (info) => info.division === DivisionName
        );

        setDistrict(divisionWithDistrict);
      });
  };
  // handle district
  const handleDistrict = (event) => {
    const district = event.target.value;
    fetch("division.json")
      .then((res) => res.json())
      .then((data) => {
        const districtWithUpazila = data.filter(
          (info) => info.district === district
        );
        const upaliza = districtWithUpazila?.map((data) => data.upazila);

        setUpazila(upaliza);
      });
  };
  const handleUpazila = (event) => {
    console.log(event.target.value);
    /* fetch(`http://localhost:5000/hotels/${DivisionName}`)
      .then((res) => res.json())
      .then((data) => setHotelInDivision(data)); */
  };

  return (
    <div>
      <Banner />
      <div className=" pt-5  ">
        <h2 className="text-3xl py-4">Find your nearest hotel</h2>
        <form className="flex gap-3  flex-wrap">
          <SelectLocation
            handleLocation={handleDivision}
            location={divisions}
            mood="division"
          />

          <SelectLocation
            handleLocation={handleDistrict}
            location={totalDistrict}
            mood="district"
          />
          <SelectLocation
            handleLocation={handleUpazila}
            location={upazila}
            mood="upazila"
          />
        </form>
      </div>
      <hr className="mt-2" />
      <div className="grid grid-cols-1 p-16 gap-20">
        {hotelsInDivision.map((hotel) => (
          <Dhaka key={hotel._id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Home;
