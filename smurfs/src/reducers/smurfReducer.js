const initialState = { 
    loading : false,
    errors: "",
    smurfs : []
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_SMURF_START" :
            return {...state, loading: true};
        case "FETCH_SMURF_SUCCESS" :
            return {...state, loading: false, errors: "", smurfs: action.payload };
        case "FETCH_SMURF_FAILED" :
            return {...state, loading: false, errors : action.payload};
        case "POST_SMURF_START" :
            return {...state, loading : true };
        case "POST_SMURF_SUCCESS" :
            return {...state, loading : false, errors: "", smurfs : action.payload};
        case "POST_SMURF_FAILED" :
            return {...state, loading : false, errors : action.payload};
        default:
            return state;
    }
}