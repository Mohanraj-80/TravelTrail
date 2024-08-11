import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export default function Images() {
  const location = useLocation();
  const { hoteldetails } = location.state || {};
  console.log("Hooooooooooooooooooooooooooooooteeeeeeeeeeelllllllllll",hoteldetails[1])
  const hotelData = hoteldetails ? JSON.parse(hoteldetails) : [];

  return (
      <div className="row pt-5">
        {hotelData.map((hotel, index) => (
          <div key={index} className="hotels-card shadow p-2 mb-4">
            <div className="d-flex flex-row">
              <img
                src="" // Add the image URL here if available
                width={"170"}
                height={"200"}
                className="hotel-img"
                alt={hotel.name}
              />
              <div className="ml-3">
                <h1 className="hotel-name">{hotel.name}</h1>
                <p className="hotel-address">
                  {hotel.address}, {hotel.City}, {hotel.State} {hotel.postal_code}
                </p>
                <p>Rating: {"⭐".repeat(hotel.stars)}</p>
                <button className="btn book-now">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
}

Images.propTypes = {
  hoteldetails: PropTypes.string.isRequired,
};
