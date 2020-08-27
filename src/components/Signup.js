import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Signup extends Component {
         
    handleRegister(event) {
        console.log("Registered")
          }

    render() { 
                       
          return (<div className="form">
            <form onSubmit={this.handleLogin} >
              <ul className="form-container">
                <li>
                  <h2>Sign-Up</h2>
                </li>
                <li>
                  <label className="labels" htmlFor="your-name">
                    Your Name
                  </label>
                  <input type="your-name" name="your-name" id="your-name">
                  </input>
                </li>
                
                <li>
                  <label className="labels" htmlFor="email">
                    Email
                  </label>
                  <input type="email" name="email" id="email">
                  </input>
                </li>
                <li>
                  <label className="labels" htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" >
                  </input>
                </li>
                <li>
                  <label className="labels" htmlFor="re-enter password">Re-enter Password</label>
                  <input type="re-enter password" id="re-enter password" name="re-enter password" >
                  </input>
                </li>
                <li>
                  <button type="submit" className="button-primary">Creat Your "B & Beta" Account</button>
                </li>
                <li className="labels">Already have acount? <Link to={"/Login"}>Sign-In</Link></li> 
                              
              </ul>
            </form>
          </div> );
       
    }
}

 
export default Signup;