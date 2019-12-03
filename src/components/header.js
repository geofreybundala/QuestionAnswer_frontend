import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class header extends Component {
    render() {
        return (
            <div>
                 <nav className = "navbar navbar-expand-lg navbar-dark bg-dark static-top">
       <div className = "container" >
       <Link className = "navbar-brand" to = "/"> WithYou
       {/* <img src = "http://placehold.it/150x50?text=Logo"alt = "" /> */}
       </Link> 
       <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarResponsive" aria-controls = "navbarResponsive" aria-expanded = "false"  aria-label = "Toggle navigation" >
       <span className = "navbar-toggler-icon" > </span> 
       </button> 
       <div className = "collapse navbar-collapse" id = "navbarResponsive" >
       <ul className = "navbar-nav ml-auto" >
       <li className = "nav-item active" >
       <Link className = "nav-link" to = "/" > Home <span className = "sr-only" > (current) </span> </Link> </li> 
       <li className = "nav-item">
          <a className = "nav-link" href = "" > About </a> 
       </li> 
       <li className = "nav-item" >
       <a className = "nav-link" href = "" > Services </a> 
       </li> 
       <li className = "nav-item" >
       <a className = "nav-link" href = "" > Contact </a> 
       </li> 
       </ul> 
       </div> 
       </div> 
       </nav>

            </div>
        )
    }
}
