import { NavLink } from "react-router-dom";

const NavItem = ({ value, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "bg-transparent text-[#EEFF25] uppercase text-lg font-bold font-inter"
          : "bg-transparent uppercase text-lg text-white hover:text-[#EEFF25] font-bold"
      }
      to={to}
    >
      {value}
    </NavLink>
  );
};

export default NavItem;
