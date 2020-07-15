import axios from 'axios';
import { API_URL } from '../../config/constants';

function fetchedFact(data) {
    return {
        type: 'fetch_facts', payload: data
    }
}

// thunk
export const fetchFactsById = () => {
    return async function (dispatch, getState) {
        const response = await axios.get(`${API_URL}/facts`)
        dispatch(fetchedFact(response.data.facts))
    }
}