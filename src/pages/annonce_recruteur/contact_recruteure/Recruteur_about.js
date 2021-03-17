import Axios from 'axios';
import React, { Component } from 'react'

export class Recruteur_about extends Component {
    state={
        recruteur: {}
    }

    componentDidMount = () => {
        this.getRecruteur();
    }

    getRecruteur = () => {
        Axios.get(`recruteurs/${this.props.annonce.recruteur_id}`).then(response => {
            this.setState({
                recruteur: response.data.recruteur
            })
        })
    }
    render() {
        const recruteur = this.state.recruteur
        const image = this.state.recruteur.pdprecruteur
        return (
            <div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 ">
                        <div class="x_panel">
                        
                        <div class="x_content">
                            <div class="col-md-3 col-sm-3  profile_left" >
                            <div class="profile_img">
                                <div className="container">
                                    <div id="crop-avatar">
                                    
                                        <img class="img-responsive" src={`http://apimanageur.herokuapp.com/${image && image.url}`} alt="Avatar" title="Change the avatar" width="250px" />
                                    </div>
                                </div>
                            </div>
                            <h3>{recruteur.nom} {recruteur.prenom} </h3>

                            <br />

                            </div>
                            <div class="col-md-9 col-sm-9 " >

                                <div class="profile_title">
                                    <div class="col-md-6">
                                    <h2>Membre depuis </h2>
                                    </div>
                                    <div class="col-md-6">
                                        <div id="reportrange" class="pull-right" >
                                            <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
                                            <span>{recruteur.created_at} </span> <b class="caret"></b>
                                        </div>
                                    </div>
                                </div>

                                <ul class="list-unstyled user_data">
                                    <li><i class="fa fa-map-marker user-profile-icon"></i> {recruteur.email}
                                    </li>

                                    <li>
                                    <i class="fa fa-briefcase user-profile-icon"></i> {recruteur.telephone}
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Recruteur_about
