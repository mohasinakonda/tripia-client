import React from "react";
import { useState } from "react";

const useUpazila = ({ districts }) => {
  const [upaliza, setUpazila] = useState([]);
  fetch("division.json")
    .then((res) => res.json())
    .then((data) => {
      const districtWithUpazila = data.filter(
        (info) => info.district === districts
      );
      const upaliza = districtWithUpazila?.map((data) => data.upazila);

      setUpazila(upaliza);
    });
  return [upaliza];
};

const useDistrict = ({ DivisionName }) => {
  const [district, setDistrict] = useState([]);
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
  return [district];
};

export { useUpazila, useDistrict };
