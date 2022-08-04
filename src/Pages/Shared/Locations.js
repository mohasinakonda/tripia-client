import React, { useState } from "react";
import useLocation from "../../locationHooks/useLocation";
import SelectLocation from "../HomePage/SelectLocation";

const Locations = ({
  setLocalUpazila,
  setlocatlDistrict,
  setlocalDivision,
}) => {
  const [allLocations, setAllLocations] = useLocation([]);

  const [districts, setDistrict] = useState([]);
  const [upazila, setUpazila] = useState([]);

  ////////////////////////////

  let divisions = allLocations.map((data) => data.division);
  divisions = [...new Set(divisions)];

  const handleDivision = (event) => {
    const DivisionName = event.target.value;
    setlocalDivision(DivisionName);
    const divisionWithDistrict = allLocations.filter(
      (info) => info.division === DivisionName
    );
    const district = divisionWithDistrict.map((district) => district.district);
    const totalDistrict = [...new Set(district)];

    setDistrict(totalDistrict);
  };

  const handleDistrict = (event) => {
    const district = event.target.value;
    setlocatlDistrict(district);

    const districtWithUpazila = allLocations.filter(
      (info) => info.district === district
    );
    const upaliza = districtWithUpazila?.map((data) => data.upazila);

    setUpazila(upaliza);
  };

  const handleUpazila = (event) => {
    const upaliza = event.target.value;
    setLocalUpazila(upaliza);
  };
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 my-3">
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
    </div>
  );
};

export default Locations;
