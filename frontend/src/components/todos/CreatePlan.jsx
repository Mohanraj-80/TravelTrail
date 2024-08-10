import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from "./CreatePlan.module.css";

function CreatePlan() {
  const location = useLocation();
  const { shortItinerary } = location.state || {};

  if (!shortItinerary) {
    return <div>No itinerary available</div>;
  }

  return (
    <div className={styles["itinerary-container"]}>
      {Object.keys(shortItinerary).map(
        (dayKey) =>
          dayKey !== "cost" &&
          dayKey !== "estimation" && (
            <div key={dayKey} className={styles["day-container"]}>
              <h2>{dayKey.replace("-", " ").toUpperCase()}</h2>
              {Object.entries(shortItinerary[dayKey]).map(([key, activity]) => (
                <div key={key} className={styles["activity-box"]}>
                  <p>{activity}</p>
                </div>
              ))}
            </div>
          )
      )}
      <div className={styles["summary-container"]}>
        <h2>Total Cost: {shortItinerary.cost}</h2>
        <ul>
          {shortItinerary.estimation.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

CreatePlan.propTypes = {
  shortItinerary: PropTypes.shape({
    cost: PropTypes.string.isRequired,
    estimation: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CreatePlan;
