import { Link } from "react-router-dom";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import NavItem from "./NavItem";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavItem value="Home" to="/" />
      </li>
      <li>
        <NavItem value="Contact us" to="/contact-us" />
      </li>
      <li>
        <NavItem value="Dashboard" to="/dashboard" />
      </li>
      <li>
        <NavItem value="Our menu" to="/our-menu" />
      </li>
      <li>
        <NavItem value="Our shop" to="/our-shop" />
      </li>
    </>
  );
  return (
    <nav className="navbar bg-[#15151580] absolute top-0 py-2 lg:px-12 left-0  z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden">
            <FiMenu className="text-4xl text-white" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#15151580] rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link
          to="/"
          className="lg:text-2xl lg:ml-0 ml-4 font-cinzel font-black uppercase text-white select-none"
        >
          <p>bistro boss</p>{" "}
          <p className="font-[300] lg:tracking-[0.3rem] lg:text-lg">
            restaurant
          </p>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="flex items center">
          <div className="indicator mr-4">
            <FiShoppingCart className="text-2xl" />
            <span className="badge badge-sm bg-black border-0 indicator-item">
              8
            </span>
          </div>
          <NavItem value="Login" to="/login" />
          <FaRegUserCircle className="text-2xl ml-3 text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
