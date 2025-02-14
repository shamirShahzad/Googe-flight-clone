import PropTypes from "prop-types";
import "./Pill.css";
import { Link, useLocation } from "react-router-dom";
const Pill = ({ icon, content, path }) => {
  Pill.propTypes = {
    icon: PropTypes.string.isRequired,
    content: PropTypes.string,
    path: PropTypes.string,
  };

  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <>
      <Link to={path} className={isActive ? "pill active" : "pill"}>
        <i className={icon}></i>
        <span>{content}</span>
      </Link>
    </>
  );
};

export default Pill;
