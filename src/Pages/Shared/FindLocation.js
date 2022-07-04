import React, { useState } from "react";
import useLocation, { useDistrict } from "../../locationHooks/useLocation";
import SelectLocation from "../HomePage/SelectLocation";

const FindLocation = ({ setHotelInDivision }) => {
  const [districts, setDistrict] = useState([]);
  const [upazila, setUpazila] = useState([]);
  const [allLocations] = useLocation();

  // divisions
  let divisions = allLocations.map((data) => data.division);
  divisions = [...new Set(divisions)];

  const handleDivision = (event) => {
    const DivisionName = event.target.value;
    fetch(`http://localhost:5000/hotels/${DivisionName}`)
      .then((res) => res.json())
      .then((data) => setHotelInDivision(data));
    const divisionWithDistrict = allLocations.filter(
      (info) => info.division === DivisionName
    );
    const district = divisionWithDistrict.map((district) => district.district);
    const totalDistrict = [...new Set(district)];

    setDistrict(totalDistrict);
  };
  // handle district
  const handleDistrict = (event) => {
    const district = event.target.value;
    fetch(`http://localhost:5000/hotels/${district}`)
      .then((res) => res.json())
      .then((data) => setHotelInDivision(data));
    const districtWithUpazila = allLocations.filter(
      (info) => info.district === district
    );
    const upaliza = districtWithUpazila?.map((data) => data.upazila);

    setUpazila(upaliza);
  };

  const handleUpazila = (event) => {
    let cityName = event.target.value;
    fetch(`http://localhost:5000/hotels/${cityName}`)
      .then((res) => res.json())
      .then((data) => setHotelInDivision(data));
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
