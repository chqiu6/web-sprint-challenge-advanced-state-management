import React, {useState} from "react";
// import SmurfList from "./SmurfList";
import {connect} from "react-redux";
import {postSmurfs} from "../actions/index";

const SmurfForm = props => {
    const [addSmurf, setAddSmurf] = useState({
        // id : "",
        name : "",
        age : "",
        height : ""
    })

    // const resetSmurf = {
    //     name: "",
    //     age: "",
    //     height: ""
    // }

   const handleChange = e => {
       setAddSmurf({...addSmurf, [e.target.name] : e.target.value, id: Date.now()});
       console.log("Handle Change check :", e.target.value);
    }

    const formSubmit = e => {
        e.preventDefault();
        // const addNewSmurf = {
        //     id : Date.now(),
        //     name : addSmurf.name,
        //     age : addSmurf.age,
        //     height : addSmurf.height
        // };
        // const addSmurfId = newSmurf => {
            // const addNewSmurf = {
                // id : Date.now(),
            //     name : addSmurf.name,
            //     age : addSmurf.age,
            //     height : addSmurf.height
            // };
            // setAddSmurf({...addSmurf, addNewSmurf});
            props.postSmurfs(addSmurf);
        // }
        console.log("checking addSmurf data : ",addSmurf);
        
        // setAddSmurf({});
        // console.log("reset check :" ,addSmurf);
    }

    return(
        <form onSubmit = {formSubmit}>
            <label htmlFor = "name">Name : </label>
            <input
            type = "text"
            name = "name"
            value = {addSmurf.name}
            onChange = {handleChange}
            />
            <label htmlFor = "age">Age : </label>
            <input 
            type = "text"
            name = "age"
            value = {addSmurf.age}
            onChange = {handleChange}
            />
            <label htmlFor = "height">Height : </label>
            <input 
            type = "text"
            name = "height"
            value = {addSmurf.height}
            onChange = {handleChange}
            />

            <button onClick = {formSubmit}>Add Button</button>
        </form>
    )
}
const mapStateToProps = state => {
    return{
        loading: state.loading,
        errors : state.errors,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {postSmurfs})(SmurfForm);