import React, {Component} from 'react';
import Profile from './Sofi3.jpg';
import ProfilePhone from './SofiPhone.jpg';
import './App.css';

class About extends Component{
    render(){
        return(
        <div className="About" id="About">
            <div className="media">
                <img className="profile" src={Profile} alt="profile"/>
                    <div className="media-body">
                    <img className="profilePhone" src={ProfilePhone} alt="profile"/>
                        <h2 className="aboutText">Acerca de mí</h2>
                        <p>Emprendedora de corazón, apasionada por el nuevo conocimiento, mi mayor motivación es crecer profesionalmente, y alcanzar la mejor versión de mí mediante la experiencia.</p>
                        <p className="mb-0">Me gusta ver la vida con alegría y me entusiasma hacer una diferencia positiva con quienes me rodean.</p>  
                    </div>
            </div>        
        </div>
        )
    }
}

export default About;