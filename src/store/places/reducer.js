import { FETCH_PLACES } from "./actions";
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
