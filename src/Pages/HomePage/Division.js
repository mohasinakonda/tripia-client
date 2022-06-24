import React from "react";

const Division = ({ division, divisionName, setHotelInDivision }) => {
  const divisionname = division.toLowerCase();
  const handleDivision = () => {
    fetch(`http://localhost:5000/hotels/${divisionname}`)
      .then((res) => res.json())
      .then((data) => setHotelInDivision(data));
  };
  return (
    <div
      class="card  bg-base-100 shadow-xl pointer hover:btn"
      onClick={() => handleDivision(divisionName)}
    >
      <div class="card-body">
        <h3 className="text-2xl">{division}</h3>
      </div>
    </div>
  );
};

export default Division;
