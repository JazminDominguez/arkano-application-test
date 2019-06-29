import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Form from "./Form";
import Dashboard from "./Dashboard";

class NavBar extends Component {
    render(){
    return (
        <section className="nav">
            <section className="userInfo">
                <div className="userPhoto"></div>
                <div className="info">
                    <p className="userName">Alexander Pierce</p>
                    <span className="dot"></span>
                    <p className="userStatus">Online</p>
                </div>
            </section>
            <section className="mainNavigation">
                <p className="navigation-font">
                    MAIN NAVIGATION
                </p>
             </section>
             <HashRouter>
             <ul className="navBar">
                 <li><NavLink exact to="/"></NavLink></li>
                 <li><NavLink to="/form">Form</NavLink></li>
                 <li><NavLink to="/dashboard">Dashboard</NavLink></li>
             </ul>
             <div className="content">
            <Route exact path="/" component={Form}/>
            <Route path="/form" component={Form}/>
            <Route path="/dashboard" component={Dashboard}/>
          </div>
             </HashRouter>
        </section>
    )
}}

export default NavBar;