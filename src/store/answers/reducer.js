import { POST_ANSWER } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_ANSWER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
