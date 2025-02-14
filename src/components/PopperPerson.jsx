import "./PopperPerson.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
const PopperPerson = ({ setOpen, setValue, set, get }) => {
  PopperPerson.propTypes = {
    setOpen: PropTypes.func,
    setValue: PropTypes.func,
    set: PropTypes.func,
    get: PropTypes.object,
  };

  PopperPerson.defaultProps = {
    setOpen: () => {},
    setValue: () => {},
    set: () => {},
    get: { adults: 1, children: 0, infants: 0, infants_in_lap: 0 },
  };

  const [counts, setCounts] = useState(get);

  useEffect(() => {
    setCounts(get);
  }, [get]);

  const calcAllPassengers = () => {
    return (
      counts.adults + counts.children + counts.infants + counts.infants_in_lap
    );
  };

  console.log(calcAllPassengers());

  const handleDone = (e) => {
    e.preventDefault();
    if (calcAllPassengers() > 9) {
      set(get);
      setOpen(false);
      return;
    }
    setValue(calcAllPassengers());
    set(counts);
    setOpen(false);
  };

  return (
    <div className="container" onClick={(e) => e.stopPropagation()}>
      <div className="main">
        <div className="container-flex">
          <label className={calcAllPassengers() > 9 ? "red" : ""}>Adults</label>
          <Counter objKey={"adults"} setCounts={setCounts} counts={counts} />
        </div>
        <div className="container-flex">
          <div className="labels">
            <p className={calcAllPassengers() > 9 ? "red" : ""}>Children</p>
            <p
              className={
                calcAllPassengers() > 9 ? "sub-label red" : "sub-label"
              }
            >
              Aged 2-11
            </p>
          </div>
          <Counter objKey={"children"} setCounts={setCounts} counts={counts} />
        </div>
        <div className="container-flex">
          <div className="labels">
            <p className={calcAllPassengers() > 9 ? "red" : ""}>Infants</p>
            <p
              className={
                calcAllPassengers() > 9 ? "sub-label red" : "sub-label"
              }
            >
              In seat
            </p>
          </div>
          <Counter objKey={"infants"} setCounts={setCounts} counts={counts} />
        </div>
        <div className="container-flex">
          <div className="labels">
            <p className={calcAllPassengers() > 9 ? "red" : ""}>Infants</p>
            <p
              className={
                calcAllPassengers() > 9 ? "sub-label red" : "sub-label"
              }
            >
              On lap
            </p>
          </div>
          <Counter
            objKey={"infants_in_lap"}
            setCounts={setCounts}
            counts={counts}
          />
        </div>
      </div>
      <div className="buttons">
        <button
          className="action-button"
          onClick={(e) => {
            e.preventDefault();
            set(get);
            setOpen(false);
          }}
        >
          Cancel
        </button>
        <button
          className="action-button"
          onClick={(e) => {
            handleDone(e);
          }}
        >
          Done
        </button>
      </div>
      {calcAllPassengers() > 9 && (
        <div className="warning">
          <p className="red">
            <InfoOutlinedIcon />
            Sorry we do not support more than 9 passengers
          </p>
        </div>
      )}
    </div>
  );
};

export default PopperPerson;
