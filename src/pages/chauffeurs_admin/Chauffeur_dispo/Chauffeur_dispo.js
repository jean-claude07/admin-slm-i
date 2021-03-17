import React, { Component } from 'react'
import axios from 'axios'
import Disposition from '../Disposition';

import './chauffeur_dispo.css'
export class Chauffeur_dispo extends Component {
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
                <div className="content-general"></div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 ">
                    <div className="panel-content">
                        <div class="x_panel">
                        <div class="x_title">
                            <h2>List des chauffeurs</h2>
                            <ul class="nav navbar-right panel_toolbox">
                            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
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
                            Veuiller clicker sur le button disponible pour changer la disponibiliter d'un chauffeur
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
                                <th>Detaille</th>
                                <th>Action</th>
                                </tr>
                            </thead>


                            <tbody>
                                {chauffeurs && chauffeurs.map(chauffeur => {
                                    return (
                                        <tr>
                                            <Disposition chauffeur={chauffeur} getChauffeurs={this.getChauffeurs} />
                                            
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

            </div>
        )
    }
}

export default Chauffeur_dispo;
