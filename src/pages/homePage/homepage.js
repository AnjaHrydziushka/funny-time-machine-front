import React from "react";
import "./homepage.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaces } from "../../store/places/actions";
import { selectPlaces } from "../../store/places/selectors";
import { fetchTimePeriods } from "../../store/timePeriods/actions";
import { selectTimePeriods } from "../../store/timePeriods/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  const places = useSelector(selectPlaces);
  const periods = useSelector(selectTimePeriods);

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPeriod, setselectedPeriod] = useState("");

  const periodsJSX = periods.map((q, i) => {
    return (
      <option key={i} value={q.id}>
        {q.date}
      </option>
    );
  });

  const placesJSX = places.map((q, i) => {
    return (
      <option key={i} value={q.id}>
        {q.location}
      </option>
    );
  });


  useEffect(() => {
    dispatch(fetchPlaces());
    dispatch(fetchTimePeriods());
  }, [dispatch]);

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
          <option>Countries</option>
          {placesJSX}
        </select>

        <select
          onChange={(event) => setselectedPeriod(event.target.value)}
          className="select"
          style={{ marginBottom: "30px" }}
        >
          <option>Time period</option>
          {periodsJSX}
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
              state: {
                placeId: selectedLocation,
                timePeriodId: selectedPeriod,
              },
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
