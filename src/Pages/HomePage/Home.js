import React from "react";
import Banner from "./Banner";
import Division from "./Division";
import Hotels from "./Hotels";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2  grid-cols-2 gap-2 justify-center  ">
        <Division division="Dhaka"></Division>
        <Division division="Mymensingh"></Division>
        <Division division="Rongpur"></Division>
        <Division division="Syllet"></Division>
        <Division division="Chitagong"></Division>
        <Division division="Rajshahi"></Division>
        <Division division="Kholna"></Division>
        <Division division="Borisal"></Division>
      </div>
    </div>
  );
};

export default Home;
