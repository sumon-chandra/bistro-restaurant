import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
