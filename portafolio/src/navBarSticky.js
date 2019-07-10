import React, { Component } from "react";
import "./navBarSticky.css";

class NavBarSticky extends Component {
  render() {
    return (
      <header>
        <section class="wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li>
              <a className="navbar-brand" href="#About">Acerca de mí</a>
            </li>
            <li className="nav-item active">
              <a className="navbar-brand" href="#Proyects">Mis proyectos</a>
            </li>
            <li className="nav-item active">
              <a className="navbar-brand" href="#Contact">Contactme!!</a>
            </li>
          </ul>
        </nav>
        </section>
      </header>
    );
  }
}

export default NavBarSticky;
