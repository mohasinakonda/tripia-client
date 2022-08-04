import React from "react";
import { Link, Outlet } from "react-router-dom";

const Partner = () => {
  return (
    <div>
      <div className="flex">
        <h2 className="text-2xl w-96">Register for </h2>
        <nav className="flex gap-2 text-xl">
          <Link
            to="/partner/hotel-listing"
            className="border p-3 shadow-xl rounded-md"
          >
            Listing Hotel
          </Link>
          <Link
            to="/partner/bus-listing"
            className="border p-3 shadow-xl rounded-md"
          >
            Listing bus
          </Link>
          <Link
            to="/partner/become-guide"
            className="border p-3 shadow-xl rounded-md"
          >
            Become guide
          </Link>
        </nav>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Partner;
