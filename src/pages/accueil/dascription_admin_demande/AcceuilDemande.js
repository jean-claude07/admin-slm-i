import React, { Component } from 'react'
import Description_demande from './Description_demande'

export class AcceuilDemande extends Component {
    render() {
        return (
            <>
                <div className="body">
                    <p>Les dammandes publier dans le pages d'accueuil</p>
                    <div className="clearfix"></div>
                        <div className="col-md-12 col-sm-6  ">
                            <div className="x_panel">
                            <div className="x_title">
                                <h2>Liste des <small>Demandes</small></h2>
                                <div className="clearfix"></div>
                            </div>
                            <div className="x_content">

                                <table className="table">
                                <thead>
                                    <tr>
                                    <td>Date</td>
                                    <th>Nom</th>
                                    <th>catégorie permis</th>
                                    <th>Niveau d'éxperience</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">10 - 03 - 2021</th>
                                    <td>Jean Claude</td>
                                    <td>A, B, D</td>
                                    <td>Intermediaire</td>
                                    <td><Description_demande/></td>
                                    <td><ul className="nav navbar-right panel_toolbox">
                                                <li> <a className="btn btn-danger" role="button">
                                                    <i className="fa fa-trash"></i>
                                                    </a>
                                                </li>
                                            
                                                <li> <a className="btn btn-primary" role="button">
                                                    <i className="fa fa-paper-plane-o"></i>
                                                    </a>
                                                </li>
                                            </ul></td>
                                    </tr>
                                </tbody>
                                </table>

                            </div>
                            </div>
                        </div> 
                    
                    
                </div>
            </>
        )
    }
}

export default AcceuilDemande
