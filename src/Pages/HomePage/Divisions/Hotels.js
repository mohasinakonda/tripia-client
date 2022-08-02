import React from "react";
import Carousel from "react-grid-carousel";
import { useNavigate } from "react-router-dom";
import ArrowButton from "../../Shared/ArrowBtn";

const Hotels = ({ hotel }) => {
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
    </div> */
    <Carousel
      cols={4}
      rows={1}
      gap={11}
      responsiveLayout={[
        {
          breakpoint: 1200,
          cols: 3,
        },
        {
          breakpoint: 990,
          cols: 2,
        },
      ]}
      mobileBreakpoint={670}
      arrowRight={<ArrowButton type="right" />}
      arrowLeft={<ArrowButton type="left" />}
    >
      {[...Array(hotel.length)].map((_, i) => (
        <Carousel.Item key={i}>
          <div className="cursor-pointer" onClick={() => handleHotels(_id)}>
            <img src={image[randomImage() || 0]} alt="" />
            <h2 className="text-3xl uppercase">{hotelName}</h2>
            <p></p>
            <p>★★★★★</p>
            <p className="font-bold">
              PRICE <span>{price} BDT</span>
            </p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Hotels;
