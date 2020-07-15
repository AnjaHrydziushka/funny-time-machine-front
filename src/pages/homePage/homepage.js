import React from "react";
import "./homepage.css";
import { apiUrl } from "../../config/constants";

export default function HomePage() {
  return (
    <div className="body" style={{ textAlign: "center" }}>
      <h1 className="header">Funny Time Machine</h1>

      <h2>Where would you like to go?</h2>
      <div className="container">
        <h4 style={{ marginRight: "60px" }}>Location</h4>
        <h4> Time period</h4>
      </div>
      <div className="container">
        <select className="select" style={{ marginRight: "30px" }}>
          <option>Belarus</option>
          <option>Belgium</option>
          <option>Netherlands</option>
          <option>Romania</option>
          <option>South Africa</option>
        </select>

        <select className="select" style={{ marginBottom: "30px" }}>
          <option>Before Christ</option>
          <option>Antiquity</option>
          <option>Middle Ages</option>
          <option>Early Modern Period</option>
          <option>18-19 centuries</option>
          <option>20th century</option>
          <option>21st century</option>
          <option>Future</option>
        </select>
      </div>
      <br></br>
      <div className="container">
        <button className="button" style={{ marginRight: "30px" }}>
          Submit
        </button>
        <button className="button" style={{ justifyContent: "right" }}>
          Random destination
        </button>
      </div>
    </div>
  );
}
