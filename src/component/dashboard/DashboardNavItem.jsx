import React from "react";
import { NavLink } from "react-router-dom";

const DashboardNavItem = ({ value, to, children, totalCart }) => {
  return (
    <NavLink
      to={to}
      className="flex uppercase items-center gap-2 lg:text-xl text-sm font-semibold"
    >
      <span>{children}</span>
      <span>{value}</span>
      {totalCart && <span className=""> ({totalCart})</span>}
    </NavLink>
  );
};

export default DashboardNavItem;
