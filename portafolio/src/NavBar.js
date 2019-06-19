import React, {Component} from 'react';
import './App.css';


class NavBar extends Component{
    render(){
        return(
        <div className="NavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div id="navbarTogglerDemo01" >
            
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li>
                <a className="navbar-brand" href="#About">   Acerca de mí   </a>
                </li>
              <li className="nav-item active">
            <a className="navbar-brand" href="#Proyects">   Mis proyectos   </a>
              </li>
            <li className="nav-item active">
            <a className="navbar-brand" href="#Contact">   Contactme!!   </a>
            </li>
            </ul> 
            </div>    
        </nav>     
        </div>
        )
    }
}

export default NavBar;