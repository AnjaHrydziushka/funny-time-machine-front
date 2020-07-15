import { combineReducers } from "redux";
import places from "./places/reducer";
import timePeriods from "./timePeriods/reducer";

export default combineReducers({
  places,
  timePeriods,
});
