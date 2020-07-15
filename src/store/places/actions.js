import { API_URL } from "../../config/constants";
import axios from "axios";

export const FETCH_PLACES = "FETCH_PLACES";

export const fetchPlacesSucces = (places) => ({
  type: FETCH_PLACES,
  payload: places,
});

export const fetchPlaces = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${API_URL}/places`);
    dispatch(fetchPlacesSucces(response.data.places));
  };
};
