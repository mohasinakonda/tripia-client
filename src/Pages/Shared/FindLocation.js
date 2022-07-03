import React, { useState } from "react";
import { useDistrict } from "../../locationHooks/useLocation";
import SelectLocation from "../HomePage/SelectLocation";

const FindLocation = () => {
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

  const handleDivision = (event) => {
    const DivisionName = event.target.value;

    fetch("division.json")
      .then((res) => res.json())
      .then((data) => {
        const divisionWithDistrict = data.filter(
          (info) => info.division === DivisionName
        );
        const district = divisionWithDistrict.map(
          (district) => district.district
        );

        const totalDistrict = [...new Set(district)];

        setDistrict(totalDistrict);
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
    let cityName = event.target.value;
    cityName = cityName.toLowerCase();
    fetch(`http://localhost:5000/hotels/${cityName}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <form className="flex gap-3  flex-wrap">
      <SelectLocation
        handleLocation={handleDivision}
        location={divisions}
        mood="division"
      />

      <SelectLocation
        handleLocation={handleDistrict}
        location={districts}
        mood="district"
      />
      <SelectLocation
        handleLocation={handleUpazila}
        location={upazila}
        mood="upazila"
      />
    </form>
  );
};

export default FindLocation;
