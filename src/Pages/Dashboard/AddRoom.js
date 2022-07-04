import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useLocation from "../../locationHooks/useLocation";
import SelectLocation from "../HomePage/SelectLocation";
import Input from "./AddRoomsAssests/Input";

const AddRoom = () => {
  const [allLocations, setAllLocations] = useLocation([]);
  const [districts, setDistrict] = useState([]);
  const [upazila, setUpazila] = useState([]);
  const [localUpazila, setLocalUpazila] = useState("");
  const [localDistrict, setlocatlDistrict] = useState("");
  const [localDivision, setlocalDivision] = useState("");

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
  const handleHotels = (event) => {
    event.preventDefault();
    const hotelName = event.target.hotelName.value;
    const images = event.target.images.value;

    const address = event.target.address.value;
    const ratings = event.target.ratings.value;
    const price = event.target.price.value;

    const description = event.target.description.value;
    const image = images.split("\n");
    const addresses = address.split("\n");
    const hotelInformation = {
      hotelName,
      image,
      localDivision,
      localDistrict,
      localUpazila,
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
      .then((data) => {
        if (data.insertedId) {
          event.reset();
          toast.success("Product added successfully");
        } else {
          console.log(data);
        }
      });
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
            required
          ></textarea>
        </label>
        {/* ===============locations============== */}
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
        <label class="input-group input-group-vertical">
          <span className="text-xl">address</span>
          <textarea
            required
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
            required
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
