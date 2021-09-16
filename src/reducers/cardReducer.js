import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from './../actions';

const initialState = {
    cat: {
        id: "",
        breeds: "",
        temperament: "",
        description: "",
        imageURL: ""
    },
    isFetching: false,
    error: ""
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                cat: {},
                isFetching: true,
                error: ''
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                cat: {
                    id: action.payload.id,
                    breeds: action.payload.name,
                    temperament: action.payload.temperament,
                    description: action.payload.description,
                    imageURL: action.payload.image.url
                },
                isFetching: false,
                error: ''
            });
        case(FETCH_FAIL):
            return({
                ...state,
                cat: {},
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
};