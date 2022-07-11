import React from "react";
import { useNavigate } from "react-router-dom";

const Hotels = ({ hotel }) => {
  const { _id, hotelName, image, price, description, address, ratings } = hotel;
  const fullDescription = description.split("\n");
  const navigate = useNavigate();
  const handleHotels = (id) => {
    navigate(`/hotels/${id}`);
  };
  return (
    <div class="flex lg:card-side bg-base-100 shadow-xl p-30 ">
      <figure>
        <img src={image[0]} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{hotelName.toUpperCase()}</h2>
        <h3 className="text-2xl">Facilities</h3>
        {fullDescription.map((data) => (
          <ul>
            <li className="text-lg ">
              <span className="font-bold px-2">&rArr;</span>
              {data}
            </li>
          </ul>
        ))}
        <p className="font-bold text-xl">Price: {price} BDT</p>
        <p className="font-bold text-xl">
          Hotel Ratings &rArr; {ratings} stars
        </p>
        <div class="card-actions justify-end">
          <button onClick={() => handleHotels(_id)} class="btn btn-primary">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
