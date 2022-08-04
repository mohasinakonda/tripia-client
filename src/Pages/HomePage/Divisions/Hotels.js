import React from "react";
import Carousel from "react-grid-carousel";
import { useNavigate } from "react-router-dom";
import ArrowButton from "../../Shared/ArrowBtn";

const Hotels = ({ hotel, setHotelInDivision }) => {
  const { _id, hotelName, image, price, description, addresses, ratings } =
    hotel;

  const fullDescription = description.split("\n");
  const navigate = useNavigate();
  const handleHotels = (id) => {
    navigate(`/hotels/${id}`);
  };
  const randomImage = () => {
    const random = Math.floor(Math.random() * image?.length);
    return random;
  };
  // console.log(hotel);

  return (
    /*  <div class="flex lg:card-side bg-base-100 shadow-xl p-5 ">
      <figure>
        <img src={image[randomImage() || 0]} alt="Album" />
      </figure>

      <div className="grid grid-cols-2 justify-center">
        <div class="px-5">
          <h2 class="card-title">{hotelName.toUpperCase()}</h2>
          <small>Reviews:{ratings}</small>
          <hr />

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
        </div>
        <div className="px-5  ">
          <div className="h-56">
            <h2 className="text-2xl font-bold ">Address</h2>

            <hr />
            {addresses.map((address) => (
              <p> {address}</p>
            ))}
          </div>
          <div class="card-actions justify-end">
            <button onClick={() => handleHotels(_id)} class="btn btn-primary">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>  */

    <div
      className="cursor-pointer shadow-xl p-5"
      onClick={() => handleHotels(_id)}
    >
      <img src={image[randomImage() || 0]} alt="" />
      <h2 className="text-3xl uppercase">{hotelName}</h2>
      <p></p>
      <p>★★★★★</p>
      <p className="font-bold">
        PRICE <span>{price} BDT</span>
      </p>
    </div>
  );
};

export default Hotels;
