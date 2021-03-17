import React, { Component } from 'react'
import axios from 'axios';
import Indisposition from '../Indisposition';
import Plus from '../Plus';

export class Chauffeur_non_dispo extends Component {
    constructor(props) {
		super(props);

		this.state = {
			chauffeurs: []
		}
    }
    componentDidMount() {
        this.getChauffeurs();
    }

    getChauffeurs = () => {
    axios.get('chauffeurs')
        .then(response => this.setState({
            chauffeurs: response.data
        }))
    }

    

    render() {
        console.log(this.state.chauffeurs)
        const chauffeurs = this.state.chauffeurs
        return (
            <div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 ">
                        <div class="x_panel">
                        <div class="x_title">
                            <h2>List des chauffeurs Non disponible <small>:-)</small></h2>
                            <ul class="nav navbar-right panel_toolbox">
                            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Settings 1</a>
                                    <a class="dropdown-item" href="#">Settings 2</a>
                                </div>
                            </li>
                            <li><a class="close-link"><i class="fa fa-close"></i></a>
                            </li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
                        <div class="x_content">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="card-box table-responsive">
                            <p class="text-muted font-13 m-b-30">
                            Veuiller clicker sur le button disponible pour changer la disponibiliter d'un chauffeur  <code>${} </code>
                            </p>
                            <table id="datatable" class="table table-striped table-bordered" style={{width: '100%'}}>
                            <thead>
                                <tr>
                                <th>Photo</th>
                                <th>prenom</th>
                                <th>permis</th>
                                <th>adresse</th>
                                <th>province</th>
                                <th>disponibiliter</th>
                                <th>info</th>
                                <th>supr</th>
                                </tr>
                            </thead>


                            <tbody>
                                {chauffeurs && chauffeurs.map(chauffeur => {
                                    return (
                                        <tr>
                                            <Indisposition chauffeur={chauffeur} getChauffeurs={this.getChauffeurs} />
                                            
                                        </tr>
                                    )
                                })}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
              </div>
                
            </div>
        )
    }
}

export default Chauffeur_non_dispo;
