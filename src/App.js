import React from "react";
import "./App.css";
import HomePage from "./pages/homepage";
import QuizPage from './pages/QuizPage';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/quiz" component={QuizPage} />
      </Switch>
    </div>
  )
}

export default App;
