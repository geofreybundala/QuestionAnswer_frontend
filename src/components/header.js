import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <div>
                 <nav className = "navbar navbar-expand-lg navbar-dark bg-dark static-top">
       <div className = "container" >
       <a className = "navbar-brand" href = "" >
         WithYou
       {/* <img src = "http://placehold.it/150x50?text=Logo"alt = "" /> */}
       </a> <button className = "navbar-toggler"
     type = "button"
     data-toggle = "collapse"
     data-target = "#navbarResponsive"
     aria-controls = "navbarResponsive"
     aria-expanded = "false"
     aria-label = "Toggle navigation" >
       <span className = "navbar-toggler-icon" > </span> 
       </button> 
       <div className = "collapse navbar-collapse"
     id = "navbarResponsive" >
       <ul className = "navbar-nav ml-auto" >
       <li className = "nav-item active" >
       <a className = "nav-link" href = "" > Home <span className = "sr-only" > (current) </span> 
       </a> </li> 
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

    
       {/* <div className = "container" >
       <h1 className = "mt-4" > Logo Nav by Start Bootstrap </h1> 
       <p> The logo in the navbar is now a
     default Bootstrap feature in Bootstrap 4!Make sure to set the width and height of the logo within the HTML or with CSS.For best results, use an SVG image as your logo. </p> 
     </div> */}
            </div>
        )
    }
}
