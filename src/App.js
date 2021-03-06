import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/homepage";
import QuizPage from './pages/QuizPage';
import FactPage from './pages/FactPage';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/quiz" component={QuizPage} />
        <Route path="/facts" component={FactPage} />
      </Switch>
    </div>
  )
}

export default App;
