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

  const [selectedRandomLocation, setSelectedRandomLocation] = useState("");
  const [selectedRandomPeriod, setselectedRandomPeriod] = useState("");

  function randomButton() {
    const randomPlace = places[Math.floor(Math.random() * places.length)];
    const randomPeriod = periods[Math.floor(Math.random() * periods.length)];
    setselectedRandomPeriod(randomPeriod.id);
    setSelectedRandomLocation(randomPlace.id);
  }

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

  useEffect(() => {
    if (periods.length > 0 && places.length > 0) {
      randomButton();
    }
  }, [places, periods]);

  return (
    <div className="HomePage">
      <h1 className="glitch">Funny Time Machine</h1>
      <br></br>
      <h2 className="typewriter">Where would you like to go?</h2>
      <br></br>
      <div className="container">
        <h4 style={{ marginRight: "245px" }}>Location</h4>
        <h4> Time period</h4>
      </div>
      <div className="container">
        <select
          onChange={(event) => setSelectedLocation(event.target.value)}
          className="select"
          style={{ marginRight: "145px" }}
        >
          <option>Countries</option>
          {placesJSX}
        </select>

        <select
          onChange={(event) => setselectedPeriod(event.target.value)}
          className="select"
        >
          <option>Time period</option>
          {periodsJSX}
        </select>
      </div>
      <br></br>
      <div className="container">
        <button className="button" style={{ marginRight: "30px" }}>
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
        <button
          onClick={(event) => randomButton()}
          className="button"
          style={{ justifyContent: "right" }}
        >
          <Link
            onClick={(event) => randomButton()}
            to={{
              pathname: "/quiz",
              state: {
                placeId: selectedRandomLocation,
                timePeriodId: selectedRandomPeriod,
              },
            }}
          >
            Random destenation
          </Link>
        </button>
      </div>
    </div>
  );
}
