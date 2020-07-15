import { combineReducers } from "redux"
import quizzes from "./quizzes/reducer";
import answers from "./answers/reducer";
import factsReducer from './facts/reducer';
import places from "./places/reducer";
import timePeriods from "./timePeriods/reducer";

export default combineReducers({
  quizzes,
  answers,
  factsReducer,
  places,
  timePeriods,
});
