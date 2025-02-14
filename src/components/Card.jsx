import "./Card.css";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
const Card = ({ height, width, title, date, activities, pricing, img }) => {
  Card.propTypes = {
    height: PropTypes.string.isRequired,
    width: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    activities: PropTypes.string,
    pricing: PropTypes.object,
    img: PropTypes.string,
  };
  Card.defaultProps = {
    height: "132px",
    width: "100%",
    title: "Dubai",
    date: "10-20 Jan",
    activities: "Activities go here",
    pricing: {
      plane: "NaN",
      hotel: "NaN",
    },
    img: "",
  };

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div style={{ height, width }} className="card">
      <img src={img} alt="Location" width={isMobile ? "100%" : ""} />
      <div className="content">
        <div className={isMobile ? "mobile-text" : "text"}>
          <h3>{title}</h3>
          <p>{date}</p>
          <p>{activities}</p>
        </div>
        <div className={isMobile ? "mobile-pricing" : "pricing"}>
          <i className="fa-solid fa-plane-up">
            <span>{pricing.plane}</span>
          </i>
          <i className="fa-solid fa-bed">
            <span>{pricing.hotel}</span>
          </i>
        </div>
      </div>
    </div>
  );
};

export default Card;
