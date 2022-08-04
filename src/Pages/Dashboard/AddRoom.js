import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

import Locations from "../Shared/Locations";
import Input from "./AddRoomsAssests/Input";

const AddRoom = () => {
  const [localUpazila, setLocalUpazila] = useState("");
  const [localDistrict, setlocatlDistrict] = useState("");
  const [localDivision, setlocalDivision] = useState("");

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
        <Input
          name="hotelName"
          placeholder="Enter your hotel name"
          label="Enter Hotel name"
        />

        <label class="input-group input-group-vertical my-3">
          <span className="text-xl">
            Image url[use comma separated, more then 3]
          </span>
          <textarea
            name="images"
            placeholder="Enter images urls"
            className="input input-bordered text-lg"
            required
          ></textarea>
        </label>
        {/* ===============locations============== */}

        <Locations
          setLocalUpazila={setLocalUpazila}
          setlocalDivision={setlocalDivision}
          setlocatlDistrict={setlocatlDistrict}
        />
        <label class="input-group input-group-vertical">
          <span className="text-xl">Address</span>
          <textarea
            required
            name="address"
            placeholder="Enter address"
            className="input input-bordered text-lg"
          ></textarea>
        </label>
        {/* ================== */}
        <label class="input-group input-group-vertical my-3">
          <span className="text-xl">Ratings</span>
          <select name="ratings" className="input input-bordered text-lg">
            <option> Ratings</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="4">5</option>
          </select>
        </label>
        <Input
          type="number"
          name="price"
          placeholder="Enter Price"
          label="Enter price"
        />
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
