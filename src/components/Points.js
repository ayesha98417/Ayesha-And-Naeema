import React, { Component } from 'react';

class Points extends Component {
    
    render() { 
        return ( 
            <div>
                <div className="form form-inline" style={{alignContent: "center"}}>
                <form className="form-inline ml-5 pform" >
                <h3>Your Points:</h3>
                <input className="form-control form-control-sm " style={{width: "250px", height:"3rem"}} type="points" placeholder="points" aria-label="Points"></input>
                </form>
                </div> 
            </div>
         );
    }
}
 
export default Points;