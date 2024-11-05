import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const textColorClass = isActive ? "text-purple-600" : "text-black";

  return (
    <Link
      to={to}
      className={`text-base font-medium text-center ${textColorClass}`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavLink;