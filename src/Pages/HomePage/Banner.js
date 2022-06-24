import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

import "react-day-picker/dist/style.css";
import Hotels from "./Hotels";
import Division from "./Division";

const Banner = ({ handleSomething }) => {
  const [selected, setSelected] = useState(new Date());
  const [hotel, setHotel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleCity = async (event) => {
    event.preventDefault();
    const city = event.target.city.value;

    await fetch(`http://localhost:5000/hotels/${city}`)
      .then((res) => {
        setIsLoading(false);
        return res.json();
      })
      .then((data) => setHotel(data));
  };

  return (
    <div
      class="hero  "
      style={{
        backgroundImage: `url(https://i.ibb.co/VCcPyP4/beautiful-luxury-outdoor-swimming-pool-hotel-resort.jpg?w=1000&h=800)`,
      }}
    >
      <div class=" bg-opacity-40  grid lg:grid-cols-2 grid-cols-1 justify-center  gap-5 pt-20">
        <div class="card h-[430px] w-96 shadow-2xl bg-base-100 ">
          <div class="card-body">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              defaultMonth={new Date()}
            />
          </div>
        </div>

        <div class="card flex-shrink-0 w-96  h-[430px] max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form class="form-control flex gap-3" onSubmit={handleCity}>
              <label class="label">
                <span class="label-text">Find where</span>
              </label>
              <input
                type="text"
                name="city"
                placeholder="city "
                class="input input-bordered py-3"
              />
              <input type="submit" value="find" class="btn " />
            </form>
          </div>
        </div>
      </div>
      {}
    </div>
  );
};

export default Banner;
