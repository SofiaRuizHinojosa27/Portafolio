import React, {Component} from 'react';
import './App.css';


class Contact extends Component{
    render(){
        return(
        <div className="Contact">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-item" href="#">Github</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Linkend IN</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Mail</a>
                </li>
            </ul>     
        </div>
        )
    }
}

export default Contact;