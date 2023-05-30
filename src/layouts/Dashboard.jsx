import { Link, Outlet } from "react-router-dom";
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
} from "react-icons/md";
import DashboardNavItem from "../component/dashboard/DashboardNavItem";

const Dashboard = () => {
  const isAdmin = false;
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Page content here --> */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden absolute top-4 left-4 "
        >
          <MdMenu className="text-3xl hover:bg-gray-200 rounded-lg" />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 lg:w-64 w-[40%] lg:gap-y-6 gap-y-3 bg-primaryColor content-start dashboard-navbar relative">
          {/* <!-- Sidebar content here --> */}
          <Link
            to="/dashboard"
            className="lg:text-2xl flex-col lg:my-6 font-cinzel font-black uppercase select-none p-0 bg-transparent"
          >
            <p>bistro boss</p>{" "}
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
              <DashboardNavItem value="User Home" to="/dashboard/user-home">
                <MdHomeFilled />
              </DashboardNavItem>
              <DashboardNavItem value="Reservation" to="/dashboard/reservation">
                <MdCalendarMonth />
              </DashboardNavItem>
              <DashboardNavItem value="My Cart" to="/dashboard/my-cart">
                <MdShoppingCart />
              </DashboardNavItem>
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
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
