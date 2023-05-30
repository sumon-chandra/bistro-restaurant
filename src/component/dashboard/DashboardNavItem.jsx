import React from "react";
import { NavLink } from "react-router-dom";

const DashboardNavItem = ({ value, to, children }) => {
  return (
    <NavLink
      to={to}
      className="flex uppercase items-center gap-2 lg:text-xl text-xs font-semibold"
    >
      <span>{children}</span>
      <span>{value}</span>
    </NavLink>
  );
};

export default DashboardNavItem;
