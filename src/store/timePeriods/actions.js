import { API_URL } from "../../config/constants";
import axios from "axios";

export const FETCH_TIMEPERIODS = "FETCH_TIMEPERIODS";

export const fetchTimePeriodsSucces = (timePeriods) => ({
  type: FETCH_TIMEPERIODS,
  payload: timePeriods,
});

export const fetchTimePeriods = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${API_URL}/timeperiods`);
    console.log("time periods", response.data.timePeriod);
    dispatch(fetchTimePeriodsSucces(response.data.timePeriod));
  };
};
