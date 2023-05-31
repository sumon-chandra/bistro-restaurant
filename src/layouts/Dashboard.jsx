import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  MdHomeFilled,
  MdRestaurant,
  MdMenuBook,
  MdBook,
  MdSupervisorAccount,
  MdMenu,
  MdShoppingBag,
  MdEmail,
  MdCalendarMonth,
  MdShoppingCart,
  MdRateReview,
  MdBookmark,
  MdRestaurantMenu,
  MdLogout,
} from "react-icons/md";
import useCart from "../hooks/useCart";
import DashboardNavItem from "../component/dashboard/DashboardNavItem";
import { useContext } from "react";
import { AuthContext } from "../context-provider/AuthProvider";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { user, loading, logoutUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [cart] = useCart();
  const isAdmin = true;
  if (loading) {
    return (
      <div className="w-screen min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

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

  return user ? (
    <div className="drawer drawer-mobile font-inter">
      <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Page content here --> */}
        <div className="z-0 lg:mt-0 mt-10">
          <Outlet />
        </div>
        <label
          htmlFor="cart-drawer"
          className="drawer-button lg:hidden z-10 absolute top-0 left-0 right-0 ps-3 text-white bg-primaryColor"
        >
          <MdMenu className="text-3xl hover:bg-gray-200 rounded-lg" />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="cart-drawer" className="drawer-overlay"></label>

        <ul className="menu font-cinzel p-4 lg:w-64 w-[70%] gap-y-6 bg-primaryColor content-start dashboard-navbar relative">
          {/* <!-- Sidebar content here --> */}
          <Link
            to="/dashboard"
            className="lg:text-2xl flex-col lg:my-6 font-black uppercase select-none p-0 bg-transparent"
          >
            <p>bistro boss</p>
            <p className="font-[300] lg:tracking-[0.4rem] text-xs tracking-[0.26rem] lg:text-lg">
              restaurant
            </p>
          </Link>

          {isAdmin ? (
            <>
              <DashboardNavItem value="Admin Home" to="/dashboard/admin">
                <MdHomeFilled />
              </DashboardNavItem>
              <DashboardNavItem value="Add Items" to="/dashboard/add-items">
                <MdRestaurant />
              </DashboardNavItem>
              <DashboardNavItem
                value="Manage Items"
                to="/dashboard/manage-items"
              >
                <MdMenuBook />
              </DashboardNavItem>
              <DashboardNavItem
                value="Manage Bookings"
                to="/dashboard/manage-bookings"
              >
                <MdBook />
              </DashboardNavItem>
              <DashboardNavItem value="All Users" to="/dashboard/all-users">
                <MdSupervisorAccount />
              </DashboardNavItem>
            </>
          ) : (
            <>
              <DashboardNavItem value="User Home" to="/dashboard/user">
                <MdHomeFilled />
              </DashboardNavItem>
              <DashboardNavItem value="Reservation" to="/dashboard/reservation">
                <MdCalendarMonth />
              </DashboardNavItem>
              {
                <DashboardNavItem
                  totalCart={cart.length}
                  value="My Cart"
                  to="/dashboard/my-cart"
                >
                  <MdShoppingCart />
                </DashboardNavItem>
              }
              <DashboardNavItem value="Add Review" to="/dashboard/add-review">
                <MdRateReview />
              </DashboardNavItem>
              <DashboardNavItem value="My Bookings" to="/dashboard/my-bookings">
                <MdBookmark />
              </DashboardNavItem>
            </>
          )}
          <div className="divider after:bg-white before:bg-white m-0"></div>
          <DashboardNavItem value="Home" to="/">
            <MdHomeFilled />
          </DashboardNavItem>
          <DashboardNavItem value="Menu" to="/menu">
            <MdRestaurantMenu />
          </DashboardNavItem>
          <DashboardNavItem value="Shop" to="/shop/salad">
            <MdShoppingBag />
          </DashboardNavItem>
          <DashboardNavItem value="Contact" to="/contact">
            <MdEmail />
          </DashboardNavItem>
          <button
            onClick={handleLogout}
            className="flex uppercase items-center gap-2 text-[16px] font-semibold"
          >
            <MdLogout /> Logout
          </button>
        </ul>
      </div>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace={true} />
  );
};

export default Dashboard;
