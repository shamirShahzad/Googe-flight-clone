import "./CustomSelect.css";
import { useState, useRef, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import PropTypes from "prop-types";
import PopperPerson from "./PopperPerson";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import PopperPerson from "./components/PopperPerson";
const CustomSelect = ({
  popperWidth,
  width,
  height,
  isSpecial,
  options,
  set,
  get,
  icon,
  defaultValue,
}) => {
  CustomSelect.propTypes = {
    popperWidth: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    isSpecial: PropTypes.bool,
    options: PropTypes.array,
    set: PropTypes.func,
    get: PropTypes.string,
    icon: PropTypes.node,
    defaultValue: PropTypes.string,
  };
  CustomSelect.defaultProps = {
    width: "",
    height: "",
    isSpecial: false,
    options: [{ round_trip: "Round Trip" }],
    set: () => {},
    get: "",
    defaultValue: "",
    popperWidth: "",
  };

  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false); // Close dropdown if clicking outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div
        ref={dropdownRef}
        className={open ? "custom-select selected" : "custom-select"}
        style={{ width: width, height }}
        onClick={handleOpen}
      >
        {icon}
        <div className="select-input">{value || defaultValue}</div>
        {open && isSpecial ? (
          <PopperPerson
            setValue={setValue}
            setOpen={setOpen}
            set={set}
            get={get}
          />
        ) : (
          open && (
            <ul className="options" style={{ width: popperWidth }}>
              {options.map((option, index) => {
                const [key, value] = Object.entries(option)[0];
                return (
                  <li
                    className={get == key ? "active" : ""}
                    key={index}
                    onClick={() => {
                      set(key);
                      setValue(value);
                      setOpen(false);
                    }}
                  >
                    {value}
                  </li>
                );
              })}
            </ul>
          )
        )}
        {open ? (
          <ArrowDropUpIcon style={{ color: "#686869" }} />
        ) : (
          <ArrowDropDownIcon style={{ color: "#686869" }} />
        )}
      </div>
    </>
  );
};

export default CustomSelect;
