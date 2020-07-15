import React from "react";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Funny Time Machine</h1>

      <h2>Where would you like to go?</h2>
      <h4>Location</h4>
      <select>
        <option>Belarus</option>
        <option>Belgium</option>
        <option>Netherlands</option>
        <option>Romania</option>
        <option>TBD</option>
      </select>
      <h4> Timeperiod</h4>
      <select style={{ marginBottom: "30px" }}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
      </select>
      <br></br>
      <button style={{ marginRight: "30px" }}> Submit </button>
      <button style={{ justifyContent: "right" }}>Random destination</button>
    </div>
  );
}
