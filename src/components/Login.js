import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


class Login extends Component {
    
    handleLogin(event) {
        console.log("Logged In"); 

    }

    render() { 
       
        
          
          return (<div className="form">
            <form onSubmit={this.handleLogin} >
              <ul className="form-container">
                <li>
                  <h2>Sign-In</h2>
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
                  <button type="submit" className="button-primary">Signin</button>
                </li>
                <li className="labels">
                  New to B & Beta?
                </li>
                <li>
                  <Link to={"/Signup"} className="button-secondary text-center" >Create your account</Link>
                </li>
              </ul>
            </form>
          </div> );
       
    }
}

export default Login;