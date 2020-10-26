import axios from "axios";

//axios call
export const fetchSmurfs = () => (dispatch) => {
    dispatch ({type : "FETCH_SMURF_START"});
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
        console.log("Fetch res data :", res.data);
        dispatch({type : "FETCH_SMURF_SUCCESS", payload: res.data});
    })
    .catch(err => {
        console.log("Fetch error data : ", err.data);
        dispatch({type : "FETCH_SMURF_FAILED", payload: err.data});
    })
}

//add a new smurf into our data 
export const postSmurfs = (postData) => dispatch => {
    dispatch({type : "POST_SMURF_START"});
    axios
    .post("http://localhost:3333/smurfs", postData)
    .then(res => {
        console.log("Post res data :", res);
        dispatch({type : "POST_SMURF_SUCCESS", payload : res.data});
    })
    .catch(err => {
        console.log("Post error data :", err);
        dispatch({type: "POST_SMURF_FAILED", payload: err.data});
    });
}