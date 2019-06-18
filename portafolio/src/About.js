import React, {Component} from 'react';
import Profile from './Sofi3.jpg';
import ProfilePhone from './SofiPhone.jpg';
import './App.css';

class About extends Component{
    render(){
        return(
        <div className="About" id="About">
            <div className="media">
                <img className="profile" src={Profile}/>
                    <div className="media-body">
                        <h1 className="mt-0">Acerca de mí</h1>
                        <p>Emprendedora de corazón, apasionada por el nuevo conocimiento, mi mayor motivación es crecer profesionalmente, y alcanzar la mejor versión de mí mediante la experiencia.</p>
                        <p className="mb-0">Me gusta ver la vida con alegría y me entusiasma hacer una diferencia positiva con quienes me rodean.</p>
                        <img className="profilePhone" src={ProfilePhone}/>
                    </div>
            </div>        
        </div>
        )
    }
}

export default About;