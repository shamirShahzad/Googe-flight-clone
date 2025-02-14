import { useEffect, useRef, useState } from "react";
import "./StyledInput.css";
import PropTypes from "prop-types";
const StyledInput = ({ location, setAirport, set, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const popperRef = useRef(null);
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(false);

  StyledInput.propTypes = {
    location: PropTypes.string,
    setAirport: PropTypes.func,
    set: PropTypes.func,
  };

  StyledInput.defaultProps = {
    location: "",
    setAirport: () => {},
    set: () => {},
  };

  const togglePopper = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        popperRef.current &&
        !popperRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchAirports = async () => {
    const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${location}&locale=en-US`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9acfcc3b3fmsha5effef69994bb5p19fb22jsnbdb2ab4488c6",
        "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("RESULTS", result);
      setLoading(false);
      return result?.data;
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    const getAirports = async () => {
      if (location !== "") {
        const myAirports = await fetchAirports();
        const filteredAirports = myAirports.filter((airport) => {
          return airport?.navigation?.entityType === "AIRPORT";
        });

        setAirports(filteredAirports);
      }
    };

    getAirports();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleSetAirport = (e, airport) => {
    e.preventDefault();
    setAirport(airport);
    set(airport?.presentation?.suggestionTitle);
    setIsOpen(false);
  };

  return (
    <div className="styled-input-container">
      <input
        className="input"
        ref={inputRef}
        onClick={togglePopper}
        {...props}
      />

      {isOpen && (
        <div ref={popperRef} className="input-popper">
          {airports.length === 0 ? (
            <p className="disabled">{loading ? "Loading..." : "No info"}</p>
          ) : (
            airports.map((airport, index) => (
              <p key={index} onClick={(e) => handleSetAirport(e, airport)}>
                {airport?.presentation?.suggestionTitle}
              </p>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default StyledInput;
