import React from "react";

const Division = ({ division, divisionName }) => {
  const divisionname = division.toLowerCase();
  const handleDivision = () => {
    fetch(`http://localhost:5000/hotels/${divisionname}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div
      class="card  bg-base-100 shadow-xl"
      onClick={() => handleDivision(divisionName)}
    >
      <div class="card-body">
        <h3 className="text-3xl">{division}</h3>
      </div>
    </div>
  );
};

export default Division;
