import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Carousel from "react-grid-carousel";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const { hotelID } = useParams();
  const [hotel, setHotel] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/hotel/${hotelID}`)
      .then((res) => res.json())
      .then((data) => setHotel(data));
  }, [hotelID]);
  console.log(hotel);
  return (
    <div class="carousel w-full">
      <Carousel cols={2} rows={1} gap={10} loop>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=1" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=2" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          {/* anything you want to show in the grid */}
        </Carousel.Item>
        {/* ... */}
      </Carousel>
    </div>
  );
};

export default Details;
