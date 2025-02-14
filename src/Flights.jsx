import { useEffect, useState } from "react";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MoneyIcon from "@mui/icons-material/Money";

import {
  RangeDatePicker,
  SingleDatePicker,
} from "react-google-flight-datepicker";
import StyledInput from "./components/StyledInput";
import CustomSelect from "./components/CustomSelect";

import "./CSS/Flights.css";
import "react-google-flight-datepicker/dist/main.css";
import FilterPill from "./components/FilterPill";
import TableRow from "./components/TableRow";
import utils from "./utils/dateFormat";
const Flights = () => {
  const [flightType, setFlightType] = useState("economy");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [tripType, setTripType] = useState("round_trip");
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    infants_in_lap: 0,
  });
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [selected, setSelected] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [config, setConfig] = useState([{}]);
  const [currencies, setCurrencies] = useState([{}]);
  const [fromAirport, setFromAirport] = useState({});
  const [toAirport, setToAirport] = useState({});
  const [sortBy, setSortBy] = useState("best");
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [openModal, setOpenModal] = useState(false);

  const handleDateChange = (startDate, endDate) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleSingleDateChange = (date) => {
    setStartDate(date);
  };

  const handleChange = (e, type) => {
    if (type === "from") setFrom(e.target.value);
    if (type === "to") setTo(e.target.value);
  };

  const switchToFrom = () => {
    const temp = to;
    const tempAirport = toAirport;
    setToAirport(fromAirport);
    setFromAirport(tempAirport);
    setTo(from);
    setFrom(temp);
  };

  const getConfig = async () => {
    const url = "https://sky-scrapper.p.rapidapi.com/api/v1/getConfig";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9acfcc3b3fmsha5effef69994bb5p19fb22jsnbdb2ab4488c6",
        "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchConfig = async () => {
      const config = await getConfig();
      setConfig(config.data);
      const currencySet = new Set();
      const uniqueCurrencies = [];
      config.data.filter((obj) => {
        if (!currencySet.has(obj.currency)) {
          currencySet.add(obj.currency);
          uniqueCurrencies.push({
            currency: obj.currency,
            name: obj.currencyTitle,
            symbol: obj.currencySymbol,
          });
        }
      });
      uniqueCurrencies.sort((a, b) => a.currency.localeCompare(b.currency));
      console.log("UNIQUE", uniqueCurrencies);
      setCurrencies(uniqueCurrencies);
    };
    fetchConfig();
  }, []);

  const getFlights = async (
    originSkyId,
    destSkyId,
    originEntId,
    destEntId,
    date,
    returnDate,
    cabinClass,
    adults,
    childrens,
    infants,
    sortBy,
    currency,
    countryCode
  ) => {
    date = utils.formatStringDate(date);
    returnDate = utils.formatStringDate(returnDate);
    console.log(
      `originSkyId: ${originSkyId}, destSkyId: ${destSkyId}, originEntId: ${originEntId}, destEntId: ${destEntId}, date: ${date}, returnDate: ${returnDate}, cabinClass: ${cabinClass}, adults: ${adults}, childrens: ${childrens}, infants: ${infants}, sortBy: ${sortBy}, currency: ${currency}, countryCode: ${countryCode}`
    );

    const url =
      tripType === "round_trip"
        ? `https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights?originSkyId=${originSkyId}&destinationSkyId=${destSkyId}&originEntityId=${originEntId}&destinationEntityId=${destEntId}&date=${date}&returnDate=${returnDate}&cabinClass=${flightType}&adults=${adults}&childrens=${childrens}&infants=${infants}&sortBy=${sortBy}&currency=${currency}&market=en-US&countryCode=${countryCode}`
        : `https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights?originSkyId=${originSkyId}&destinationSkyId=${destSkyId}&originEntityId=${originEntId}&destinationEntityId=${destEntId}&date=${date}&cabinClass=${flightType}&adults=${adults}&childrens=${childrens}&infants=${infants}&sortBy=${sortBy}&currency=${currency}&market=en-US&countryCode=${countryCode}`;
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
      console.log("RESULTS", result?.data?.itineraries);
      setLoading(false);
      return result?.data?.itineraries;
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchFlights = async () => {
      if (
        Object.keys(fromAirport).length > 0 &&
        Object.keys(toAirport).length > 0
      ) {
        const myFlights = await getFlights(
          fromAirport?.navigation?.relevantFlightParams?.skyId,
          toAirport?.navigation?.relevantFlightParams?.skyId,
          fromAirport?.navigation?.relevantFlightParams?.entityId,
          toAirport?.navigation?.relevantFlightParams?.entityId,
          startDate,
          endDate,
          flightType,
          passengers?.adults,
          passengers?.children,
          passengers?.infants,
          sortBy,
          currency,
          "US"
        );

        setFlights(myFlights);
        console.log("FLIGHTS:", flights);
      }
    };
    fetchFlights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from, to, startDate, endDate, flightType, passengers, sortBy, currency]);

  // console.log(fromAirport);
  // console.log(toAirport);

  const noData = (
    <div className="no-data">
      {loading ? <h1>Loading .....</h1> : <h1>No data found</h1>}
    </div>
  );

  const CurrencyModal = (
    <div className="overlay">
      <div className="modal-desktop">
        <div className="modal-header">
          <h1 className="modal-title">Select Your Currency</h1>
        </div>
        <div className="currencies">
          <p>Select a currency</p>
          {currencies.map((currency, index) => {
            return (
              <div key={index} className="currency-option">
                <input
                  type="radio"
                  name="currency"
                  id={currency.currency}
                  value={currency.currency}
                  onClick={() => setCurrency(currency.currency)}
                  className="currency-radio"
                />
                <div className="currency-radio-text">
                  <h4>{currency.name}</h4>
                  <h6>{currency.currency}</h6>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons-currency">
          <button onClick={() => setOpenModal(false)}>Cancel</button>
          <button
            onClick={() => {
              setOpenModal(false);
              setCurrency(currency);
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {openModal && CurrencyModal}
      <main>
        <form className="form">
          <div className="select">
            <CustomSelect
              options={[
                { round_trip: "Round Trip" },
                { one_way: "One Way" },
                { multi_city: "Multi City" },
              ]}
              get={tripType}
              set={setTripType}
              isSpecial={false}
              width="136px"
              height="28px"
              icon={<MultipleStopIcon style={{ color: "#686869" }} />}
              defaultValue="Round Trip"
            />
            <CustomSelect
              options={[
                { adults: "Adults" },
                { children: "Children" },
                { infants: "Infants" },
                { infants_in_lap: "Infants in Lap" },
              ]}
              get={passengers}
              set={setPassengers}
              isSpecial={true}
              width="80px"
              height="28px"
              icon={<PersonOutlineIcon style={{ color: "#686869" }} />}
              defaultValue="1"
            />
            <CustomSelect
              get={flightType}
              set={setFlightType}
              options={[
                { economy: "Economy" },
                { premium_economy: "Premium Economy" },
                { business: "Business" },
                { first: "First" },
              ]}
              isSpecial={false}
              width="102px"
              height="28px"
              defaultValue="Economy"
            />
          </div>
          <div className="country-input">
            <StyledInput
              placeholder={"Where From?"}
              onChange={(e) => handleChange(e, "from")}
              value={from}
              location={from}
              setAirport={setFromAirport}
              set={setFrom}
            />

            <button
              className="circular-button"
              onClick={(e) => {
                e.preventDefault();
                switchToFrom();
              }}
            >
              <MultipleStopIcon fontSize="small" />
            </button>
            <StyledInput
              placeholder={"Where To?"}
              onChange={(e) => handleChange(e, "to")}
              value={to}
              location={to}
              setAirport={setToAirport}
              set={setTo}
            />
            {tripType === "round_trip" && (
              <RangeDatePicker
                startDate={startDate}
                endDate={endDate}
                onChange={handleDateChange}
                minDate={new Date(1900, 0, 1)}
                maxDate={new Date(2100, 0, 1)}
                dateFormat="YYYY-MM-DD"
                monthFormat="MM YYYY"
                startDatePlaceholder="Start Date"
                endDatePlaceholder="End Date"
                disabled={false}
                startWeekDay="monday"
              />
            )}
            {(tripType === "one_way" || tripType === "multi_city") && (
              <SingleDatePicker
                startDate={startDate}
                endDate={endDate}
                onChange={handleSingleDateChange}
                minDate={new Date(1900, 0, 1)}
                maxDate={new Date(2100, 0, 1)}
                dateFormat="YYYY-MM-DD"
                monthFormat="MM YYYY"
                startDatePlaceholder="Start Date"
                endDatePlaceholder="End Date"
                disabled={false}
                startWeekDay="monday"
              />
            )}
          </div>
          <div className="filters">
            <div className="icon-filters">
              <TuneOutlinedIcon />
              <p>All filters</p>
            </div>
            <div className="pills-filters">
              <FilterPill label={"Stops"} />
              <FilterPill label={"Bags"} />
              <FilterPill label={"Price"} />
              <FilterPill label={"Times"} />
              <FilterPill label={"Emissions"} />
              <FilterPill label={"Connecting Airports"} />
              <FilterPill label={"Duration"} />
            </div>
          </div>
        </form>
        <div className="flight-options">
          <h4
            className={
              selected === 0 ? "flight-option selected-option" : "flight-option"
            }
            onClick={() => {
              setSelected(0);
              setSortBy("best");
            }}
          >
            Best <InfoOutlinedIcon />
          </h4>
          <h4
            className={
              selected === 1 ? "flight-option selected-1" : "flight-option"
            }
            onClick={() => {
              setSelected(1);
              setSortBy("price_low");
            }}
          >
            Cheapest
            <div>
              <InfoOutlinedIcon />
            </div>
          </h4>
        </div>

        <div className="table">
          {flights?.length === 0
            ? noData
            : flights?.map((flight, index) => {
                console.log("FLIGHT:", flight);
                return (
                  <TableRow
                    key={index}
                    arrival={utils.extractTime(flight?.legs[0]?.arrival)}
                    departure={utils.extractTime(flight?.legs[0]?.departure)}
                    departureDate={utils.formatToReadbleDate(
                      flight?.legs[0]?.departure
                    )}
                    origin={flight?.legs[0]?.origin.displayCode}
                    destination={flight?.legs[0]?.destination.displayCode}
                    logo={flight?.legs[0]?.carriers?.marketing[0]?.logoUrl}
                    stops={
                      flight?.legs[0]?.stopCount === 0
                        ? "Non-stop"
                        : flight?.legs[0]?.stopCount === 1
                        ? "1 stop"
                        : "2+ stops"
                    }
                    flightDuration={utils.convertToHours(
                      flight?.legs[0]?.durationInMinutes
                    )}
                    emissions={"Avg emissions"}
                    price={flight?.price.formatted}
                    airline={flight?.legs[0]?.carriers?.marketing[0]?.name}
                    streaming={"Stream media to your device"}
                    departureAirport={
                      fromAirport?.presentation?.suggestionTitle
                    }
                    arrivalAirport={toAirport?.presentation?.suggestionTitle}
                    legroom={"76cm"}
                    flightNumber={flight?.legs[0]?.segments[0]?.flightNumber}
                    flightName={flight?.legs[0]?.carriers?.marketing[0]?.name}
                  />
                );
              })}
        </div>

        <footer className="footer">
          <button
            className="currency-button"
            onClick={(e) => {
              e.preventDefault();
              setOpenModal(true);
            }}
          >
            <MoneyIcon />
            Currency <span>.</span> {currency}
          </button>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#">About</a>
            </li>
            <li className="footer-item">
              <a href="#">Privacy</a>
            </li>
            <li className="footer-item">
              <a href="#">Terms</a>
            </li>
            <li className="footer-item">
              <a href="#">Join user studies</a>
            </li>
            <li className="footer-item">
              <a href="#">Feedback</a>
            </li>
            <li className="footer-item">
              <a href="#">Help Centre</a>
            </li>
          </ul>

          <p className="extra-text">
            Displayed currencies may differ from the currencies used to purchase
            flights.{" "}
            <span>
              <a href="#">Learn more</a>
            </span>
          </p>
          <p className="extra-text">
            Prices are final and include all taxes and fees, including payment
            fees for the cheapest common payment method (which may differ
            depending on the provider). Additional charges may apply for other
            types of payment, luggage, meals, WLAN or other additional services.
            Prices, availability and travel details are provided based on the
            latest information received from our partners. This information is
            reflected in the results within a period of less than 24 hours.
            Additional conditions may also be applied by our partners. You
            should then check prices and conditions with the services providers
            before booking.
          </p>
        </footer>
      </main>
    </>
  );
};

export default Flights;
