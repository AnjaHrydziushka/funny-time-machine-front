import { combineReducers } from "redux";
import quizzes from "./quizzes/reducer";
import answers from "./answers/reducer";
import factsReducer from './facts/reducer';

export default combineReducers({
  quizzes,
  answers,
  factsReducer,
});

