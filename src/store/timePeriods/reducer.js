import { FETCH_TIMEPERIODS } from "./actions";
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TIMEPERIODS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
