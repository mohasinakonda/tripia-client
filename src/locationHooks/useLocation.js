import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useLocation = () => {
  const [allLocations, setAllLocations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/location")
      .then((res) => res.json())
      .then((data) => setAllLocations(data));
  }, []);
  return [allLocations];
};

export default useLocation;
