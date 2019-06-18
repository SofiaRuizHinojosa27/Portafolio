import React, {Component} from 'react';
import './App.css';

class Proyects extends Component{
    render(){
        return(
        <div className="Proyects" id="Proyects">
            <h1 className="titleProyects">Mis Proyectos</h1>
            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Título: IN-BIKE-ME</h5>
                        <p class="card-text">Descripción: Es una web de un activista ecologico, que busca fomentar el uso de la bicicleta como medio de transporte y hacer una comunidad de ciclistas urbanos en GDL</p>
                        <a href="https://sofiaruizhinojosa27.github.io/GDL002-data-lover/src/" target="_blank" class="btn btn-primary">Pruebalo</a>
                        </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="..." alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" target="_blank" class="btn btn-primary">Pruebalo</a>
                    </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="..." alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <a href="#" target="_blank" class="btn btn-primary">Pruebalo</a>
                    </div>
                </div>    
            </div>
        </div>
        )
    }
}

export default Proyects;