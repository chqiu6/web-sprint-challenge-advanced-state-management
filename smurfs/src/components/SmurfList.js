import React from "react";
import {connect} from "react-redux";
import {fetchSmurfs} from "../actions/index";

const mapStateToProps = state => {
    return{
        loading: state.loading,
        errors: state.errors,
        smurfs: state.smurfs
    }
}

const SmurfList = props => {
    console.log("SmurfList Props data : ", props);
    return(
        <div>
            {
                props.smurfs.map((item,id) => (
                    <div key = {item.id} className = "add-smurf-list ">
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                    <p>{item.height}</p>
                    <p>testing id : {item.id}</p>
                    </div>
                ))
            }
        </div>
    )
}
   

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);
// return(
//     <div>
//         {state.smurfs.map(item) => (
//             <div className = "smurf-list">
//                 <p>{item.name}</p>
//                 <p>{item.age}</p>
//                 <p>{item.height}</p>
//             </div>
//         ))}
//     </div>
// )
// }