import axios from 'axios';
import { API_URL } from '../../config/constants';

function fetchedFact(data) {
    return {
        type: 'fetch_facts', payload: data
    }
}

// thunk
export function fetchFactsById (id) {
    return async function thunk (dispatch, getState) {
        const response = await axios.get(`${API_URL}/facts/${id}`)
        // console.log("DATA: ", response.data.facts)
        dispatch(fetchedFact(response.data.facts))
    }
}