import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from './../actions';

const initialState = {
    cats: [],
    isFetching: false,
    error: ""
}

export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                cats: [],
                isFetching: true,
                error: ''
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                cats: action.payload,
                isFetching: false,
                error: ''
            });
        case(FETCH_FAIL):
            return({
                ...state,
                cats: [],
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
};