import React, { useState } from "react";
import Input from "../Dashboard/AddRoomsAssests/Input";
import SelectLocation from "../HomePage/SelectLocation";
import Locations from "../Shared/Locations";

const BecomeGuide = () => {
  const [localUpazila, setLocalUpazila] = useState("");
  const [localDistrict, setlocatlDistrict] = useState("");
  const [localDivision, setlocalDivision] = useState("");
  return (
    <div>
      <form>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name here"
          label="Enter your Name"
        ></Input>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email here"
          label="Enter your Email"
        ></Input>
        <Input
          type="date"
          name="date"
          placeholder="Birth date"
          label="Birth date"
        ></Input>
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
        <Input
          name="phone"
          placeholder="Enter your phone number"
          label="Enter phone Number"
        />
        <Input
          name="contact"
          placeholder="Enter your contact time"
          label="Enter your best contact timing"
        />
      </form>
    </div>
  );
};

export default BecomeGuide;
