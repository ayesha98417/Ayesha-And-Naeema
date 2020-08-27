import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Points from "./components/Points";
import Default from "./components/Default";
import WishList from "./components/WishList";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Contact from "./components/contactus";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./data";

class App extends Component {

 
  
  render() { 
    return ( 
      <React.Fragment >        
        <NavBar />       
        <BrowserRouter>
        <Switch>              
        <Route path="/Points" component={Points} />
        <Route path="/WishList" component={WishList} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/contactus" component={Contact} />
        <Route path="/ProductDetail/:_id" component={ProductDetail} />
        <Route path="/" component={Home} />
       </Switch>
       </BrowserRouter>
       <Footer />
      </React.Fragment>
     );
  }
}
 
export default App;