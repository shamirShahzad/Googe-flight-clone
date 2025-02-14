import PropTypes from "prop-types";
import "./PopperPerson.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Counter = ({ objKey, setCounts, counts }) => {
  Counter.propTypes = {
    objKey: PropTypes.string,
    setCounts: PropTypes.func,
    counts: PropTypes.object,
  };

  Counter.defaultProps = {
    objKey: "",
    setCounts: () => {},
    counts: {
      adults: 1,
      children: 0,
      infants: 0,
      infants_in_lap: 0,
    },
  };

  const increment = (e) => {
    e.preventDefault();
    if (counts[objKey] < 9)
      setCounts((prev) => ({ ...prev, [objKey]: prev[objKey] + 1 }));
  };

  const decrement = (e) => {
    e.preventDefault();
    if (counts[objKey] >= 1)
      setCounts((prev) => ({ ...prev, [objKey]: prev[objKey] - 1 }));
  };

  return (
    <div className="counter-container">
      <button
        className={counts[objKey] === 0 ? "counter disabled" : "counter"}
        onClick={(e) => {
          decrement(e);
        }}
      >
        <RemoveIcon />
      </button>
      <span>{counts[objKey]}</span>
      <button
        className={counts[objKey] === 9 ? "counter disabled" : "counter"}
        onClick={(e) => {
          increment(e);
        }}
      >
        <AddIcon />
      </button>
    </div>
  );
};

export default Counter;
