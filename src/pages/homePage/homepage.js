import React from "react";
import "./homepage.css";
import { apiUrl } from "../../config/constants";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [locations, setLocations] = useState([]);
  const [periods, setPeriods] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPeriod, setselectedPeriod] = useState("");

  async function FetchLocation() {
    const response = await axios.get(`${apiUrl}/places`);
    console.log("places", response.data.places);
    setLocations(response.data.places);
  }

  async function FetchPeriod() {
    const response = await axios.get(`${apiUrl}/timeperiods`);
    console.log("period", response.data.timePeriod);
    setPeriods(response.data.timePeriod);
  }

  useEffect(() => {
    FetchLocation();
    FetchPeriod();
  }, []);

  if (!locations || !periods)
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );

  return (
    <div className="body" style={{ textAlign: "center" }}>
      <h1 className="header">Funny Time Machine</h1>

      <h2>Where would you like to go?</h2>
      <div className="container">
        <h4 style={{ marginRight: "60px" }}>Location</h4>
        <h4> Time period</h4>
      </div>
      <div className="container">
        <select
          onChange={(event) => setSelectedLocation(event.target.value)}
          className="select"
          style={{ marginRight: "30px" }}
        >
          {locations.map((location) => {
            return (
              <option value={location.id} key={location.id}>
                {location.location}
              </option>
            );
          })}
        </select>

        <select
          onChange={(event) => setselectedPeriod(event.target.value)}
          className="select"
          style={{ marginBottom: "30px" }}
        >
          {periods.map((period) => {
            return (
              <option value={period.id} key={period.id}>
                {period.date}
              </option>
            );
          })}
        </select>
      </div>
      <br></br>
      <div className="container">
        <button
          onClick={(event) =>
            console.log(
              "location",
              selectedLocation,
              "  period",
              selectedPeriod
            )
          }
          className="button"
          style={{ marginRight: "30px" }}
        >
          <Link
            to={{
              pathname: "/quiz",
              state: { palceId: selectedLocation, periodId: selectedPeriod },
            }}
          >
            Submit
          </Link>
        </button>
        <button className="button" style={{ justifyContent: "right" }}>
          Random destination
        </button>
      </div>
    </div>
  );
}
