import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getCat = () => {
    return (dispatch)=> {
        dispatch(fetchStart());
    
        axios.get("https://api.thecatapi.com/v1/breeds")
            .then(resp=> {
                dispatch(fetchSuccess(resp.data));
                // dispatch({type: FETCH_SUCCESS, payload:resp.data.results[0] });
            })
            .catch(err=>{
                dispatch(fetchFail(err));
                // dispatch({type: FETCH_FAIL, payload: err});
            });
    }
}

export const fetchStart = ()=> {
    return({type: FETCH_START});
}

export const fetchSuccess = (cat)=> {
    return({type: FETCH_SUCCESS, payload:cat});
}

export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload:error});
}