import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../App.css';
import logo from "../logo.png";
import styled from 'styled-components';
import TooltipReact from "./Tooltip";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button
  } from 'reactstrap';
  

function NavBar(props) {
    
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
        return ( 
            <div>
            <BrowserRouter>
            <Navbar className="navbar navbar-expand-sm  px-sm-5 header " > 
            <NavbarBrand className="mr-auto" href="/"><img src={logo} alt="store" className="navbar-brand" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                
               <Collapse isOpen={isOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <Link className="nav-link header-links m-2"  to='/home'> Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link header-links m-2" to='/aboutus'> About Us</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link header-links m-2" to='/contactus'> Contact Us</Link>
                            </NavItem>
                            </Nav>
                            <form className="form-inline search ml-5" style={{alignContent:"center"}}>
                                <input className="form-control form-control-sm " style={{width: "250px", height:"3rem"}} type="search" placeholder="Search" aria-label="Search"></input>
                                <button style={{height:"3rem"}}><i class="fab fa-sistrix"></i></button>
                            </form>

                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                <Link to='/Login'><button  className="m-2 Button" > Login</button></Link>
                                <Link to='/Signup'><button  className="m-2 Button" > Sign up</button></Link>
                                  
                                </NavItem>
                            </Nav>                   
                       </Collapse>
                        </Navbar> 
                        <Navbar light expand="md headerL">
                    <div className="container headerL">
                        <NavbarToggler onClick={toggle} />
                        
                        <Collapse isOpen={isOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <Link className="nav-link headerl-links mr-2"  to='/Watches'> Watches</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link headerl-links mr-1" to='/Perfumes'> Perfumes</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link headerl-links mr-1"  to='/wishlist'>Wishlist</Link>
                            </NavItem>
                            
                            </Nav>

                            <Nav  navbar className="ml-auto">
                                <NavItem>
                                <Link className="nav-link tip ml-2"  to='/Points' data-tip data-for="Your Points"><span><i class="fa fa-gem " aria-hidden="true"></i></span></Link></NavItem>
                                <TooltipReact place="bottom" id="Your Points"><span>Your Points</span></TooltipReact>
                                <NavItem><Link className="nav-link ml-2"  to='/purchasehistory' data-tip data-for="Purchase History"><span><i class="fa fa-history tip" aria-hidden="true"></i></span></Link></NavItem>
                                <TooltipReact place="bottom" id="Purchase History"><span>History</span></TooltipReact>
                                <NavItem><Link className="nav-link"  to='/notification' data-tip data-for="Notifications"><span><i class="fa fa-bell tip" aria-hidden="true"></i></span></Link>
                                </NavItem> 
                                <TooltipReact place="bottom" id="Notifications"><span>Notifications</span></TooltipReact>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>               
                </BrowserRouter>
                
                
         </div>
         );
        } 
    
export default NavBar;