import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "./components/images/Hero.png";
import Input from "./components/Input";
import Card from "./components/Card";
import "./CSS/Travel.css";
import Dubai from "./images/Dubai.jpeg";
import Singapore from "./images/Singapore.jpeg";
import HongKong from "./images/Hong-Kong.jpeg";
import { useMediaQuery } from "react-responsive";

import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGl from "react-map-gl/mapbox";
import { Divider } from "@mui/material";
const Travel = () => {
  const [ipData, setIpData] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json(); // Convert response to JSON
        setIpData(data); // Store the parsed JSON
      } catch (error) {
        console.log("Error fetching IP:", error);
      }
    };

    const fetchLocation = async (ip) => {
      try {
        const response = await fetch(
          `https://geolocation-db.com/json/f65084c0-e3c1-11ef-92cb-475a1e50c6ce/${ip}`
        );
        const data = await response.json();
        setLocation(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching location:", error);
      }
    };

    fetchIP();
    fetchLocation(ipData.ip);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mobileView = (
    <>
      <section className="hero-section-mobile">
        <div className="hero-img-mobile">
          <img src={Hero} alt="Hero" />
        </div>
        <div className="hero-floating-mobile">
          <div className="hero-title-mobile">Travel</div>
          <Input
            icon="fa-solid fa-magnifying-glass"
            placeholder="Search for flights, hotels and more"
            type="text"
            className="search-input-mobile"
          ></Input>
        </div>
      </section>
      <section>
        <div className="icon-buttons-mobile">
          <Link to="/explore" className="link-mobile">
            <i className="fa-solid fa-earth-europe color-gray"></i>
            <p>Explore</p>
          </Link>
          <Link to="/flights" className="link-mobile">
            <i className="fa-solid fa-plane-up color-gray"></i>
            <p>Flights</p>
          </Link>
          <Link to="/hotels" className="link-mobile">
            <i className="fa-solid fa-bed color-gray"></i>
            <p>Hotels</p>
          </Link>
          <Link to="/holiday-rentals" className="link-mobile">
            <i className="fa-solid fa-house-chimney color-gray"></i>
            <p>Holiday Rentals</p>
          </Link>
        </div>
      </section>
      <main className="main-travel-mobile">
        <p className="heading">Popular Destinations</p>
        <p className="subheading">
          Based on your location in {location?.country_name}
        </p>
        <div className="map-and-cards-mobile">
          <div className="map-mobile" id="map-container">
            <ReactMapGl
              mapboxAccessToken="pk.eyJ1Ijoic2hhbWlyLXNoYWh6YWQiLCJhIjoiY202dDR6aGd3MGNvcjJpc21zODZydmJjayJ9.hA0jCI2qS1Vgl7srutDVhw"
              initialViewState={{
                longitude: 50.55,
                latitude: 26,
                zoom: 10,
              }}
              style={{ border: "1px solid #dadce0", borderRadius: "16px" }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
            />
          </div>
          <Card
            title="Singapore"
            date="14-19 Feb"
            activities="Padang, Buddha Tooth Temple & shopping"
            img={Singapore}
            pricing={{ plane: "340", hotel: "67" }}
            height={"154px"}
          />
          <Card
            title="Dubai"
            date="14-19 Feb"
            activities="Burj Khalifa, Atlantis & lavish malls"
            img={Dubai}
            pricing={{ plane: "144", hotel: "87" }}
            height={"154px"}
          />
          <Card
            title="Hong Kong"
            date="14-19 Feb"
            activities="Shopping, Victoria Peak & Kowoloon"
            img={HongKong}
            pricing={{ plane: "598", hotel: "46" }}
            height={"154px"}
          />
        </div>
      </main>
      <footer className="footer-travel-mobile">
        <Divider />
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
      </footer>
    </>
  );

  const desktopView = (
    <>
      <section className="hero-section">
        <div className="hero-img">
          <img src={Hero} alt="Hero"></img>
        </div>
        <div className="hero-floating">
          <div className="hero-title">Travel</div>
          <Input
            icon="fa-solid fa-magnifying-glass"
            placeholder="Search for flights, hotels and more"
            type="text"
            className="search-input"
          ></Input>
        </div>
      </section>
      <section>
        <div className="icon-buttons">
          <Link to="/explore" className="link">
            <i className="fa-solid fa-earth-europe color-gray"></i>
            <p>Explore</p>
          </Link>
          <Link to="/flights" className="link">
            <i className="fa-solid fa-plane-up color-gray"></i>
            <p>Flights</p>
          </Link>
          <Link to="/hotels" className="link">
            <i className="fa-solid fa-bed color-gray"></i>
            <p>Hotels</p>
          </Link>
          <Link to="/holiday-rentals" className="link">
            <i className="fa-solid fa-house-chimney color-gray"></i>
            <p>Holiday Rentals</p>
          </Link>
        </div>
      </section>
      <main className="main-travel">
        <div className="popular-destinations">
          <p className="heading">Popular Destinations</p>
          <p className="subheading">
            Based on your location in {location?.country_name}
          </p>
          <div className="map-and-cards">
            <div className="cards">
              <Card
                title="Singapore"
                date="14-19 Feb"
                activities="Padang, Buddha Tooth Temple & shopping"
                img={Singapore}
                pricing={{ plane: "340", hotel: "67" }}
              />
              <Card
                title="Dubai"
                date="14-19 Feb"
                activities="Burj Khalifa, Atlantis & lavish malls"
                img={Dubai}
                pricing={{ plane: "144", hotel: "87" }}
              />
              <Card
                title="Hong Kong"
                date="14-19 Feb"
                activities="Shopping, Victoria Peak & Kowoloon"
                img={HongKong}
                pricing={{ plane: "598", hotel: "46" }}
              />
            </div>
            <div className="map" id="map-container">
              <ReactMapGl
                mapboxAccessToken="pk.eyJ1Ijoic2hhbWlyLXNoYWh6YWQiLCJhIjoiY202dDR6aGd3MGNvcjJpc21zODZydmJjayJ9.hA0jCI2qS1Vgl7srutDVhw"
                initialViewState={{
                  longitude: 50.55,
                  latitude: 26,
                  zoom: 10,
                }}
                style={{ border: "1px solid #dadce0", borderRadius: "16px" }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
              />
            </div>
          </div>
          <br />
          <br />
          <br />

          <footer className="footer">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Join User Studies</a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
              <li>
                <a href="#">Help Centre and Consumer Information</a>
              </li>
            </ul>
          </footer>
        </div>
      </main>
    </>
  );

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return isMobile ? mobileView : desktopView;
};

export default Travel;
