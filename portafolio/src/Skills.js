import React, {Component} from 'react';
import './App.css';


class Skills extends Component{
    render(){
        return(
            <div className="container">
                <h1 className="titleSkills">Habilidades</h1>
                <div class="row">
                    <div class="col">
                        <div class="jumbotron jumbotron-fluid">
                            <div class="container">
                                <h2 class="display-4">Soft Skills<i class="fas fa-users"></i></h2>
                                <p class="lead">Comunicacion asertiva</p>
                                <p class="lead">Adaptable</p>
                                <p class="lead">Solución de problemas</p>
                                <p class="lead">Empatica</p>
                                <p class="lead">Trabajo colaborativo</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                    <div class="jumbotron jumbotron-fluid">
                            <div class="container">
                                <h2 class="display-4">Tech Skills<i class="fas fa-chalkboard-teacher"></i></h2>
                                <p class="lead">Javascript</p>
                                <p class="lead">React</p>
                                <p class="lead">Html</p>
                                <p class="lead">Css</p>
                                <p class="lead">Firebase <i class="fas fa-database"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;