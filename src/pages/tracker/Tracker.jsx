import CalendarComp from "../../Components/CalendarComp";
import TrackerInfo from "../../Components/TrackerInfo";
import "./Tracker.css";
export default function Tracker() {
  return (
    <div className="tracker-main">
      <h3>PTO tracker</h3>
      <div className="tracker-container">
        <CalendarComp />
        <TrackerInfo />
      </div>
    </div>
  );
}
