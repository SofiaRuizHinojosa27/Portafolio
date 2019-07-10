import React from 'react';
import logo2 from './logo2.jpg';
import './App.css';
import About from './About';
import NavBar from './NavBar';
import Proyects from './Proyects';
import Skills from './Skills';
import Contact from './Contact';
import NavBarSticky from './navBarSticky';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo"/>
      </header>
      <NavBarSticky/>
      <NavBar/>
      <About/>
      <Skills/>
      <Proyects/>
      <Contact/>
    </div>
  );
}

export default App;
