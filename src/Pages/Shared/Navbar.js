import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar ">
      <div class="flex-1">
        <Link to="/" class="btn btn-ghost normal-case text-xl" alt="">
          Tripia
        </Link>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
