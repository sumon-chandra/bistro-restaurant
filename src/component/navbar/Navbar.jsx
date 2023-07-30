import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import Swal from "sweetalert2";
import { FaRegUserCircle } from "react-icons/fa";
import NavItem from "./NavItem";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import useAdmin from "./../../hooks/useAdmin";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();
  const [cart] = useCart();

  // ! Navbar animation - When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
  const [previousScrollPos, setPreviousScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleScrolling = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(previousScrollPos > currentScrollPos);
    setPreviousScrollPos(currentScrollPos);
  };

  const [isAdmin, isAdminLoading] = useAdmin();
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D1A054",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log out",
    }).then((result) => {
      if (result.isConfirmed) {
        logoutUser().then(() => {
          Swal.fire("", "You are logged out.", "success");
          navigate("/login");
        });
      }
    });
  };
  const navOptions = (
    <>
      <li>
        <NavItem value="Home" to="/" />
      </li>
      <li>
        <NavItem
          value="Dashboard"
          to={`dashboard/${isAdmin ? "admin" : "user"}`}
        />
      </li>
      <li>
        <NavItem value="Our menu" to="/menu" />
      </li>
      <li>
        <NavItem value="Our shop" to="/shop/salad" />
      </li>
      <li>
        <NavItem value="Contact us" to="/contact" />
      </li>
    </>
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
    return () => window.addEventListener("scroll", handleScrolling);
  }, [previousScrollPos, visible]);
  return (
    <nav
      className={`navbar bg-gradient-to-b from-black to-[#15151500] fixed transition-all ${
        visible ? "top-0 duration-500" : "-top-full duration-500"
      } py-2 lg:px-12 left-0  z-40`}
    >
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
          {!isAdmin && user && (
            <NavLink
              to="/dashboard/my-cart"
              className="indicator mr-4 hover:text-[#EEFF25]"
            >
              <FiShoppingCart className="text-2xl text-white" />
              <span className="badge badge-sm bg-primaryColor font-bold border-0 indicator-item">
                {cart.length}
              </span>
            </NavLink>
          )}
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
