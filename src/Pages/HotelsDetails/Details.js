import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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
  return <div>hotelId ={hotelID}</div>;
};

export default Details;
