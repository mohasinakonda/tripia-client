import React from "react";

const SelectLocation = ({ handleLocation, location, mood }) => {
  return (
    <select className="p-4" onChange={handleLocation} name="district" id="">
      <option>select {mood}</option>
      {location.map((district) => (
        <option value={district}> {district}</option>
      ))}
    </select>
  );
};

export default SelectLocation;
