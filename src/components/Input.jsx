import PropTypes from "prop-types";
import "./Input.css";
const Input = ({ placeholder, icon, className, type, name }) => {
  Input.propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string,
    path: PropTypes.string,
    name: PropTypes.string,
  };

  Input.defaultProps = {
    type: "text",
    placeholder: "",
    className: "",
    icon: "",
    name: "",
  };
  return (
    <>
      {icon ? (
        <div className={`input-container ${className}`}>
          <label htmlFor={name}>
            <i className={`${icon} color-gray`}></i>
          </label>
          <input
            type={type}
            placeholder={placeholder}
            className="input-travel"
            name={name}
          ></input>
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={className}
          name={name}
        ></input>
      )}
    </>
  );
};

export default Input;
