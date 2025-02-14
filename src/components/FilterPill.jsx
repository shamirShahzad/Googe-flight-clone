import { useState } from "react";
import "./FilterPill.css";
import PropTypes from "prop-types";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const FilterPill = ({ label }) => {
  FilterPill.propTypes = {
    label: PropTypes.string,
  };

  FilterPill.defaultProps = {
    label: "",
  };

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
    setRotate(!rotate);
  };

  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(false);
  return (
    <div className="filter-pill" onClick={handleClick}>
      <p>{label}</p>
      <div className={rotate ? "icon rotate" : "icon"}>
        <ArrowDropDownIcon />
      </div>
    </div>
  );
};
export default FilterPill;
