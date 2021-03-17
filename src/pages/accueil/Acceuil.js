import React, { Component } from 'react';
import '../accueil/Acceuil.css';
import Axios from 'axios';
import AccueilAnnonce from './description_admin_annonce/AccueilAnnonce';
import AcceuilDemande from './dascription_admin_demande/AcceuilDemande';
import Chauffeur_dispo from '../chauffeurs_admin/Chauffeur_dispo/Chauffeur_dispo';


export class Acceuil extends Component {

    state={
        annonces: []
    }

    componentDidMount = () => {
        this.getAnnonces();
    }

    getAnnonces = () => {
        Axios.get('annonce').then(response => {
            this.setState({
                annonces: response.data
            })
        })
    }
   
    render() {
        const annonce = this.state.annonces
        return (
            <div>
                <div className="content-general">  
                    <div className="col-md-12 col-sm-12 ">
                        <div className="panel-content">
                            <div className="body">
                                <p>Les annonces publier dans le pages d'accueuil</p>
                                <div className="clearfix"></div>
                                    <div className="col-md-12 col-sm-6  ">
                                        <div className="x_panel">
                                        <div className="x_title">
                                            <h2>Liste des<small>Annonces</small></h2>
                                            <div className="clearfix"></div>
                                        </div>
                                            <div className="x_content">

                                                <table className="table">
                                                <thead>
                                                    <tr>
                                                    <th>Date</th>
                                                    <th>Poste</th>
                                                    <th>Contrat</th>
                                                    <th>Description</th>
                                                    <th>Action</th>
                                                    </tr>
                                                    </thead>
                                                        {annonce && annonce.map(annonce => {
                                                            return (

                                                                <AccueilAnnonce dataAnnonce={annonce} />
                                                            )
                                                        })}
                                                     </table>

                                                </div>

                                            </div>
                                        </div> 
                                                    
                                                    
                                    </div>  
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 ">
                        
                            <Chauffeur_dispo />
                            
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Acceuil
