import React from "react";
import { useLocation } from "react-router-dom";

export default function QuizPage() {
  let location = useLocation();
  console.log(location);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Funny Time Machine</h1>

      <h2>What do you know about this place?</h2>
      <p>What did Napoleon do with his brother Louis?</p>
      <input type="text"></input>
      <button style={{ marginRight: "30px" }}> Submit </button>
    </div>
  );
}
