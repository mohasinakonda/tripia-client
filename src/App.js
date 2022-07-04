import Home from "./Pages/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Navbar from "./Pages/Shared/Navbar";
import Profile from "./Pages/Dashboard/Profile";
import AddRoom from "./Pages/Dashboard/AddRoom";
import Customers from "./Pages/Dashboard/Customers";
import Login from "./Pages/Shared/LoginRegister/Login";
import Register from "./Pages/Shared/LoginRegister/Register";
import LoginRegister from "./Pages/Shared/LoginRegister/LoginRegister";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hotels from "./Pages/HomePage/Divisions/Hotels";

function App() {
  return (
    <div className="lg:px-32">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="login" element={<LoginRegister />}>
          <Route index element={<Login />}></Route>

          <Route path="/login/register" element={<Register />}></Route>
        </Route>

        {/* <Route path="dhaka" element={<Dhaka />}></Route> */}
        <Route path="hotels" element={Hotels} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Profile />}></Route>
          <Route path="/dashboard/profile" element={<Profile />}></Route>
          <Route path="/dashboard/add-room" element={<AddRoom />}></Route>
          <Route path="/dashboard/customers" element={<Customers />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
