import React from "react";
import { useLocation, Link, LinkProps } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "types/meal",
      label: "Meals",
    },
    {
      path: "/types/dish",
      label: "Dishes",
    },
    {
      path: "/types/cuisine",
      label: "Cuisines",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];
  return (
    <nav>
      <ul className="nav-list">
        {navItems?.map((item) => (
          <li key={item.path}>
            <CustomNavLink
              to={item.path}
              label={item.label}
              isActive={location.pathname == item.path}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

const CustomNavLink = ({
  to,
  label,
  isActive,
}: LinkProps & { label: string; isActive: boolean }) => (
  <Link to={to} className={`nav-link ${isActive ? "nav-link-active" : ""}`}>
    {label}
  </Link>
);
