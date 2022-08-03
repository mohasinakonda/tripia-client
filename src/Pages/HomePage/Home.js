import React, { useState } from "react";
import Carousel from "react-grid-carousel";
import { Link } from "react-router-dom";
import ArrowButton from "../Shared/ArrowBtn";
import FindLocation from "../Shared/FindLocation";

import Banner from "./Banner";
import Hotels from "./Divisions/Hotels";

const Home = () => {
  const [hotelsInDivision, setHotelInDivision] = useState([]);

  return (
    <div>
      <Banner />
      <div className=" pt-5  ">
        <h2 className="text-3xl py-4">Find your nearest hotel</h2>

        <div className="flex justify-center items-center">
          <FindLocation setHotelInDivision={setHotelInDivision} />
          <h2 className="px-5 text-3xl">To</h2>
          <FindLocation setHotelInDivision={setHotelInDivision} />
        </div>
      </div>
      <hr className="mt-2" />
      <div className="flex justify-between mt-3">
        <h2 className="text-3xl">Hotels</h2>
        <Link to="/hotels" className="btn">
          see more
        </Link>
      </div>
      <div className="mt-5">
        <Carousel
          cols={4}
          rows={1}
          gap={10}
          loop
          mobileBreakpoint={670}
          // arrowRight={<ArrowButton type="right" />}
          // arrowLeft={<ArrowButton type="left" />}
        >
          {[...Array(hotelsInDivision.length)].map((_, i) =>
            hotelsInDivision.map((hotel) => {
              return (
                <Carousel.Item key={i}>
                  <Hotels hotel={hotel} />
                </Carousel.Item>
              );
            })
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
