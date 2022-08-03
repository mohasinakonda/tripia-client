import React from "react";
import { Link, Outlet } from "react-router-dom";

const Partner = () => {
  return (
    <div className="flex">
      <h2 className="text-2xl w-96">Register for </h2>
      <nav className="flex gap-2 text-xl">
        <Link to="invoices" className="border p-3 shadow-xl rounded-md">
          Listing Hotel
        </Link>
        <Link to="dashboard" className="border p-3 shadow-xl rounded-md">
          Listing bus
        </Link>
        <Link to="dashboard" className="border p-3 shadow-xl rounded-md">
          Become guide
        </Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Partner;
