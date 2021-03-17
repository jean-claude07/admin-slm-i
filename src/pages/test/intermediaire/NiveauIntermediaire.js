import React, { Component } from 'react'
import ModalIntermediaire from './ModalIntermediaire'

export class NiveauIntermediaire extends Component {
    render() {
        return (
            <div>
                <div className="x_panel">
                    <div className="x_title">
                    <h2>Test Chauffeur <small>Niveau Intermediaire</small></h2>
                    <div className="clearfix"></div>
                    </div>
                    <div className="x_content">

                    <table className="table">
                        <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Test</th>
                            <th>Reponse</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Vitesse maximum en Ville?</td>
                            <td>75 Km/h</td>
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
                    <center><ModalIntermediaire/></center>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default NiveauIntermediaire
