import React, {Component} from 'react';
import './App.css';


class NavBar extends Component{
    render(){
        return(
        <div className="NavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#About">Acerca de mí</a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
            <a className="navbar-brand" href="#Proyects">Mis proyectos <span class="sr-only">(current)</span></a>
              </li>
            <li className="nav-item active">
            <a className="navbar-brand" href="#">Contactme!!</a>
            </li>
            </ul>
        </div>    
        </nav>     
        </div>
        )
    }
}

export default NavBar;