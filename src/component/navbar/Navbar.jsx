import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import Swal from "sweetalert2";
import { FaRegUserCircle } from "react-icons/fa";
import NavItem from "./NavItem";
import { AuthContext } from "../../context-provider/AuthProvider";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogout = () => {
    logoutUser().then(() => {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#D1A054",
        cancelButtonColor: "#ffffff",
        confirmButtonText: "Log out",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("", "You are logged out.", "success");
          navigate("/login");
        }
      });
    });
  };
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
        <NavItem value="Our menu" to="/menu" />
      </li>
      <li>
        <NavItem value="Our shop" to="/shop/salad" />
      </li>
    </>
  );
  return (
    <nav className="navbar bg-gradient-to-b from-black to-[#15151500] fixed top-0 py-2 lg:px-12 left-0  z-40">
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
          <p className="font-[300] lg:tracking-[0.4rem] lg:text-lg">
            restaurant
          </p>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="flex items-center">
          <NavLink
            to="/dashboard/my-cart"
            className="indicator mr-4 hover:text-[#EEFF25]"
          >
            <FiShoppingCart className="text-2xl text-white" />
            <span className="badge badge-sm bg-black border-0 indicator-item">
              {cart.length}
            </span>
          </NavLink>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-transparent uppercase text-lg text-white hover:text-[#EEFF25] font-bold"
            >
              Logout
            </button>
          ) : (
            <NavItem value="Login" to="/login" />
          )}
          {user?.photoURL ? (
            <button className="btn btn-ghost rounded-full">
              <img
                src={user.photoURL}
                className="w-10 h-10 rounded-full"
                alt="user photo"
              />{" "}
            </button>
          ) : (
            <FaRegUserCircle className="text-2xl ml-3 text-white" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
