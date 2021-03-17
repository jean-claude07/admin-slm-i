import React, { Component } from 'react'
import axios from 'axios';
import Plus from './Plus';

export class Disposition extends Component {
    state={
        disponible: ''
    }

    onClick = e => {
        e.preventDefault()
        this.setState({
            disponible: 'non'
        })
        
        axios.patch(`chauffeurs/${this.props.chauffeur.id}`, {disponible: 'non'}).then(resp => {
                if(resp.status === 200){
                    window.location.reload()
                }
            })
    }

    deleteChauffeur = (chauffeur) => {
        axios.delete(`/chauffeurs/${this.props.chauffeur.id}`).then(response => {
            if (response.status === 204) {
                this.props.getChauffeurs();
            }
        })
    }

    render() {
        console.log(this.props)
        let chauffeur;
        if(this.props.chauffeur.disponible == "oui"){
            let button;
            if(this.state.disponible === "non"){
                button = (
                    <button class="btn btn-primary" >Non disponible</button>
                    
                )
            }else{
                button = (
                    <button  class="btn btn-primary" onClick={this.onClick}>Disponible</button>
                )
            }
            chauffeur = (
                <>
                    <td>
                        <img src={`http://apimanageur.herokuapp.com/${this.props.chauffeur.photo.url}`} className="rounded-circle" width="50px" height="50px" />
                    </td>
                    <td >{this.props.chauffeur.prenom} </td>
                    <td>{this.props.chauffeur.categorie_permis} </td>
                    <td>{this.props.chauffeur.adresse} </td>
                    <td>{this.props.chauffeur.province} </td>
                    <td>
                        {button}
                    </td>
                    <td>
                        <Plus/>
                    </td>
                    <td>  
                        <div className="content_td">
                        <ul class="nav navbar-right panel_toolbox">
                            <li> <a  className="btn btn-danger" onClick={() => this.deleteChauffeur(chauffeur)} role="button">
                                <i className="fa fa-trash"></i>
                                </a>
                            </li>
                            
                            <li> <a className="btn btn-success" role="button">
                                    <i class="fa fa-paper-plane-o"></i>
                                    </a>
                            </li>
                        </ul>
                        </div>
                    </td>
                    
                </>
            )
        }
        return (
            <>
                {chauffeur}
            </>
            
        )
    }
}

export default Disposition
