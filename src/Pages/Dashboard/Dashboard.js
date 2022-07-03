import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col px-16 ">
        {/* <!-- Page content here --> */}
        <div className="sm:px-16">
          <label for="my-drawer-2" class="btn  lg:hidden">
            <span className="text-4xl"> &gt;</span>
          </label>
          <h3 className="text-4xl text-center py-2">Dashboard</h3>
        </div>
        <hr />
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/add-room">Add Room</Link>
          </li>
          <li>
            <Link to="/dashboard/customers">Customers</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
