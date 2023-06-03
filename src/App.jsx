import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// Layouts
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./layouts/Dashboard";
import AdminRoute from "./routes/AdminRoute";
// Normal pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
// Admin pages
import ManageBookings from "./pages/dashboard/admin/ManageBookings";
import AdminHome from "./pages/dashboard/Admin/AdminHome";
import AddItems from "./pages/dashboard/Admin/AddItems";
import ManageItems from "./pages/dashboard/Admin/ManageItems";
import AllUsers from "./pages/dashboard/admin/AllUsers";
// User pages
import UserHome from "./pages/dashboard/users/UserHome";
import Reservation from "./pages/dashboard/users/Reservation";
import MyCart from "./pages/dashboard/users/MyCart";
import AddReview from "./pages/dashboard/users/AddReview";
import MyBookings from "./pages/dashboard/users/MyBookings";
import Payment from "./pages/dashboard/users/payment/Payment";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop/:category" element={<Shop />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route element={<AdminRoute />}>
            <Route path="admin" element={<AdminHome />} />
            <Route path="manage-items" element={<ManageItems />} />
            <Route path="add-items" element={<AddItems />} />
            <Route path="manage-bookings" element={<ManageBookings />} />
            <Route path="all-users" element={<AllUsers />} />
          </Route>
          <Route path="user" element={<UserHome />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="my-cart" element={<MyCart />} />
          <Route path="add-review" element={<AddReview />} />
          <Route path="my-bookings" element={<MyBookings />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
