import { useState } from "react";

import fetchData from "./../../../api/fetch";
import "./Tracker.css";
export default function Tracker() {
  const [names, setNames] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const req = {
      method: "GET",
    };
    const res = await fetchData("/dbaccess/getquery", req);
    console.log("form submitted");

    const data = res;
    setNames(data.response.data);
    console.log(names);
  };
  return (
    <div className="tracker-main">
      <h3>PTO tracker</h3>
      <div className="tracker-container">
        <form onSubmit={handleSubmit}>
          <button className="btn">Click here to make request</button>
        </form>
        <div className="list">
          <ul></ul>
        </div>
      </div>
    </div>
  );
}
