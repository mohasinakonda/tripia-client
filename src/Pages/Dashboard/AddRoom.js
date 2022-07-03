import React, { useState } from "react";
import { useEffect } from "react";
import SelectLocation from "../HomePage/SelectLocation";
import Input from "./AddRoomsAssests/Input";

const AddRoom = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [districts, setDistrict] = useState([]);
  const [upazila, setUpazila] = useState([]);
  ////////////////////////////
  useEffect(() => {
    fetch("http://localhost:5000/location")
      .then((res) => res.json())
      .then((data) => setAllLocations(data));
  }, []);
  let divisions = allLocations.map((data) => data.division);
  divisions = [...new Set(divisions)];
  console.log(divisions);

  const handleDivision = (event) => {
    const DivisionName = event.target.value;

    fetch("http://localhost:5000/location")
      .then((res) => res.json())
      .then((data) => {
        const divisionWithDistrict = data.filter(
          (info) => info.division === DivisionName
        );
        const district = divisionWithDistrict.map(
          (district) => district.district
        );

        const totalDistrict = [...new Set(district)];
        console.log(totalDistrict);

        setDistrict(totalDistrict);
      });
  };

  const handleDistrict = (event) => {
    const district = event.target.value;

    fetch("http://localhost:5000/location")
      .then((res) => res.json())
      .then((data) => {
        const districtWithUpazila = data.filter(
          (info) => info.district === district
        );
        const upaliza = districtWithUpazila?.map((data) => data.upazila);
        console.log(upaliza);
        setUpazila(upaliza);
      });
  };
  const handleUpazila = (event) => {
    console.log(event.target.value);
  };
  const handleHotels = (event) => {
    event.preventDefault();
    const hotelName = event.target.hotelName.value;
    const images = event.target.images.value;

    const division = event.target.division.value.toLowerCase();
    const district = event.target.district.value.toLowerCase();
    const upazila = event.target.upazila.value.toLowerCase();
    const address = event.target.address.value;
    const ratings = event.target.ratings.value;
    const price = event.target.price.value;

    const description = event.target.description.value;
    const image = images.split("\n");
    const addresses = address.split("\n");
    const hotelInformation = {
      hotelName,
      image,
      division,
      district,
      upazila,
      addresses,
      ratings,
      price,
      description,
    };

    fetch("http://localhost:5000/hotel", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(hotelInformation),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h3 className="text-3xl py-5">Add room here</h3>
      <form className="form-control" onSubmit={handleHotels}>
        <Input name="hotelName" />

        <label class="input-group input-group-vertical my-3">
          <span className="text-xl">
            Image url[use comma separated, more then 3]
          </span>
          <textarea
            name="images"
            placeholder="images"
            className="input input-bordered text-lg"
          ></textarea>
        </label>
        {/* ===============locations============== */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 my-3">
          {/* <Input name="division" />
          <Input name="district" />
          <Input name="upazila" /> */}
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
        <label class="input-group input-group-vertical">
          <span className="text-xl">address</span>
          <textarea
            name="address"
            placeholder="address"
            className="input input-bordered text-lg"
          ></textarea>
        </label>
        {/* ================== */}
        <label class="input-group input-group-vertical my-3">
          <span className="text-xl">Ratings</span>
          <select name="ratings" className="input input-bordered text-lg">
            <option> ratings</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="4">5</option>
          </select>
        </label>
        <Input type="number" name="price" />
        <label class="input-group input-group-vertical my-3">
          <span className="text-xl">Descriptions</span>
          <textarea
            name="description"
            placeholder="description of the hotel"
            className="input input-bordered text-lg"
            rows="10"
          ></textarea>
        </label>
        <input type="submit" className="btn" value="Add" />
      </form>
    </div>
  );
};

export default AddRoom;
