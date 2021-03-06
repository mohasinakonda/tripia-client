import React from "react";

const Division = ({
  division,
  divisionName,
  setHotelInDivision,
  setDistrict,
}) => {
  const divisionname = division.toLowerCase();
  const handleDivision = () => {
    fetch(`http://localhost:5000/hotels/${divisionname}`)
      .then((res) => res.json())
      .then((data) => setHotelInDivision(data));

    fetch("division.json")
      .then((res) => res.json())
      .then((data) => {
        const divisionWithDistrict = data.filter(
          (info) => info.division === division
        );

        setDistrict(divisionWithDistrict);
      });
  };
  return (
    <form>
      <select name="division" id="">
        <option value={division}>{division}</option>
      </select>
    </form>
  );
};

export default Division;
