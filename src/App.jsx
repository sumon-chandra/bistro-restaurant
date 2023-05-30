import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// Layouts
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./layouts/Dashboard";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
import ManageItems from "./pages/dashboard/admin/ManageItems";
import ManageBookings from "./pages/dashboard/admin/ManageBookings";
import AllUsers from "./pages/dashboard/admin/AllUsers";
import UserHome from "./pages/dashboard/users/UserHome";
import Reservation from "./pages/dashboard/users/Reservation";
import MyCart from "./pages/dashboard/users/MyCart";
import AddReview from "./pages/dashboard/users/AddReview";
import MyBookings from "./pages/dashboard/users/MyBookings";
import AdminHome from "./pages/dashboard/Admin/AdminHome";
import AddItems from "./pages/dashboard/Admin/AddItems";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="menu" element={<Menu />} />
          <Route path="shop/:category" element={<Shop />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="admin" element={<AdminHome />} />
          <Route path="manage-items" element={<ManageItems />} />
          <Route path="add-items" element={<AddItems />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
          <Route path="all-users" element={<AllUsers />} />
          <Route path="user-home" element={<UserHome />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="my-cart" element={<MyCart />} />
          <Route path="add-review" element={<AddReview />} />
          <Route path="my-bookings" element={<MyBookings />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
