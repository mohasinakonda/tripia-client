import React, { useState } from "react";
import { useEffect } from "react";
import useLocation, { useDistrict } from "../../locationHooks/useLocation";
import SelectLocation from "../HomePage/SelectLocation";

const FindLocation = ({ setHotelInDivision }) => {
  const [districts, setDistrict] = useState([]);
  const [upazila, setUpazila] = useState([]);
  const [allLocations] = useLocation();
  const [cityName, setCityName] = useState("");
  // const [random,setRandom]=useState(0)
  useEffect(() => {
    fetch(`http://localhost:5000/hotels/${cityName}`)
      .then((res) => res.json())
      .then((data) => {
        setHotelInDivision(data);
      });
  }, [cityName, setHotelInDivision]);

  // divisions
  let divisions = allLocations.map((data) => data.division);
  divisions = [...new Set(divisions)];
  //=================handle division===============
  const handleDivision = (event) => {
    const DivisionName = event.target.value;
    // setCityName(DivisionName);

    const divisionWithDistrict = allLocations.filter(
      (info) => info.division === DivisionName
    );
    const district = divisionWithDistrict.map((district) => district.district);
    const totalDistrict = [...new Set(district)];

    setDistrict(totalDistrict);
  };
  // ===============handle district==============
  const handleDistrict = (event) => {
    const district = event.target.value;
    // setCityName(district);
    const districtWithUpazila = allLocations.filter(
      (info) => info.district === district
    );
    const upaliza = districtWithUpazila?.map((data) => data.upazila);

    setUpazila(upaliza);
  };
  //===============handle upazila==================
  const handleUpazila = (event) => {
    let cityName = event.target.value;
    setCityName(cityName);
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
