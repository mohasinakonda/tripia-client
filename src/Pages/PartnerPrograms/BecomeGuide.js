import React, { useState } from "react";
import Input from "../Dashboard/AddRoomsAssests/Input";
import SelectLocation from "../HomePage/SelectLocation";
import Locations from "../Shared/Locations";

const BecomeGuide = () => {
  const [localUpazila, setLocalUpazila] = useState("");
  const [localDistrict, setlocatlDistrict] = useState("");
  const [localDivision, setlocalDivision] = useState("");
  const handleGuide = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const birthDate = event.target.date.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const contactTime = event.target.contact.value;
    const summery = event.target.summery.value;
    const guideInfo = {
      name,
      email,
      birthDate,
      address,
      phone,
      contactTime,
      summery,
      location: [localDivision, localDistrict, localUpazila],
    };
    console.log(guideInfo);
  };
  return (
    <div className="">
      <form onSubmit={handleGuide}>
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
        <label class="input-group input-group-vertical">
          <span className="text-xl">
            We will only consider applications submitted in English.
          </span>
          <textarea
            required
            name="summery"
            placeholder="Tell us why we hire for local guide"
            className="input input-bordered text-lg"
          ></textarea>
        </label>
        <button className="submit btn">Apply</button>
      </form>
    </div>
  );
};

export default BecomeGuide;
