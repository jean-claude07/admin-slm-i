import Axios from 'axios';
import React, { Component } from 'react'
import Description_annonce from './Description_annonce'

export class AccueilAnnonce extends Component {
    
    render() {
        const annonce = this.props.dataAnnonce
        console.log(this.props.dataAnnonce)
        let table;

        if(annonce.client === 'true')
        table = (
            <>
                <tbody>
                    <tr>
                    <th scope="row">{annonce.date_limite} </th>
                    <td>{annonce.poste} </td>
                    <td>{annonce.contrat} </td>
                    <td>{annonce.description} </td>
                    <td> <Description_annonce data={annonce} /></td>
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
            </>
        )
        return (
            <>         
                {table}                      
            </>
        )
    }
}

export default AccueilAnnonce
