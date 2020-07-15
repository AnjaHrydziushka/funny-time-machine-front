import { combineReducers } from "redux";
import quizzes from "./quizzes/reducer";
import answers from "./answers/reducer";

export default combineReducers({
  quizzes,
  answers,
});
