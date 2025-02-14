import { useState } from "react";
import PropTypes from "prop-types";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./TableRow.css";
import utils from "../utils/dateFormat";

import { useMediaQuery } from "react-responsive";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AirlineSeatLegroomNormalIcon from "@mui/icons-material/AirlineSeatLegroomNormal";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import PublicIcon from "@mui/icons-material/Public";
const TableRow = ({
  arrival,
  departure,
  departureDate,
  destination,
  origin,
  logo,
  flightDuration,
  stops,
  emissions,
  airline,
  legroom,
  streaming,
  price,
  departureAirport,
  arrivalAirport,
  flightNumber,
  flightName,
}) => {
  TableRow.propTypes = {
    arrival: PropTypes.string,
    departure: PropTypes.string,
    departureDate: PropTypes.string,
    destination: PropTypes.string,
    origin: PropTypes.string,
    logo: PropTypes.string,
    flightDuration: PropTypes.string,
    stops: PropTypes.string,
    emissions: PropTypes.string,
    airline: PropTypes.string,
    legroom: PropTypes.string,
    streaming: PropTypes.string,
    price: PropTypes.string,
    departureAirport: PropTypes.string,
    arrivalAirport: PropTypes.string,
    flightNumber: PropTypes.string,
    flightName: PropTypes.string,
  };
  TableRow.defaultProps = {
    arrival: "",
    departure: "",
    departureDate: "",
    destination: "",
    origin: "",
    logo: "",
    flightDuration: "",
    stops: "",
    emissions: "",
    airline: "",
    legroom: "",
    streaming: "",
    price: "",
    departureAirport: "",
    arrivalAirport: "",
    flightNumber: "",
    flightName: "",
  };

  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const getLegroomNum = (legroom) => {
    const [num] = legroom.split(" ");
    return Number(num);
  };

  getLegroomNum(legroom);

  const openMenuMobile = (
    <div className="open-mobile">
      <div className="buttons-price">
        <button className="select-flight">Select Flight</button>
        <p>{price}</p>
        <button
          className="close-details"
          onClick={(e) => {
            handleClose(e);
          }}
        >
          <KeyboardArrowDownOutlinedIcon />
        </button>
      </div>
      <div className="departure-details">
        <div className="icons">
          <TripOriginIcon />
          <div className="filled-circles">
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
          </div>
          <TripOriginIcon />
        </div>
        <div className="departure-times">
          <p className="default-font">{departure}</p>
          <p className="airport-font">{departureAirport}</p>
          <p className="sub-font">Travel time: {flightDuration}</p>
          <p className="default-font">{arrival}</p>
          <p className="airport-font">{arrivalAirport}</p>
        </div>
      </div>
      <div className="airplane-details">
        <div className="plane-details-container">
          <img
            src={logo}
            alt=""
            style={{ width: "16px", height: "16px", marginRight: "4px" }}
          />
          <p className="plane-details">
            {flightName} <span>.</span> Economy <span>.</span> {flightNumber}
          </p>
        </div>
        <p className="plane-details">Boeing 737MAX 8 Passenger</p>
      </div>
      <div className="amenities">
        <div className="icon-text">
          {getLegroomNum(legroom) <= 79 ? (
            <AirlineSeatLegroomNormalIcon />
          ) : (
            <AirlineSeatLegroomExtraIcon />
          )}
          <p>
            {getLegroomNum(legroom) <= 79
              ? `Average legroom (${legroom})`
              : `Above-average legroom (${legroom})`}
          </p>
        </div>
        <div className="icon-text">
          {streaming === "On-demand video" ? (
            <OndemandVideoIcon />
          ) : (
            <MobileScreenShareIcon />
          )}
          <p>{streaming}</p>
        </div>
        <div className="icon-text">
          <PublicIcon />
          <p>Emissions estimate: {emissions}</p>
        </div>
      </div>
    </div>
  );

  const mobileView = (
    <div className="table-item">
      <div className="main-row">
        <div className="row">
          <div className="time">
            <p>{departure}</p>
            <TrendingFlatOutlinedIcon />
            <p>{arrival}</p>
          </div>
          <div className="price">
            <p>{price}</p>
          </div>
        </div>
        <div className="row-2">
          <p>{origin}</p>
          <p>{destination}</p>
        </div>
        <div className="row-3">
          <img src={logo} alt="" className="flight-logo" />
          <p>{stops}</p>
          <span>.</span>
          <p>{flightDuration}</p>
          <span className="emissions">{emissions}</span>
        </div>
        <button
          className="open-details"
          onClick={(e) => {
            handleOpen(e);
          }}
        >
          <KeyboardArrowDownOutlinedIcon />
        </button>
      </div>
    </div>
  );

  const openMenu = (
    <div className="open-table-row">
      <div className="open-row">
        <img src={logo} className="open-row-logo" />
        <div className="departure-details">
          <h3 className>Departure</h3>
          <span>.</span>
          <h3>{departureDate}</h3>
        </div>
        <div className="open-price-details">
          <div className="open-emissions">
            <h3>132 kg CO2e</h3>
            <p>Avg emissions </p>
          </div>
          <button className="select-flight">Select flight</button>
          <p className="open-price">{price}</p>
        </div>
      </div>
      <button
        className="close-details"
        onClick={(e) => {
          handleClose(e);
        }}
      >
        <KeyboardArrowDownOutlinedIcon />
      </button>
      <div
        style={{
          borderBottom: "1px solid #dadce0",
        }}
      ></div>
      <div className="bottom-details">
        <div className="left-div">
          <div className="dots-icons">
            <TripOriginIcon />
            <div className="circle-filled">
              <FiberManualRecordIcon />
              <FiberManualRecordIcon />
              <FiberManualRecordIcon />
              <FiberManualRecordIcon />
            </div>
            <TripOriginIcon />
          </div>

          <div className="timings">
            <p className="departure-time">
              {departure} <span>.</span> {departureAirport}
            </p>
            <p className="total-duration">Travel time: {flightDuration}</p>
            <p className="arrival-time">
              {arrival} <span>.</span> {arrivalAirport}
            </p>
            <p className="plane-info">
              {flightName} <span>.</span>
              {flightNumber}
            </p>
          </div>
        </div>
        <div className="right-div">
          <div className="icon-text">
            {getLegroomNum(legroom) <= 79 ? (
              <AirlineSeatLegroomNormalIcon />
            ) : (
              <AirlineSeatLegroomExtraIcon />
            )}
            <p>
              {getLegroomNum(legroom) <= 79
                ? `Average legroom (${legroom})`
                : `Above-average legroom (${legroom})`}
            </p>
          </div>
          <div className="icon-text">
            {streaming === "On-demand video" ? (
              <OndemandVideoIcon />
            ) : (
              <MobileScreenShareIcon />
            )}
            <p>{streaming}</p>
          </div>
          <div className="icon-text">
            <PublicIcon />
            <p>Emissions estimate: {emissions}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const desktopView = (
    <div className="table-item">
      <div className="main-row">
        <img src={logo} alt="flight-logo" className="flight-logo" />
        <div className="row-details">
          <div className="flight-time-details">
            <p>{departure}</p>
            <span>-</span>
            <p>{arrival}</p>
          </div>
          <p className="sub">{airline}</p>
        </div>
        <div className="row-details">
          <div className="flight-time-details-light">
            <p>{flightDuration}</p>
          </div>
          <p className="sub">{origin + " - " + destination}</p>
        </div>
        <div className="row-details">
          <div className="flight-time-details-light">
            <p>{stops}</p>
          </div>
          <p className="sub white">112233</p>
        </div>
        <div className="row-details">
          <div className="flight-time-details-light">
            <p>{emissions}</p>
          </div>
          <p className="sub white">112233</p>
        </div>
        <div className="row-details">
          <div className="flight-time-details-light">
            <div className="price">
              <p>{price}</p>
            </div>
          </div>
        </div>
        <button
          className="open-details"
          onClick={(e) => {
            handleOpen(e);
          }}
        >
          <KeyboardArrowDownOutlinedIcon />
        </button>
      </div>
    </div>
  );

  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile
    ? open
      ? openMenuMobile
      : mobileView
    : open
    ? openMenu
    : desktopView;
};

export default TableRow;
