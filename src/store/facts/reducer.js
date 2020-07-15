const initialState = [];

export default function factsReducer(state = initialState, { type, payload }) {
    switch(type) {
        case 'fetch_facts':
            return payload;
        default:
            return state;
    }
}

